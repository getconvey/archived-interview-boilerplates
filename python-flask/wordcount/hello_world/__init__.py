from flask import Blueprint, current_app, jsonify
from typing import Any

hello_world = Blueprint('hello_world', __name__)


@hello_world.route("/helloworld")
def reply() -> Any:
    return jsonify({"text": current_app.config['HELLO_WORLD']})
