from fastapi import FastAPI
import mysql.connector
from dotenv import load_dotenv
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


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/register")
async def register():
    return {"message": ""}
