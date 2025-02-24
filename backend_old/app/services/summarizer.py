# # import os
# # from langchain.embeddings import HuggingFaceEmbeddings
# # from langchain.vectorstores import Chroma
# # from langchain.text_splitter import RecursiveCharacterTextSplitter
# # from langchain_google_genai import ChatGoogleGenerativeAI
# # from langchain.chains import RetrievalQA
# # from langchain.prompts import PromptTemplate
# # from langchain.schema.document import Document
# # from dotenv import load_dotenv

# # load_dotenv()

# # class StockChatbot:
# #     def __init__(self):
# #         # Initialize embedding model
# #         self.embedding_model = HuggingFaceEmbeddings(
# #             model_name="BAAI/bge-small-en-v1.5",
# #             model_kwargs={'device': 'cpu'}
# #         )
        
# #         # Set up database directory with absolute path
# #         self.db_directory = os.path.abspath(os.path.join(os.getcwd(), "chroma_db"))
# #         print(f"Initializing Chroma DB at: {self.db_directory}")
        
# #         # Initialize Vector DB
# #         try:
# #             if os.path.exists(self.db_directory) and os.listdir(self.db_directory):
# #                 print("Loading existing Chroma DB...")
# #                 self.vector_db = Chroma(
# #                     persist_directory=self.db_directory,
# #                     embedding_function=self.embedding_model
# #                 )
# #             else:
# #                 print("No existing Chroma DB found.")
# #                 self.vector_db = None
# #         except Exception as e:
# #             print(f"Error initializing Chroma DB: {e}")
# #             self.vector_db = None
            
# #         # Initialize LLM
# #         self.llm = ChatGoogleGenerativeAI(
# #             model="gemini-1.5-flash",
# #             google_api_key=os.getenv("GOOGLE_API_KEY"),
# #             temperature=0.1
# #         )
        
# #         # Text splitter for document chunking
# #         self.text_splitter = RecursiveCharacterTextSplitter(
# #             chunk_size=1000,
# #             chunk_overlap=100
# #         )
        
# #         # QA Chain template
# #         self.qa_template = """
# #         You are a helpful AI assistant who specializes in financial news analysis.
# #         Use the following pieces of context to answer the question at the end.
# #         If you don't know the answer, just say you don't know, don't try to make up an answer.
# #         Be concise and to-the-point, providing factual information.
        
# #         Context: {context}
        
# #         Question: {question}
        
# #         Answer:
# #         """
        
# #         self.qa_prompt = PromptTemplate(
# #             template=self.qa_template,
# #             input_variables=["context", "question"]
# #         )
        
# #         if self.vector_db:
# #             self.qa_chain = self._create_qa_chain()
            
# #     def _create_qa_chain(self):
# #         """Create retrieval QA chain"""
# #         if not self.vector_db:
# #             return None
            
# #         return RetrievalQA.from_chain_type(
# #             llm=self.llm,
# #             chain_type="stuff",
# #             retriever=self.vector_db.as_retriever(search_kwargs={"k": 5}),
# #             chain_type_kwargs={"prompt": self.qa_prompt}
# #         )
            
# #     def update_knowledge_base(self, articles):
# #         """Update the vector database with new articles"""
# #         try:
# #             documents = []
            
# #             for article in articles:
# #                 text = f"Title: {article['title']}\n"
# #                 text += f"Source: {article['source']['name']}\n"
# #                 text += f"Published: {article['publishedAt']}\n"
# #                 text += f"Sentiment: {article.get('sentiment', {}).get('label', 'N/A')}\n\n"
# #                 text += article.get('content', 'No content available.')
                
# #                 metadata = {
# #                     'title': article['title'],
# #                     'source': article['source']['name'],
# #                     'url': article['url'],
# #                     'published_at': article['publishedAt'],
# #                     'sentiment': article.get('sentiment', {}).get('label', 'neutral')
# #                 }
                
