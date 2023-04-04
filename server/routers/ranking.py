from fastapi import APIRouter, FastAPI, Depends
from sqlalchemy.orm import Session

from schema.auth import User
from config.database import get_db

router = APIRouter(
    tags=['bet'],
)

app = FastAPI()

@router.post("/playerWithMostCoins", response_model=User)
def playerWithMostCoins(request: User, db: Session = Depends(get_db)):

