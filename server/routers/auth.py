from typing import List
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, FastAPI, status

from config.hashing import Hash
from config.database import get_db
from schema.auth import RegisterParams, RegisterSchema, LoginSchema
from models.user import User
from fastapi.security import OAuth2PasswordRequestForm

from repositories.auth import create_user, get_user_by_email

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
    new_user_dict = new_user.__dict__
    new_user_dict.pop('_sa_instance_state', None)
    
    return {
        "user": new_user_dict,
    }


@router.post('/login', response_model=LoginSchema)
def login(request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    if request.username == "" or request.password == "":
        raise HTTPException(status_code=500, detail=f'Email ou password vide !')    
    
    user = get_user_by_email(db, request.username)
    
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Votre identifiant et/ou votre mot de passe est incorrect.')        
    
    if not Hash.verify(user.hashed_password, request.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Votre identifiant et/ou votre mot de passe est incorrect.')

    return{
        "user": user
    }
    

# @router.get('/users')
# def get_users(db: Session = Depends(get_db)):
#     users = db.query(User).all()
#     return users