# #                 documents.append(Document(page_content=text, metadata=metadata))
            
# #             # Split documents into chunks
# #             splits = self.text_splitter.split_documents(documents)
            
# #             # Create or update vector store
# #             if not self.vector_db:
# #                 print("Creating new Chroma DB...")
# #                 self.vector_db = Chroma.from_documents(
# #                     documents=splits,
# #                     embedding=self.embedding_model,
# #                     persist_directory=self.db_directory
# #                 )
# #             else:
# #                 print("Updating existing Chroma DB...")
# #                 self.vector_db.add_documents(splits)
            
# #             # Persist changes
# #             self.vector_db.persist()
# #             print("Knowledge base updated successfully")
            
# #             # Recreate QA chain
# #             self.qa_chain = self._create_qa_chain()
# #             return True
            
# #         except Exception as e:
# #             print(f"Error updating knowledge base: {e}")
# #             return False
            
# #     def ask(self, question):
# #         """Ask a question to the chatbot"""
# #         if not self.vector_db or not self.qa_chain:
# #             return "I don't have any stock information loaded yet. Please update the knowledge base first."
        
# #         try:
# #             result = self.qa_chain.invoke({"query": question})
# #             return result['result']
# #         except Exception as e:
# #             return f"I encountered an error while processing your question: {str(e)}"

# # import os
# # from langchain.embeddings import HuggingFaceEmbeddings
# # from langchain.vectorstores import Chroma
# # from langchain.text_splitter import RecursiveCharacterTextSplitter
# # from langchain_google_genai import ChatGoogleGenerativeAI
# # from langchain.chains import RetrievalQA
# # from langchain.prompts import PromptTemplate
# # from langchain.schema.document import Document
# # from dotenv import load_dotenv

# # load_dotenv()

# # class StockSummarizer:
# #     def __init__(self):
# #         # Initialize embedding model
# #         self.embedding_model = HuggingFaceEmbeddings(
# #             model_name="BAAI/bge-small-en-v1.5",
# #             model_kwargs={'device': 'cpu'}
# #         )
        
# #         # Set up database directory with absolute path
# #         self.db_directory = os.path.abspath(os.path.join(os.getcwd(), "chroma_db"))
# #         print(f"Initializing Chroma DB at: {self.db_directory}")
        
# #         # Initialize Vector DB
# #         try:
# #             if os.path.exists(self.db_directory) and os.listdir(self.db_directory):
# #                 print("Loading existing Chroma DB...")
# #                 self.vector_db = Chroma(
# #                     persist_directory=self.db_directory,
# #                     embedding_function=self.embedding_model
# #                 )
# #             else:
# #                 print("No existing Chroma DB found.")
# #                 self.vector_db = None
# #         except Exception as e:
# #             print(f"Error initializing Chroma DB: {e}")
# #             self.vector_db = None
            
# #         # Initialize LLM
# #         self.llm = ChatGoogleGenerativeAI(
# #             model="gemini-1.5-flash",
# #             google_api_key=os.getenv("GOOGLE_API_KEY"),
# #             temperature=0.1
# #         )
        
# #         # Text splitter for document chunking
# #         self.text_splitter = RecursiveCharacterTextSplitter(
# #             chunk_size=1000,
# #             chunk_overlap=100
# #         )
        
# #         # Summarization prompt
# #         self.summarization_template = """
# #         You are a helpful AI assistant who specializes in summarizing financial news articles.
# #         Use the following context to summarize the content in a concise manner.
# #         Be sure to capture the key points, and avoid unnecessary details.

# #         Context: {context}

# #         Summary:
# #         """
        
# #         self.summarization_prompt = PromptTemplate(
# #             template=self.summarization_template,
# #             input_variables=["context"]
# #         )
        
# #         if self.vector_db:
# #             self.summarization_chain = self._create_summarization_chain()
            
# #     def _create_summarization_chain(self):
# #         """Create retrieval summarization chain"""
# #         if not self.vector_db:
# #             return None
            
