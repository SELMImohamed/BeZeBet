from pydantic import BaseModel


class UserCreate(BaseModel):
    id: int
    name: str
    email: str
    password: str
    coins: int
    nbParis: int
    nbParisWin: int

    class Config:
        orm_mode = True

