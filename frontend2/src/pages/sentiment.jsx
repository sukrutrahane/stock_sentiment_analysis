import React, { useState, useEffect } from 'react';
import SentimentChart from '../components/SentimentChart'; // Adjust the import based on your file structure
import axios from 'axios';

const Sentiment = () => {
  const [stock, setStock] = useState('');
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState(null);
  const [sentimentData, setSentimentData] = useState({ labels: [], values: [] });

  const handleInputChange = (event) => {
    setStock(event.target.value);
  };

  const handleAnalyzeClick = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/news/${stock}`);
      const data = response.data;
      setNewsData(data.data.articles);

      const sentimentSummary = data.data.sentiment_summary;
      setSentimentData({
        labels: ['Positive', 'Neutral', 'Negative'],
        values: [sentimentSummary.positive, sentimentSummary.neutral, sentimentSummary.negative],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-center text-blue-600">Stock Market Sentiment Analysis</h1>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            value={stock}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-l-md"
            placeholder="Enter Stock Symbol (e.g., AAPL)"
          />
          <button
            onClick={handleAnalyzeClick}
            className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition duration-200"
          >
            Analyze
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <div className="spinner"></div> {/* Replace with a proper spinner */}
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-500">News Articles</h2>
            {newsData ? (
              <div className="space-y-4">
                {newsData.map((article, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-md shadow-sm hover:bg-gray-100">
                    <h3 className="font-semibold">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.author}</p>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Read more
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p>No news available for the selected stock.</p>
            )}
          </div>

          <div className="mb-6">
            <SentimentChart sentimentData={sentimentData} />
          </div>
        </>
      )}
    </div>
  );
};

export default Sentiment;