# #         return RetrievalQA.from_chain_type(
# #             llm=self.llm,
# #             chain_type="stuff",
# #             retriever=self.vector_db.as_retriever(search_kwargs={"k": 5}),
# #             chain_type_kwargs={"prompt": self.summarization_prompt}
# #         )
            
# #     def update_knowledge_base(self, articles):
# #         """Update the vector database with new articles"""
# #         try:
# #             documents = []
            
# #             for article in articles:
# #                 text = f"Title: {article['title']}\n"
# #                 text += f"Source: {article['source']['name']}\n"
# #                 text += f"Published: {article['publishedAt']}\n"
# #                 text += f"Sentiment: {article.get('sentiment', {}).get('label', 'N/A')}\n\n"
# #                 text += article.get('content', 'No content available.')
                
# #                 metadata = {
# #                     'title': article['title'],
# #                     'source': article['source']['name'],
# #                     'url': article['url'],
# #                     'published_at': article['publishedAt'],
# #                     'sentiment': article.get('sentiment', {}).get('label', 'neutral')
# #                 }
                
# #                 documents.append(Document(page_content=text, metadata=metadata))
            
# #             # Split documents into chunks
# #             splits = self.text_splitter.split_documents(documents)
            
# #             # Create or update vector store
# #             if not self.vector_db:
# #                 print("Creating new Chroma DB...")
# #                 self.vector_db = Chroma.from_documents(
# #                     documents=splits,
# #                     embedding=self.embedding_model,
# #                     persist_directory=self.db_directory
# #                 )
# #             else:
# #                 print("Updating existing Chroma DB...")
# #                 self.vector_db.add_documents(splits)
            
# #             # Persist changes
# #             self.vector_db.persist()
# #             print("Knowledge base updated successfully")
            
# #             # Recreate summarization chain
# #             self.summarization_chain = self._create_summarization_chain()
# #             return True
            
# #         except Exception as e:
# #             print(f"Error updating knowledge base: {e}")
# #             return False
            
# #     def summarize(self):
# #         """Summarize the content from the Chroma database"""
# #         if not self.vector_db or not self.summarization_chain:
# #             return "I don't have any articles loaded yet. Please update the knowledge base first."
        
# #         try:
# #             result = self.summarization_chain.invoke({"query": "Summarize the news articles."})
# #             return result['result']
# #         except Exception as e:
# #             return f"I encountered an error while processing the summarization: {str(e)}"


# # import os
# # from langchain.embeddings import HuggingFaceEmbeddings
# # from langchain.vectorstores import Chroma
# # from langchain.text_splitter import RecursiveCharacterTextSplitter
# # from langchain_google_genai import ChatGoogleGenerativeAI
# # from dotenv import load_dotenv

# # load_dotenv()

# # class StockSummarizer:
# #     def __init__(self):
# #         # Initialize embedding model
# #         self.embedding_model = HuggingFaceEmbeddings(
# #             model_name="BAAI/bge-small-en-v1.5",
# #             model_kwargs={'device': 'cpu'}
# #         )
        
# #         # Set up the Chroma DB directory
# #         self.db_directory = os.path.abspath(os.path.join(os.getcwd(), "chroma_db"))
# #         print(f"Initializing Chroma DB at: {self.db_directory}")
        
# #         # Initialize Vector DB
# #         if os.path.exists(self.db_directory) and os.listdir(self.db_directory):
# #             print("Loading existing Chroma DB...")
# #             self.vector_db = Chroma(
# #                 persist_directory=self.db_directory,
# #                 embedding_function=self.embedding_model
# #             )
# #         else:
# #             print("No existing Chroma DB found.")
# #             self.vector_db = None
        
# #         # Initialize LLM (Gemini model for summarization)
# #         self.llm = ChatGoogleGenerativeAI(
# #             model="gemini-1.5-flash", 
# #             google_api_key=os.getenv("GOOGLE_API_KEY"),  # Use your Gemini API key
# #             temperature=0.1
# #         )

