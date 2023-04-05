from fastapi import APIRouter, FastAPI, Depends
from sqlalchemy.orm import Session

from models.user import User
from config.database import get_db

router = APIRouter(
    tags=['ranking'],
)

app = FastAPI()

@router.get("/playerWithMostCoins")
def playerWithMostCoins(db: Session = Depends(get_db)):
    return db.query(User).order_by(User.coins.desc()).all()
