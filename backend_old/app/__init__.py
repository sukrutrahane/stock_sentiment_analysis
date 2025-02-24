from flask import Flask
#from app.routes.summarizer_routes import bp as summarizer_bp
from app.routes.news_routes import bp as news_bp
from app.routes.sentiment_routes import bp as sentiment_bp
from app.routes.bot_routes import bot_bp  # Import bot route
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Register blueprints
    #app.register_blueprint(summarizer_bp, url_prefix='/chat')
    app.register_blueprint(news_bp, url_prefix='/news')
    app.register_blueprint(sentiment_bp, url_prefix='/sentiment')
    app.register_blueprint(bot_bp, url_prefix="/bot") 

    return app
