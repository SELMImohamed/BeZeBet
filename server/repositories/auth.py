from ..schema.auth import User
from ..config.database import database_connection
from ..config.hashing import Hash

def create_user(email:str, password: str, name:str):
    user = (get_user_by_email(email))
    
    if user == None:
        new_user = User(
            email= email,
            hashed_password = Hash.bcryt(password),
            name=name,
            coins = 0,
            nbParis = [],
            nbParisWin= 0,
        )
        cursor = database_connection.cursor()
        cursor.execute("INSERT INTO user (name, email, password, date, coins, nbParis, nbParisWin) VALUES (%s, %s, %s, %s, %s, %s, %s)", (new_user.name, new_user.email, new_user.hashed_password, new_user.date, new_user.coins, new_user.nbParis, new_user.nbParisWin))
        database_connection.commit()
        cursor.close()
        return new_user
    else:
        return None


def get_user_by_email(email:str):
    cursor = database_connection.cursor()
    cursor.execute("SELECT * FROM user WHERE email = %s", (email,))
    result = cursor.fetchone()
    cursor.close()
    if result is None:
        return None
    return User(**result)