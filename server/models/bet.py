import datetime

from sqlalchemy import Boolean, Column, Integer, String, Float, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from models import User_bet
from config.database import Base


class Bet(Base):
    __tablename__ = "bets"
    # __table_args__ = {'extend_existing': True}
    
    id = Column(Integer, primary_key= True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    odds_for = Column(Integer, default=None)
    odds_against = Column(Integer, default=None)
    text = Column(String(255), default=None)
    result = Column(Boolean, default=None)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    end = Column(DateTime, default=None)
    
    creator = relationship("User", foreign_keys=[user_id])
    users = relationship("User", secondary=User_bet, back_populates="bets")