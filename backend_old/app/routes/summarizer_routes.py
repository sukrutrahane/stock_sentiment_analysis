
# # from flask import Blueprint, request, jsonify
# # from app.services.chatbot import StockChatbot

# # bp = Blueprint('chat', __name__)
# # chatbot = StockChatbot()

# # @bp.route('/ask', methods=['POST'])
# # def chat():
# #     data = request.json
# #     query = data.get('query')
# #     session_id = data.get('session_id')
    
# #     if not query:
# #         return jsonify({
# #             'status': 'error',
# #             'message': 'No query provided'
# #         }), 400
    
# #     try:
# #         # Check if knowledge base exists
# #         if not chatbot.vector_db:
# #             return jsonify({
# #                 'status': 'error',
# #                 'message': 'Please fetch news for a stock ticker first to initialize the knowledge base.'
# #             }), 400
            
# #         response = chatbot.ask(query)
# #         return jsonify({
# #             'status': 'success',
# #             'response': response
# #         })
# #     except Exception as e:
# #         return jsonify({
# #             'status': 'error',
# #             'message': str(e)
# #         }), 500


# # from flask import Blueprint, request, jsonify
# # from app.services.summarizer import StockSummarizer

# # # Create a Blueprint for the summarizer routes
# # bp = Blueprint('summarizer', __name__)

# # # Initialize the summarizer
# # summarizer = StockSummarizer()

# # @bp.route('/update_knowledge_base', methods=['POST'])
# # def update_knowledge_base():
# #     """Update the knowledge base with new articles"""
# #     try:
# #         articles = request.json.get('articles')
        
# #         if not articles:
# #             return jsonify({"error": "No articles provided"}), 400
        
# #         success = summarizer.update_knowledge_base(articles)
        
# #         if success:
# #             return jsonify({"message": "Knowledge base updated successfully"}), 200
# #         else:
# #             return jsonify({"error": "Failed to update knowledge base"}), 500
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500


# # @bp.route('/summarizer', methods=['GET'])
# # def summarize():
# #     """Summarize the content from the knowledge base"""
# #     try:
# #         summary = summarizer.summarize()
# #         return jsonify({"summary": summary}), 200
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500



# # from flask import Blueprint, jsonify
# # from app.services.summarizer import StockSummarizer

# # bp = Blueprint('summarizer', __name__)

# # # Initialize the summarizer
# # summarizer = StockSummarizer()

# # @bp.route('/summarizer', methods=['GET'])
# # def summarize():
# #     """Summarize the content from the knowledge base"""
# #     try:
# #         summary = summarizer.summarize()
# #         return jsonify({"summary": summary}), 200
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500


# from flask import Blueprint, request, jsonify
# from app.services.summarizer import StockSummarizer

# bp = Blueprint('summarizer', __name__)

# # Initialize the summarizer
# summarizer = StockSummarizer()

# @bp.route('/summarize', methods=['GET'])
# def summarize():
#     """Summarize the stock news"""
#     stock_symbol = request.args.get('stock_symbol')
    
#     if not stock_symbol:
#         return jsonify({"error": "Stock symbol is required"}), 400
    
#     try:
#         # Get the summary of stock news
#         summary = summarizer.summarize_stock_news(stock_symbol)
#         return jsonify({"summary": summary}), 200
    
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


