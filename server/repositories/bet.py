from datetime import datetime

from pydantic import constr
from sqlalchemy.orm import Session

from models.bet import Bet
from models.user import User


def create_bet(db: Session, user_id: int, text:str = None, end: datetime=datetime):
    bet = (get_bet_by_user_id(db, user_id))

    if bet is None:
        new_bet = Bet(
            user_id=user_id,
            odds_for= 0 ,
            odds_against= 0,
            text = text or None,
            result = None,
            end = end or None
        )
        db.add(new_bet)
        db.commit()
        db.refresh(new_bet)
        return new_bet
    else:
        return None

def get_bet_by_user_id(db: Session, id: int):
    user = db.query(User).filter(User.id == id).first()
    if user is None:
        raise ValueError("Utilisateur non trouvé")

    bets = db.query(Bet).filter(Bet.user_id == id).all()
    if bets:
        return bets
    else:
        return None


def get_all_bets(db: Session):
    return db.query(Bet).all()