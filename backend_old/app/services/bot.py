import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
GENAI_API_KEY = os.getenv("GEMINI_API_KEY")

# Configure Gemini API
genai.configure(api_key=GENAI_API_KEY)

# Optimized prompt template for concise, decision-focused responses
PROMPT_TEMPLATE = """
You are a financial research analyst AI assistant specializing in stock market analysis, investment strategies, and market trends.
Your goal is to provide short, actionable, and insightful answers that help users make quick decisions.

### Guidelines:
- Keep responses *brief* and *to the point* (ideally under 5-6 sentences).
- If asked about a *specific stock, provide **trend insights, risks, and opportunities*.
- For *technical indicators* (e.g., RSI, MACD), give *a one-line interpretation*.
- If discussing *market trends*, summarize the key takeaways.
- *Do NOT* give financial advice—stick to factual analysis.
- Give only plain text not bold text.


Now, answer the following user query in a concise manner:

{query}
"""

def get_gemini_response(user_query):
    """
    Fetches a concise, decision-focused response from Google Gemini API.
    """
    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        full_prompt = PROMPT_TEMPLATE.format(query=user_query)
        response = model.generate_content(full_prompt)
        return response.text.strip() if response else "No relevant insights available."
    except Exception as e:
        return f"Error: {e}"

class ChatBot:
    """
    AI Chatbot for financial insights, compatible with Streamlit app.
    """
    def _init_(self):
        pass
    
    def ask(self, query):
        """
        Processes user query and returns a concise response.
        """
        return get_gemini_response(query)

if __name__ == "_main_":
    print("💬 Stock Market AI Chatbot (Type 'exit' to quit)")
    
    while True:
        user_input = input("\nAsk a stock market-related question: ")
        if user_input.lower() == "exit":
            print("Goodbye! 📊📈")
            break
        response = get_gemini_response(user_input)
        print("\n📌 Insight:",response,"\n")