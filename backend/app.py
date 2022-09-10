
from flask import Flask;
from flask_migrate import Migrate
from flask_restful import Api;
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_cors import CORS
from config import config_env_files
from db import db
from models.message import MessageModel;
from resources.message import Message;
import os


app = Flask(__name__);
app.secret_key = 'user'
api = Api(app)
admin = Admin(app)
db.init_app(app)
migrate = Migrate(app,db)
admin.add_view(ModelView(MessageModel,db.session))
api.add_resource(Message,'/messages')

if __name__ == '__main__':
    env = os.environ.get('ENVIRONMENT', 'development')
    app.config.from_object(config_env_files[env])    
    app.config["CORS_HEADERS"] = "Content-Type"
    CORS(app, resources={r"/*": {"origins": "*"}})
    app.run(debug=True)  # important to mention debug=True