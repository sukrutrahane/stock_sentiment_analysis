# # backend/app/routes/news_routes.py
# from flask import Blueprint, jsonify, request
# from ..services.news_fetcher import NewsFetcher
# from ..services.sentiment_analyzer import SentimentAnalyzer

# bp = Blueprint('news', __name__)
# news_fetcher = NewsFetcher()
# sentiment_analyzer = SentimentAnalyzer()

# @bp.route('/<ticker>', methods=['GET'])
# def get_stock_news(ticker):
#     try:
#         articles = news_fetcher.fetch_stock_news(ticker)
#         if articles:
#             articles = sentiment_analyzer.analyze_articles(articles)
#             return jsonify({
#                 'status': 'success',
#                 'data': articles
#             })
#         return jsonify({
#             'status': 'error',
#             'message': f'No news found for {ticker}'
#         }), 404
#     except Exception as e:
#         return jsonify({
#             'status': 'error',
#             'message': str(e)
#         }), 500

from flask import Blueprint, jsonify, request
from app.services.news_fetcher import NewsFetcher
from app.services.sentiment_analyzer import SentimentAnalyzer
#from app.services.summarizer import StockSummarizer

bp = Blueprint('news', __name__)
news_fetcher = NewsFetcher()
sentiment_analyzer = SentimentAnalyzer()
#chatbot = StockSummarizer()

@bp.route('/<ticker>', methods=['GET'])
def get_stock_news(ticker):
    try:
        # Fetch and analyze news
        articles = news_fetcher.fetch_stock_news(ticker)
        if articles:
            # Analyze sentiment
            articles = sentiment_analyzer.analyze_articles(articles)
            
            # Update chatbot's knowledge base with the new articles
            #chatbot.update_knowledge_base(articles)
            
            # Calculate sentiment summary
            sentiment_counts = {"positive": 0, "neutral": 0, "negative": 0}
            for article in articles:
                if 'sentiment' in article:
                    sentiment_counts[article['sentiment']['label']] += 1
            
            return jsonify({
                'status': 'success',
                'data': {
                    'articles': articles,
                    'sentiment_summary': sentiment_counts
                }
            })
        return jsonify({
            'status': 'error',
            'message': f'No news found for {ticker}'
        }), 404
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500