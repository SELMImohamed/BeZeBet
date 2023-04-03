from fastapi import APIRouter, Depends, HTTPException, FastAPI, status
from sqlalchemy.orm import Session

from config.database import get_db
from schema.bet import betSchema, betParams
from schema.bet import Bet
from repositories.bet import create_bet, get_bet_by_id

router = APIRouter(
    tags=['bet'],
)

app = FastAPI()


@router.post("/createBet", response_model=betSchema)
def bet(request: betParams, db: Session = Depends(get_db)):
    if request.user_id == "" or request.odds_for == "" or request.odds_against == "" or request.result == "":
        raise HTTPException(status_code=500, detail=f'EMPTY !')
    new_bet = create_bet(db, request.user_id, request.odds_for, request.odds_against, request.result)

    if new_bet is None:
        raise HTTPException(status_code=500, detail=f'NOT OK !')
    new_bet_dict = new_bet.__dict__
    new_bet_dict.pop('_sa_instance_state', None)

    return {
        "bet": new_bet_dict,
    }
