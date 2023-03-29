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


class Bet(BaseModel):
    idUser: int
    gain : int
    date : date
    sumPour : int
    sumContre : int
    resultat : bool


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/register")
async def register(user: User):
    cursor = database_connection.cursor()
    cursor.execute("INSERT INTO user (name, email, password, date, coins, nbParis, nbParisWin) VALUES (%s, %s, %s, %s, %s, %s, %s)", (user.name, user.email, user.password, user.date, user.coins, user.nbParis, user.nbParisWin))
    database_connection.commit()
    cursor.close()
    return {"message": "registered"}


@app.post("/login")
async def login(user: UserLog):
    cursor = database_connection.cursor()
    cursor.execute("SELECT * FROM user WHERE email = %s AND password = %s", (user.email, user.password))
    result = cursor.fetchone()
    cursor.close()
    if result is None:
        raise HTTPException(status_code=400, detail="invalid email or password")
    return {"message": "logged in"}


@app.post('/createBet')
async def createBet(bet: Bet):
    cursor = database_connection.cursor()
    cursor.execute("INSERT INTO bet (idUser, date, sumPour, sumContre, resultat,gain) VALUES (%s, %s, %s, %s, %s,%s)", (bet.idUser, bet.date, bet.sumPour, bet.sumContre, bet.resultat,bet.gain))
    database_connection.commit()
    cursor.close()
    return {"message": "bet created"}


@app.post("/playerWithMostCoins")
async def playerWithMostCoins():
    cursor = database_connection.cursor()
    cursor.execute("SELECT * FROM user ORDER BY coins DESC")
    result = cursor.fetchall()
    cursor.close()
    if result:
        return {"message": result}

    return {"error messsage": "ERROR"}