# #         # Text Splitter for splitting long documents into chunks
# #         self.text_splitter = RecursiveCharacterTextSplitter(
# #             chunk_size=1000,
# #             chunk_overlap=100
# #         )

# #     def summarize(self):
# #         """Summarize the content from the knowledge base (Chroma DB)"""
# #         if not self.vector_db:
# #             return "No data found in Chroma DB for summarization."
        
# #         try:
# #             # Retrieve the documents (or relevant chunks) from the Chroma DB
# #             docs = self.vector_db.similarity_search(query="stock", k=5)  # Adjust query if needed
            
# #             if not docs:
# #                 return "No relevant data found in Chroma DB."

# #             # Combine the content of the documents to summarize
# #             content = " ".join([doc.page_content for doc in docs])

# #             # Ask Gemini to summarize the combined content
# #             summary = self.llm(content)
            
# #             return summary
# #         except Exception as e:
# #             return f"Error during summarization: {str(e)}"

# # from langchain.embeddings import HuggingFaceEmbeddings
# # from langchain.vectorstores import Chroma
# # from langchain.text_splitter import RecursiveCharacterTextSplitter
# # from langchain_google_genai import ChatGoogleGenerativeAI
# # from langchain.chains import RetrievalQA
# # from langchain.prompts import PromptTemplate
# # from langchain.schema.document import Document
# # import os

# # class StockSummarizer:
# #     def __init__(self):
# #         # Initialize embedding model
# #         self.embedding_model = HuggingFaceEmbeddings(
# #             model_name="BAAI/bge-small-en-v1.5",
# #             model_kwargs={'device': 'cpu'}
# #         )
        
# #         # Set up database directory with absolute path
# #         self.db_directory = os.path.abspath(os.path.join(os.getcwd(), "chroma_db"))
# #         print(f"Initializing Chroma DB at: {self.db_directory}")
        
# #         # Initialize Vector DB
# #         try:
# #             if os.path.exists(self.db_directory) and os.listdir(self.db_directory):
# #                 print("Loading existing Chroma DB...")
# #                 self.vector_db = Chroma(
# #                     persist_directory=self.db_directory,
# #                     embedding_function=self.embedding_model
# #                 )
# #             else:
# #                 print("No existing Chroma DB found.")
# #                 self.vector_db = None
# #         except Exception as e:
# #             print(f"Error initializing Chroma DB: {e}")
# #             self.vector_db = None
            
# #         # Initialize LLM
# #         self.llm = ChatGoogleGenerativeAI(
# #             model="gemini-1.5-flash",
# #             google_api_key=os.getenv("GOOGLE_API_KEY"),
# #             temperature=0.1
# #         )
        
# #         # Text splitter for document chunking
# #         self.text_splitter = RecursiveCharacterTextSplitter(
# #             chunk_size=1000,
# #             chunk_overlap=100
# #         )
        
# #         # QA Chain template
# #         self.qa_template = """
# #         You are a helpful AI assistant who specializes in financial news analysis.
# #         Use the following pieces of context to answer the question at the end.
# #         If you don't know the answer, just say you don't know, don't try to make up an answer.
# #         Be concise and to-the-point, providing factual information.
        
# #         Context: {context}
        
# #         Question: {question}
        
# #         Answer:
# #         """
        
# #         self.qa_prompt = PromptTemplate(
# #             template=self.qa_template,
# #             input_variables=["context", "question"]
# #         )
        
# #         if self.vector_db:
# #             self.qa_chain = self._create_qa_chain()
            
# #     def _create_qa_chain(self):
# #         """Create retrieval QA chain"""
# #         if not self.vector_db:
# #             return None
            
