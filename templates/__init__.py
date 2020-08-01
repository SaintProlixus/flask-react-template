from flask import Flask

app = Flask(__name__, static_folder="./public", template_folder="./static")
from templates.src.views import src_blueprint

# register the blueprints
app.register_blueprint(src_blueprint)
