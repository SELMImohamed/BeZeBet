import datetime

from sqlalchemy import Boolean, Column, Integer, String, Float, DateTime, Boolean
from sqlalchemy.orm import relationship

from models import User_bet
from server.config.database import Base


class User(Base):
    __tablename__= "users"
    __table_args__ = {'extend_existing': True}
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(50),unique=True, index=True)
    name = Column(String(50), index=True)
    hashed_password=Column(String(255))
    coins = Column(Float)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    
    bets = relationship("Bet", secondary=User_bet, back_populates="users")