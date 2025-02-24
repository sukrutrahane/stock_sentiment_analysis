# # app.py
# import streamlit as st
# import pandas as pd
# import matplotlib.pyplot as plt
# import matplotlib
# from datetime import datetime
# import time

# from backend.app.services.news_fetcher import NewsFetcher
# from backend.app.services.sentiment_analyzer import SentimentAnalyzer
# from backend.app.services.chatbot import StockChatbot

# # Set page configuration
# st.set_page_config(
#     page_title="SAP-Stocks: Stock News Sentiment & AI Chatbot",
#     page_icon="📈",
#     layout="wide"
# )

# # Initialize components
# @st.cache_resource
# def load_components():
#     return NewsFetcher(), SentimentAnalyzer(), StockChatbot()

# news_fetcher, sentiment_analyzer, chatbot = load_components()

# # App title and description
# st.title("Stock News Sentiment Analysis & AI Chatbot")
# st.markdown("""
# """)

# # Sidebar for configuration
# st.sidebar.header("Settings")
# ticker = st.sidebar.text_input("Enter Stock Ticker Symbol", "AAPL").upper()
# refresh = st.sidebar.button("Refresh News")

# # Main tabs
# tab1, tab2 = st.tabs(["📰 News & Sentiment", "💬 AI Chatbot"])

# # Session state initialization
# if 'articles' not in st.session_state:
#     st.session_state.articles = []
# if 'last_update' not in st.session_state:
#     st.session_state.last_update = None
# if 'chat_history' not in st.session_state:
#     st.session_state.chat_history = []

# # News & Sentiment Tab
# with tab1:
#     # Fetch and analyze news
#     if refresh or not st.session_state.articles:
#         with st.spinner(f"Fetching latest news for {ticker}..."):
#             st.session_state.articles = news_fetcher.fetch_stock_news(ticker)
#             if st.session_state.articles:
#                 with st.spinner("Analyzing sentiment..."):
#                     st.session_state.articles = sentiment_analyzer.analyze_articles(st.session_state.articles)
#                     chatbot.update_knowledge_base(st.session_state.articles)
#                 st.session_state.last_update = datetime.now()
#             else:
#                 st.error(f"No news found for {ticker}")
    
#     # Display last update time
#     if st.session_state.last_update:
#         st.info(f"Last updated: {st.session_state.last_update.strftime('%Y-%m-%d %H:%M:%S')}")
    
#     # Sentiment summary
#     if st.session_state.articles:
#         col1, col2 = st.columns([2, 1])
        
#         with col1:
#             # Create sentiment summary
#             sentiment_counts = {"positive": 0, "neutral": 0, "negative": 0}
#             for article in st.session_state.articles:
#                 if 'sentiment' in article:
#                     sentiment_counts[article['sentiment']['label']] += 1
            
#             # Display sentiment chart
#             st.subheader("Sentiment Overview")
#             fig, ax = plt.subplots(figsize=(8, 5))
            
#             colors = {'positive': '#4CAF50', 'neutral': '#FFC107', 'negative': '#F44336'}
#             ax.bar(sentiment_counts.keys(), sentiment_counts.values(), color=[colors[s] for s in sentiment_counts.keys()])
            
#             for i, v in enumerate(sentiment_counts.values()):
#                 ax.text(i, v + 0.1, str(v), ha='center')
                
#             ax.set_ylabel('Number of Articles')
#             ax.set_title(f'Sentiment Distribution for {ticker} News')
#             st.pyplot(fig)
        
#         with col2:
#             # Simple summary stats
#             total_articles = len(st.session_state.articles)
#             sentiment_percentages = {k: round(v/total_articles*100, 1) for k, v in sentiment_counts.items()}
            
#             st.subheader("Summary Statistics")
#             st.metric("Total Articles Analyzed", total_articles)
#             st.metric("Positive Sentiment", f"{sentiment_percentages['positive']}%", 
#                      delta=f"{sentiment_percentages['positive'] - 33.3:.1f}%" if sentiment_percentages['positive'] > 33.3 else f"{sentiment_percentages['positive'] - 33.3:.1f}%")
#             st.metric("Negative Sentiment", f"{sentiment_percentages['negative']}%", 
#                      delta=f"{33.3 - sentiment_percentages['negative']:.1f}%" if sentiment_percentages['negative'] < 33.3 else f"{33.3 - sentiment_percentages['negative']:.1f}%")
    
