from sqlalchemy import Column, Integer, ForeignKey, Table, Float
from config.database import Base

User_bet = Table('user_bet', Base.metadata,
                 Column('user_id', Integer, ForeignKey('users.id')),
                 Column('bet_id', Integer, ForeignKey('bets.id')),
                 Column('amount', Float),
                )
