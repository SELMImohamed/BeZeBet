from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from config.database import SessionLocal, engine
from server.config.database import get_db
from ..schema.auth import RegisterParams, RegisterSchema

router = APIRouter(
    tags=['auth'],
    prefix="/auth",
)   


# @router.post('/register', response_model=RegisterSchema)
# def register(request: RegisterParams, db: Session = Depends(get_db)):
#     return {"message": "Hello World"}s

@router.post('/register')
async def register(register_data: RegisterParams, register_schema: RegisterSchema):
    # Your registration logic here
    return {"message": "User registered successfully!"}