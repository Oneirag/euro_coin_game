from flask import Flask, render_template, Blueprint
import argparse

bp = Blueprint("euro_game", __name__,
                        template_folder='templates')


@bp.route('/')
def coin_game():
    return render_template("euro_coin_game.html")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", default=5555, help="flask port")
    parser.add_argument("--url_prefix", default="/", help="Url prefix for all routes")
    args, _ = parser.parse_known_args()
    app = Flask(__name__)
    app.register_blueprint(bp, url_prefix=args.url_prefix)
    app.run(port=args.port)
