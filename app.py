from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def coin_game():
    return render_template("euro_coin_game.html")


if __name__ == '__main__':
    app.run()
