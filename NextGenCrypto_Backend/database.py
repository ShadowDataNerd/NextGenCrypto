from sqlalchemy import create_engine, Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime, timezone

# SQLite-Datenbankverbindung
SQLALCHEMY_DATABASE_URL = "sqlite:///server_info.db"

# Erstelle eine SQLAlchemy-Engine
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)



# Basisklasse für die Datenbankmodelle
Base = declarative_base()

# Datenbankmodelle
class URL(Base):
    __tablename__ = "urls"

    id = Column(Integer, primary_key=True, index=True)
    url = Column(String, unique=True, index=True)
    last_checked = Column(DateTime, default=datetime.now(timezone.utc))  # Zeitpunkt der letzten Abfrage Hier habe ich was geender
    server_info = relationship("ServerInfo", back_populates="url")

class ServerInfo(Base):
    __tablename__ = "server_info"

    id = Column(Integer, primary_key=True, index=True)
    url_id = Column(Integer, ForeignKey("urls.id"))
    tls_info = Column(Text)
    server_header = Column(String)
    security_headers = Column(Text)

    url = relationship("URL", back_populates="server_info")

# Erstelle die Tabellen in der Datenbank
Base.metadata.create_all(bind=engine)

# Erstelle eine SessionLocal-Klasse, die später verwendet wird, um Sitzungen zu erstellen
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
