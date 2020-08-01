from flask import render_template, Blueprint

src_blueprint = Blueprint("src", __name__)


@src_blueprint.route("/")
@src_blueprint.route("/hello")
def index():
    return render_template("index.html")
