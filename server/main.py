from fastapi import FastAPI, HTTPException
import mysql.connector
from dotenv import load_dotenv
from pydantic import BaseModel
from datetime import date, datetime, time, timedelta
import os

load_dotenv()

app = FastAPI()

database_connection = mysql.connector.connect(
    host=os.getenv("host"),
    port=os.getenv("port"),
    user=os.getenv("user"),
    password=os.getenv("password"),
    database=os.getenv("database")
)

print(database_connection)

class User(BaseModel):
    name: str
    email: str
    password: str
    date : date
    coins : int
    nbParis : int
    nbParisWin : int

class UserLog(BaseModel):
    email: str
    password: str
@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/register")
async def register(user: User):
    database_connection.cursor().execute("INSERT INTO user (name, email, password, date, coins, nbParis, nbParisWin) VALUES (%s, %s, %s, %s, %s, %s, %s)", (user.name, user.email, user.password, user.date, user.coins, user.nbParis, user.nbParisWin))
    database_connection.commit()
    database_connection.close()
    return {"message": "registered"}

@app.post("/login")
async def login(userlog: UserLog):
    database_connection.cursor().execute("SELECT * FROM user WHERE email = ? AND password = ?", (userlog.email, userlog.password))
    result = database_connection.cursor().fetchone()
    database_connection.commit()
    database_connection.close()
    if result is None:
        raise  HTTPException(status_code=400, detail="invalid email or password")
    return {"message": "logged in"}