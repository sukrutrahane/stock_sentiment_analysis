# backend/app/routes/sentiment_routes.py
from flask import Blueprint, jsonify, request
from ..services.sentiment_analyzer import SentimentAnalyzer

bp = Blueprint('sentiment', __name__)
sentiment_analyzer = SentimentAnalyzer()

@bp.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.json
    text = data.get('text')
    
    if not text:
        return jsonify({
            'status': 'error',
            'message': 'No text provided'
        }), 400
    
    try:
        sentiment = sentiment_analyzer.analyze_sentiment(text)
        return jsonify({
            'status': 'success',
            'data': sentiment
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500