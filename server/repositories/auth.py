from uuid import uuid4
import datetime
from sqlalchemy.orm import Session

from models.user import User
from config.hashing import Hash



def create_user(db: Session, email:str, password: str, name:str):
    print(email)
    user = (get_user_by_email(db, email))
    
    if user is None:
        new_user = User(
            email= email,
            name = name,
            hashed_password = Hash.bcrypt(password),
            coins = 100,
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    else:
        return None


def get_user_by_email(db:Session, email:str):
    return db.query(User).filter(User.email == email).first()