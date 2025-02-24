import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your-secret-key')
    NEWSAPI_KEY = os.getenv('NEWSAPI_KEY')
    GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')