## Starting the server for MacOS/Linux :

python3 -m venv env

# or

python -m venv env

# activate the venv :

source ./env/bin/activate

# Start the server uvicorn :
uvicorn main:app --reload



## Starting the server for windows :


python -m venv env

# This is the virtual env :
.\env\Scripts\Activate.ps1 

# This is to start the server :
uvicorn main:app --reload