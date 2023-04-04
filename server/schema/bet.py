from pydantic import BaseModel, EmailStr, constr
from typing import Optional, List

from datetime import datetime


class Bet(BaseModel):
    id: Optional[int]
    user_id: int
    odds_for: int = None
    odds_against: int = None
    result: Optional[bool] = None
    created_at: Optional[datetime] = None
    end: Optional[datetime] = None

    class Config():
        orm_mode = True


class betSchema(BaseModel):
    bet: Bet


class betParams(BaseModel):
    user_id: int
    # odds_for: int = None
    # odds_against: int = None
    text: str = None
    # result: Optional[bool] = None
    end: Optional[datetime] = None