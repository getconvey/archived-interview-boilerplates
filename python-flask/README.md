Uses flask with python 3.9 

    python3 -m venv venv
    . ./venv/bin/activate
    python3 -m pip install -r requirements.txt

    export FLASK_ENV=development
    export FLASK_APP=wordcount
    flask run

    curl http://localhost:5000/helloworld