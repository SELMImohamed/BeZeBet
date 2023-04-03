from typing import List
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, FastAPI
from config.database import get_db
from schema.auth import RegisterParams, RegisterSchema
from models.user import User


from repositories.auth import create_user

router = APIRouter(
    tags=['auth'],
)   
app = FastAPI()

@router.post('/register', response_model=RegisterSchema)
def register(request: RegisterParams, db: Session = Depends(get_db)):
    if request.email == "" or request.password == "":
        raise HTTPException(status_code=500, detail=f'Email or password is empty !')
    
    if request.password != request.password_cfg:
        raise HTTPException(status_code=500, detail=f'Password does not match !')
    
    new_user = create_user(db, request.email, request.password, request.name)
    
    if new_user is None:
        raise HTTPException(status_code=500, detail=f'Email already exists !')
    
    
    return {
        "user": new_user,
    }



# function to get every user
@router.get('/users')
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users