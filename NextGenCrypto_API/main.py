from fastapi import FastAPI, HTTPException, Depends
from datetime import datetime, timedelta, timezone
from sqlalchemy.orm import Session
from database import SessionLocal, URL, ServerInfo, Recommendation
from datetime import datetime, timedelta
from fastapi.middleware.cors import CORSMiddleware
import ssl
import socket
import httpx
import json
import csv

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Dependency on the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def load_recommendations_from_csv(file_path: str, db: Session):
    with open(file_path, mode='r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            server_header = row['server_header']
            recommendation = row['recommendation']
            # Saving in the database
            db_recommendation = db.query(Recommendation).filter(Recommendation.server_header == server_header).first()
            if not db_recommendation:
                new_recommendation = Recommendation(server_header=server_header, recommendation=recommendation)
                db.add(new_recommendation)
        db.commit()

def get_recommendation_by_server_header(server_header: str, db: Session):
    recommendation = db.query(Recommendation).filter(Recommendation.server_header == server_header).first()
    if recommendation:
        return recommendation.recommendation
    # Return a default recommendation if no suitable recommendation is available
    default_recommendation = db.query(Recommendation).filter(Recommendation.server_header == 'default').first()
    if default_recommendation:
        return default_recommendation.recommendation
    return "No recommendation available."

def perform_tls_handshake(url: str):
    try:
        parsed_url = httpx.URL(url)
        hostname = parsed_url.host
        port = parsed_url.port or 443

        context = ssl.create_default_context()

        with socket.create_connection((hostname, port)) as sock:
            with context.wrap_socket(sock, server_hostname=hostname) as ssock:
                tls_info = ssock.getpeercert()
                return tls_info

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during TLS handshake: {str(e)}")


@app.on_event("startup")
def on_startup():
    # Load the recommendations from the CSV file when starting the server
    db = SessionLocal()
    load_recommendations_from_csv('server_recommendation.csv', db)
    db.close()


def get_server_info(url: str):
    try:
        response = httpx.get(url)
        server_info = response.headers.get('Server', 'Unbekannt')

        security_headers = {
            "Strict-Transport-Security": response.headers.get("Strict-Transport-Security", "Not specified"),
            "Content-Security-Policy": response.headers.get("Content-Security-Policy", "Not specified"),
            "X-Content-Type-Options": response.headers.get("X-Content-Type-Options", "Not specified"),
            "X-Frame-Options": response.headers.get("X-Frame-Options", "Not specified"),
            "X-XSS-Protection": response.headers.get("X-XSS-Protection", "Not specified")
        }

        return {
            "status_code": response.status_code,
            "server_header": server_info,
            "headers": dict(response.headers),
            "security_headers": security_headers
        }
    except httpx.RequestError as e:
        raise HTTPException(status_code=500, detail=f"Error when retrieving the server information: {str(e)}")

@app.post("/server-info")
async def get_server_and_tls_info(url: str, db: Session = Depends(get_db)):
    """
    Accepts a URL and returns the TLS handshake information and security-relevant server information.
    Saves the URL and the information in the database.
    """
    # Check whether the URL already exists in the database
    db_url = db.query(URL).filter(URL.url == url).first()

    if db_url:
        # Make sure that db_url.last_checked is a UTC-aware datetime
        last_checked_utc = db_url.last_checked.replace(tzinfo=timezone.utc)  

        # Calculate the time span since the last query
        time_since_last_check = datetime.now(timezone.utc) - last_checked_utc  
        
        if time_since_last_check < timedelta(hours=24):
            # If the last query was less than 24 hours ago, return the saved data
            db_server_info = db.query(ServerInfo).filter(ServerInfo.url_id == db_url.id).first()
            recommendation = get_recommendation_by_server_header(db_server_info.server_header, db)
            return {
                "server_header": db_server_info.server_header,
                "recommendation": recommendation
            }
    
    # If the URL does not exist or the last query is older than 24 hours, perform a new query
    tls_info = perform_tls_handshake(url)
    server_info = get_server_info(url)

    if db_url:
        # Update the existing URL and server information
        db_url.last_checked = datetime.now(timezone.utc)
        db_server_info = db.query(ServerInfo).filter(ServerInfo.url_id == db_url.id).first()
        db_server_info.tls_info = json.dumps(tls_info)
        db_server_info.server_header = server_info["server_header"]
        db_server_info.security_headers = json.dumps(server_info["security_headers"])
    else:
        # Saving the new URL in the database
        db_url = URL(url=url, last_checked=datetime.now(timezone.utc))
        db.add(db_url)
        db.commit()
        db.refresh(db_url)

        # Saving the new server information in the database
        db_server_info = ServerInfo(
            url_id=db_url.id,
            tls_info=json.dumps(tls_info),
            server_header=server_info["server_header"],
            security_headers=json.dumps(server_info["security_headers"])
        )
        db.add(db_server_info)

    db.commit()

    recommendation = get_recommendation_by_server_header(server_info["server_header"], db)

    return {"server_header": server_info["server_header"], "recommendation": recommendation}

