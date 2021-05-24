from flask import Flask
from .hello_world import hello_world
from typing import Any, Mapping


def create_app(test_config: Mapping[str, Any] = None) -> Any:
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    if test_config is None:
        app.config.from_object('config')
    else:
        app.config.from_mapping(test_config)

    app.register_blueprint(hello_world)

    return app
