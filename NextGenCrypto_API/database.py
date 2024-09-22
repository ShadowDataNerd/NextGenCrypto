from sqlalchemy import create_engine, Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime, timezone

# SQLite database connection
SQLALCHEMY_DATABASE_URL = "sqlite:///server_info.db"

# Create an SQLAlchemy engine
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)



# Base class for the database models
Base = declarative_base()

# Datenbankmodelle
class URL(Base):
    __tablename__ = "urls"

    id = Column(Integer, primary_key=True, index=True)
    url = Column(String, unique=True, index=True)
    last_checked = Column(DateTime, default=datetime.now(timezone.utc))  # Time of the last query I changed something here
    server_info = relationship("ServerInfo", back_populates="url")

class ServerInfo(Base):
    __tablename__ = "server_info"

    id = Column(Integer, primary_key=True, index=True)
    url_id = Column(Integer, ForeignKey("urls.id"))
    tls_info = Column(Text)
    server_header = Column(String)
    security_headers = Column(Text)

    url = relationship("URL", back_populates="server_info")

class Recommendation(Base):
    __tablename__ = "recommendations"

    id = Column(Integer, primary_key=True, index=True)
    server_header = Column(String, unique=True)
    recommendation = Column(Text)

# Create the tables in the database
Base.metadata.create_all(bind=engine)

# Create a SessionLocal class that will be used later to create sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
