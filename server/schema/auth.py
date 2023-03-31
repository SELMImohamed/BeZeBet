from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

from .bet import Bet

class User(BaseModel):
    id: int
    name: str
    email: str
    coins : int
    nbParis : Optional[List[Bet]]
    nbParisWin : int
    createdAt: datetime
    
    class Config():
        orm_mode = True

class RegisterParams (BaseModel):
    username: str
    email: EmailStr
    password: str
    password_cfg: str

class RegisterSchema (BaseModel):
    username: str
    email: EmailStr

class UserLog(BaseModel):
    email: str
    password: str

