from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

from .bet import Bet

class User(BaseModel):
    id: Optional[int]
    email: str
    name: str
    hashed_password: str
    coins : float
    created_at: Optional[datetime]
    
    class Config:
        orm_mode = True


class RegisterParams (BaseModel):
    name: str
    email: EmailStr
    password: str
    password_cfg: str

class RegisterSchema (BaseModel):
    user: User

    
class LoginSchema (BaseModel):
    user: User

class UserLog(BaseModel):
    email: str
    password: str

class UserCoins(BaseModel):
    coins: float

