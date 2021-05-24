from flask import Blueprint, current_app, jsonify

hello_world = Blueprint('hello_world', __name__)


@hello_world.route("/helloworld")
def reply():
    return jsonify({"text": current_app.config['HELLO_WORLD']})
