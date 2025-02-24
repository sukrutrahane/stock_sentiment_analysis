# news_fetcher.py
import os
import requests
from datetime import datetime, timedelta
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from dotenv import load_dotenv

load_dotenv()

class NewsFetcher:
    def __init__(self):
        self.newsapi_key = os.getenv('NEWSAPI_KEY')
        self.chrome_options = Options()
        self.chrome_options.add_argument('--headless')
        self.chrome_options.add_argument('--no-sandbox')
        self.chrome_options.add_argument('--disable-dev-shm-usage')
    
    def fetch_from_newsapi(self, ticker, days=3):
        """Fetch news from NewsAPI"""
        today = datetime.now()
        from_date = (today - timedelta(days=days)).strftime('%Y-%m-%d')
        
        url = f"https://newsapi.org/v2/everything?q={ticker} stock&from={from_date}&language=en&sortBy=publishedAt&apiKey={self.newsapi_key}"
        response = requests.get(url)
        
        if response.status_code == 200:
            return response.json()['articles']
        else:
            print(f"Error fetching from NewsAPI: {response.status_code}")
            return []

    def scrape_from_finance_sites(self, ticker):
        """Scrape news using Selenium from financial websites"""
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=self.chrome_options)
        articles = []
        
        sites = [
            f"https://finance.yahoo.com/quote/{ticker}/news",
            f"https://www.marketwatch.com/investing/stock/{ticker}"
        ]
        
        for site in sites:
            try:
                driver.get(site)
                driver.implicitly_wait(5)
                
                # Extract article elements (site-specific selectors)
                if "yahoo" in site:
                    article_elements = driver.find_elements(By.CSS_SELECTOR, "li.js-stream-content")
                    for elem in article_elements[:10]:  # Limit to 10 articles
                        try:
                            title_elem = elem.find_element(By.CSS_SELECTOR, "h3")
                            link_elem = elem.find_element(By.CSS_SELECTOR, "a")
                            date_elem = elem.find_element(By.CSS_SELECTOR, "span.C($tertiaryColor)")
                            
                            articles.append({
                                'title': title_elem.text,
                                'url': link_elem.get_attribute('href'),
                                'publishedAt': date_elem.text,
                                'source': {'name': 'Yahoo Finance'},
                                'content': self.extract_article_content(link_elem.get_attribute('href'))
                            })
                        except Exception as e:
                            print(f"Error extracting Yahoo article: {e}")
                
                elif "marketwatch" in site:
                    article_elements = driver.find_elements(By.CSS_SELECTOR, ".article__content")
                    for elem in article_elements[:10]:
                        try:
                            title_elem = elem.find_element(By.CSS_SELECTOR, "h3.article__headline")
                            link_elem = title_elem.find_element(By.TAG_NAME, "a")
                            
                            articles.append({
                                'title': title_elem.text,
                                'url': link_elem.get_attribute('href'),
                                'publishedAt': datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ"),
                                'source': {'name': 'MarketWatch'},
                                'content': self.extract_article_content(link_elem.get_attribute('href'))
                            })
                        except Exception as e:
                            print(f"Error extracting MarketWatch article: {e}")
            
            except Exception as e:
                print(f"Error scraping {site}: {e}")
        
        driver.quit()
        return articles
    
    def extract_article_content(self, url):
        """Extract article content from a URL"""
        try:
            driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=self.chrome_options)
            driver.get(url)
            driver.implicitly_wait(3)
            
            # Simple extraction logic - get paragraph text
            paragraphs = driver.find_elements(By.TAG_NAME, "p")
            content = " ".join([p.text for p in paragraphs if len(p.text) > 50])
            
            driver.quit()
            return content
        except Exception as e:
            print(f"Error extracting article content: {e}")
            return ""
    
    def fetch_stock_news(self, ticker):
        """Fetch news from both sources and combine results"""
        api_articles = self.fetch_from_newsapi(ticker)
        scraped_articles = self.scrape_from_finance_sites(ticker)
        
        # Combine and remove duplicates (basic deduplication)
        all_articles = api_articles + scraped_articles
        unique_articles = []
        titles = set()
        
        for article in all_articles:
            if article['title'] not in titles and len(article.get('content', '')) > 100:
                titles.add(article['title'])
                unique_articles.append(article)
        
        return unique_articles