# #         return RetrievalQA.from_chain_type(
# #             llm=self.llm,
# #             chain_type="stuff",
# #             retriever=self.vector_db.as_retriever(search_kwargs={"k": 5}),
# #             chain_type_kwargs={"prompt": self.qa_prompt}
# #         )
            
# #     def update_knowledge_base(self, articles):
# #         """Update the vector database with new articles"""
# #         try:
# #             documents = []
            
# #             for article in articles:
# #                 text = f"Title: {article['title']}\n"
# #                 text += f"Source: {article['source']['name']}\n"
# #                 text += f"Published: {article['publishedAt']}\n"
# #                 text += f"Sentiment: {article.get('sentiment', {}).get('label', 'N/A')}\n\n"
# #                 text += article.get('content', 'No content available.')
                
# #                 metadata = {
# #                     'title': article['title'],
# #                     'source': article['source']['name'],
# #                     'url': article['url'],
# #                     'published_at': article['publishedAt'],
# #                     'sentiment': article.get('sentiment', {}).get('label', 'neutral')
# #                 }
                
# #                 documents.append(Document(page_content=text, metadata=metadata))
            
# #             # Split documents into chunks
# #             splits = self.text_splitter.split_documents(documents)
            
# #             # Create or update vector store
# #             if not self.vector_db:
# #                 print("Creating new Chroma DB...")
# #                 self.vector_db = Chroma.from_documents(
# #                     documents=splits,
# #                     embedding=self.embedding_model,
# #                     persist_directory=self.db_directory
# #                 )
# #             else:
# #                 print("Updating existing Chroma DB...")
# #                 self.vector_db.add_documents(splits)
            
# #             # Persist changes
# #             self.vector_db.persist()
# #             print("Knowledge base updated successfully")
            
# #             # Recreate QA chain
# #             self.qa_chain = self._create_qa_chain()
# #             return True
            
# #         except Exception as e:
# #             print(f"Error updating knowledge base: {e}")
# #             return False
            
# #     def summarize(self):
# #         """Summarize the content from the knowledge base"""
# #         if not self.vector_db or not self.qa_chain:
# #             return "No knowledge base found. Please update it first."
        
# #         try:
# #             result = self.qa_chain.invoke({"query": "Provide a summary of the news articles."})
# #             return result['result']
# #         except Exception as e:
# #             return f"Error summarizing content: {str(e)}"



# import os
# import requests
# from app.services.news_fetcher import NewsFetcher
# from dotenv import load_dotenv

# load_dotenv()

# class StockSummarizer:
#     def __init__(self):
#         self.gemini_api_key = os.getenv("GEMINI_API_KEY")
#         self.base_url = "https://api.gemini.com/v1"  # Assuming Gemini API endpoint
#         self.news_fetcher = NewsFetcher()  # Initialize NewsFetcher

#     def summarize_with_gemini(self, text):
#         """
#         Use Gemini API to summarize the provided text
#         """
#         url = f"{self.base_url}/summarize"
#         headers = {
#             "Authorization": f"Bearer {self.gemini_api_key}",
#             "Content-Type": "application/json"
#         }
#         data = {
#             "text": text,
#             "model": "gemini-1.5-flash"  # Example model name (replace with the correct one)
#         }
#         response = requests.post(url, headers=headers, json=data)
        
#         if response.status_code == 200:
#             return response.json()['summary']
#         else:
#             return f"Error: {response.status_code} - {response.text}"

#     def summarize_stock_news(self, stock_symbol):
#         """
#         Fetch news for a stock and summarize it using Gemini
#         """
#         try:
#             # Fetch news for the stock using the NewsFetcher
#             news_articles = self.news_fetcher.fetch_stock_news(stock_symbol)
            
#             # Combine the content of all articles into one large string
#             all_news_content = "\n\n".join([article['content'] for article in news_articles])
            
#             # Get the summary from Gemini API
#             summary = self.summarize_with_gemini(all_news_content)
            
#             return summary

#         except Exception as e:
#             return f"An error occurred: {str(e)}"
