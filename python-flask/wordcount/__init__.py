from flask import Flask, jsonify
from typing import Any, Mapping


def create_app(test_config: Mapping[str, Any] = None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    if test_config is None:
        app.config.from_object('config')
    else:
        app.config.from_mapping(test_config)

    @app.route("/helloworld")
    def hello_world():
        return jsonify({"text": app.config['HELLO_WORLD']})

    return app
