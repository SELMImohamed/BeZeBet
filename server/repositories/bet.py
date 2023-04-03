from datetime import datetime

from pydantic import constr
from sqlalchemy.orm import Session

from models.bet import Bet


def create_bet(db: Session, user_id: int, odd_for: int, odd_against: int, result: constr(min_length=0, max_length=1) = None):
    bet = (get_bet_by_id(db, user_id))

    if bet is None:
        new_bet = Bet(
            user_id=user_id,
            odds_for=odd_for,
            odds_against=odd_against,
            result=result,
        )
        db.add(new_bet)
        db.commit()
        db.refresh(new_bet)
        return new_bet
    else:
        return None

def get_bet_by_id(db: Session, id: int):
    return db.query(Bet).filter(Bet.user_id == id).first()