import mysql.connector
import os
from dotenv import load_dotenv

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
# from models import User, Bet, User_bet


load_dotenv()


SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
print(SQLALCHEMY_DATABASE_URL )

engine = create_engine(SQLALCHEMY_DATABASE_URL)
Base = declarative_base()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
        