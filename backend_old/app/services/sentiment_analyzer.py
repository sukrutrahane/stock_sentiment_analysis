# sentiment_analyzer.py
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import numpy as np

class SentimentAnalyzer:
    def __init__(self):
        # Load finBERT model and tokenizer
        self.tokenizer = AutoTokenizer.from_pretrained("ProsusAI/finbert")
        self.model = AutoModelForSequenceClassification.from_pretrained("ProsusAI/finbert")
        self.labels = ["negative", "neutral", "positive"]
    
    def analyze_sentiment(self, text):
        """Analyze the sentiment of a text using finBERT"""
        if not text or len(text) < 10:
            return {"label": "neutral", "score": 1.0}
            
        # Truncate text if too long
        max_length = self.tokenizer.model_max_length
        if len(text) > max_length:
            text = text[:max_length]
            
        inputs = self.tokenizer(text, return_tensors="pt", truncation=True, padding=True)
        
        with torch.no_grad():
            outputs = self.model(**inputs)
            scores = torch.nn.functional.softmax(outputs.logits, dim=1)
            
        sentiment_score = scores[0].numpy()
        label_idx = np.argmax(sentiment_score)
        
        return {
            "label": self.labels[label_idx],
            "score": float(sentiment_score[label_idx]),
            "scores": {label: float(score) for label, score in zip(self.labels, sentiment_score)}
        }

    def analyze_articles(self, articles):
        """Analyze sentiment for a list of articles"""
        for article in articles:
            # Combine title and content for better analysis
            text = f"{article['title']}. {article.get('content', '')}"
            sentiment = self.analyze_sentiment(text)
            article['sentiment'] = sentiment
        
        return articles