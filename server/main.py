from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from server.config.database import engine, Base

from server.models.user import User
from server.models.bet import Bet
from server.models.user_bet import User_bet



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

@app.get("/")
async def root():
    return {"message": "Hello World"}

def startup():
    Base.metadata.create_all(bind=engine)
    
    
app.on_event("startup")(startup)
