from ast import List
from fastapi import APIRouter, Depends, HTTPException, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config.database import engine, Base
from sqlalchemy.orm import Session

from models.user import User
from models.bet import Bet
from models.user_bet import User_bet
from config.database import get_db
from routers.auth import router as AuthRouter
from routers.bet import router as BetRouter

router = APIRouter(
    tags=['auth'],
)   
app = FastAPI()
origins = [
    '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(AuthRouter, tags=["auth"], prefix="/auth")
app.include_router(BetRouter, tags=["bet"], prefix="/bet")


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get('/users')
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users

def startup():
    Base.metadata.create_all(bind=engine)
    
    
app.on_event("startup")(startup)
