from flask import Blueprint, request, jsonify
from app.services.bot import get_gemini_response  # Importing function from bot.py

# Define a Blueprint for chatbot routes
bot_bp = Blueprint("bot", __name__)

@bot_bp.route("/ask-ai", methods=["POST"])
def ask_ai():
    """
    API endpoint to interact with the AI chatbot.
    """
    # Extract user query from JSON request
    user_query = request.json.get("query")

    if not user_query:
        return jsonify({"error": "Query is required"}), 400

    # Fetch AI-generated response
    response = get_gemini_response(user_query)

    return jsonify({"response": response})
