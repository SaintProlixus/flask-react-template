from flask import render_template, Blueprint

BP = Blueprint("routes", __name__)


@BP.route("/")
@BP.route("/hello")
def index():
    return render_template("index.html")
