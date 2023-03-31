from pydantic import BaseModel, EmailStr
from typing import Optional, List

from datetime import datetime

class Bet(BaseModel):
    idUser: int
    gain : int
    sumPour : int
    sumContre : int
    resultat : bool
    createdAt : datetime
    
    class Config():
        orm_mode = True