#         # News articles table
#         st.subheader("Latest News Articles")
        
#         # Apply sentiment filter
#         sentiment_filter = st.multiselect("Filter by Sentiment", 
#                                          ["positive", "neutral", "negative"],
#                                          default=["positive", "neutral", "negative"])
        
#         filtered_articles = [a for a in st.session_state.articles if a.get('sentiment', {}).get('label') in sentiment_filter]
        
#         for i, article in enumerate(filtered_articles):
#             sentiment = article.get('sentiment', {}).get('label', 'neutral')
#             sentiment_color = {
#                 'positive': '#DFF0D8', 
#                 'neutral': '#FCF8E3', 
#                 'negative': '#F2DEDE'
#             }.get(sentiment, '#FFFFFF')
            
#             st.markdown(f"""
#             <div style="padding:10px; border-radius:5px; margin-bottom:10px; background-color:{sentiment_color};">
#                 <h4>{article['title']}</h4>
#                 <p><strong>Source:</strong> {article['source']['name']} | <strong>Published:</strong> {article['publishedAt']}</p>
#                 <p><strong>Sentiment:</strong> {sentiment.title()} ({article.get('sentiment', {}).get('score', 0):.2f})</p>
#                 <a href="{article['url']}" target="_blank">Read Full Article</a>
#             </div>
#             """, unsafe_allow_html=True)

# # Chatbot Tab
# with tab2:
#     st.subheader("AI Chatbot - Ask about Stock News")
    
#     # Display chat history
#     for message in st.session_state.chat_history:
#         if message["role"] == "user":
#             st.markdown(f"<div style='background-color:#F0F2F6; padding:10px; border-radius:5px; margin-bottom:10px;'><strong>You:</strong> {message['content']}</div>", unsafe_allow_html=True)
#         else:
#             st.markdown(f"<div style='background-color:#E3F2FD; padding:10px; border-radius:5px; margin-bottom:10px;'><strong>AI Assistant:</strong> {message['content']}</div>", unsafe_allow_html=True)
    
#     # Chat input
#     user_query = st.text_input("Ask a question about the stock news:", placeholder="E.g., What is the latest news on Tesla?")
    
#     if user_query:
#         # Add user message to chat history
#         st.session_state.chat_history.append({"role": "user", "content": user_query})
        
#         # Get chatbot response
#         with st.spinner("Thinking..."):
#             if not st.session_state.articles:
#                 response = f"Please fetch news for a stock ticker first by going to the News tab and clicking Refresh."
#             else:
#                 response = chatbot.ask(user_query)
        
#         # Add assistant response to chat history
#         st.session_state.chat_history.append({"role": "assistant", "content": response})
        
#         # Force a rerun to update the chat display
#         st.experimental_rerun()
    
#     # Example queries
#     st.markdown("### Example queries:")
#     example_queries = [
#         "What is the latest news on " + ticker + "?",
#         "Show me positive news about " + ticker + " stock.",
#         "Summarize today's market sentiment for " + ticker + ".",
#         "What are the key factors affecting " + ticker + " stock price?",
#     ]
    
#     for query in example_queries:
#         if st.button(query):
#             # Simulate clicking the query
#             st.session_state.chat_history.append({"role": "user", "content": query})
            
#             with st.spinner("Thinking..."):
#                 if not st.session_state.articles:
#                     response = f"Please fetch news for a stock ticker first by going to the News tab and clicking Refresh."
#                 else:
#                     response = chatbot.ask(query)
            
#             st.session_state.chat_history.append({"role": "assistant", "content": response})
#             st.experimental_user()
    
# # Footer
# st.markdown("---")
# st.markdown("### 🔹 Tech Stack")
# st.markdown("""
# - **Selenium & NewsAPI**: Web scraping for real-time news
# - **finBERT**: Financial sentiment classification
# - **LangChain & ChromaDB**: AI chatbot & RAG-based retrieval
# - **Gemini-1.5-Flash**: LLM for chatbot responses
# - **Streamlit**: Web-based interface
# """)