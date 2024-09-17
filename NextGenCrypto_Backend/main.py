from fastapi import FastAPI, HTTPException, Depends
from datetime import datetime, timedelta, timezone
from sqlalchemy.orm import Session
from database import SessionLocal, URL, ServerInfo
from datetime import datetime, timedelta
from fastapi.middleware.cors import CORSMiddleware
import ssl
import socket
import httpx
import json

app = FastAPI()

# CORS-Konfiguration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # React-App URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Abhängigkeit zur Datenbank-Session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

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
        raise HTTPException(status_code=500, detail=f"Fehler beim TLS-Handshake: {str(e)}")

def get_server_info(url: str):
    try:
        response = httpx.get(url)
        server_info = response.headers.get('Server', 'Unbekannt')

        security_headers = {
            "Strict-Transport-Security": response.headers.get("Strict-Transport-Security", "Nicht festgelegt"),
            "Content-Security-Policy": response.headers.get("Content-Security-Policy", "Nicht festgelegt"),
            "X-Content-Type-Options": response.headers.get("X-Content-Type-Options", "Nicht festgelegt"),
            "X-Frame-Options": response.headers.get("X-Frame-Options", "Nicht festgelegt"),
            "X-XSS-Protection": response.headers.get("X-XSS-Protection", "Nicht festgelegt")
        }

        return {
            "status_code": response.status_code,
            "server_header": server_info,
            "headers": dict(response.headers),
            "security_headers": security_headers
        }
    except httpx.RequestError as e:
        raise HTTPException(status_code=500, detail=f"Fehler beim Abrufen der Serverinformationen: {str(e)}")

@app.post("/server-info")
async def get_server_and_tls_info(url: str, db: Session = Depends(get_db)):
    """
    Nimmt eine URL entgegen und gibt die TLS-Handshake-Informationen sowie sicherheitsrelevante Serverinformationen zurück.
    Speichert die URL und die Informationen in der Datenbank.
    """
    # Überprüfen, ob die URL bereits in der Datenbank vorhanden ist
    db_url = db.query(URL).filter(URL.url == url).first()

    if db_url:
        # Stelle sicher, dass db_url.last_checked ein UTC-aware datetime ist
        last_checked_utc = db_url.last_checked.replace(tzinfo=timezone.utc)  

        # Berechne die Zeitspanne seit der letzten Abfrage
        time_since_last_check = datetime.now(timezone.utc) - last_checked_utc  
        
        if time_since_last_check < timedelta(hours=24):
            # Wenn die letzte Abfrage weniger als 24 Stunden zurückliegt, gib die gespeicherten Daten zurück
            db_server_info = db.query(ServerInfo).filter(ServerInfo.url_id == db_url.id).first()
            return {
                "tls_info": json.loads(db_server_info.tls_info),
                "server_info": {
                    "server_header": db_server_info.server_header,
                    "security_headers": json.loads(db_server_info.security_headers)
                }
            }
    
    # Wenn die URL nicht vorhanden ist oder die letzte Abfrage älter als 24 Stunden ist, führe eine neue Abfrage durch
    tls_info = perform_tls_handshake(url)
    server_info = get_server_info(url)

    if db_url:
        # Aktualisiere die vorhandene URL und Serverinformationen
        db_url.last_checked = datetime.now(timezone.utc)
        db_server_info = db.query(ServerInfo).filter(ServerInfo.url_id == db_url.id).first()
        db_server_info.tls_info = json.dumps(tls_info)
        db_server_info.server_header = server_info["server_header"]
        db_server_info.security_headers = json.dumps(server_info["security_headers"])
    else:
        # Speichern der neuen URL in der Datenbank
        db_url = URL(url=url, last_checked=datetime.now(timezone.utc))
        db.add(db_url)
        db.commit()
        db.refresh(db_url)

        # Speichern der neuen Serverinformationen in der Datenbank
        db_server_info = ServerInfo(
            url_id=db_url.id,
            tls_info=json.dumps(tls_info),
            server_header=server_info["server_header"],
            security_headers=json.dumps(server_info["security_headers"])
        )
        db.add(db_server_info)

    db.commit()

    return {"tls_info": tls_info, "server_info": server_info}

