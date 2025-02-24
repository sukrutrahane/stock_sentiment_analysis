import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function NewsFeed() {
  const [ticker, setTicker] = useState(""); 
  const [news, setNews] = useState([]);
  const [sentimentSummary, setSentimentSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState("");
  const [summarizing, setSummarizing] = useState(false);

  const fetchNews = async () => {
    setLoading(true);  // Start loading
    setError("");
    setSummary(""); 

    try {
      const response = await fetch(`http://127.0.0.1:5000/news/${ticker}`);
      const data = await response.json();

      if (data.status === "success") {
        setNews(data.data.articles);
        setSentimentSummary(data.data.sentiment_summary);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);  // End loading
    }
  };

  const handleSummarize = async () => {
    setSummarizing(true);
    try {
      const res = await fetch("http://127.0.0.1:5000/chat/summarizer", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setSummary(data.summary || "No summary available.");
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummary("Error generating summary.");
    } finally {
      setSummarizing(false);
    }
  };

  const sentimentData = sentimentSummary
    ? {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [
          {
            label: 'Bar Plot',
            data: [
              sentimentSummary.positive,
              sentimentSummary.neutral,
              sentimentSummary.negative,
            ],
            backgroundColor: ['#34D399', '#9CA3AF', '#F87171'],
            borderColor: ['#10B981', '#6B7280', '#EF4444'],
            borderWidth: 1,
          },
        ],
      }
    : {};

  return (
    <div className="max-w-6xl mx-auto py-10 text-white min-h-screen  flex flex-col items-center justify-start pt-24 px-6">
      {/* <h2 className="text-3xl font-bold mb-6">Real Time Stock Sentiment Analysis</h2> */}
      <motion.h2
      className="text-4xl font-bold md:text-6xl leading-tight mb-6 bg-gradient-to-r from-white via-pink-400 to-purple-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      >
      Real Time Stock Sentiment Analysis
    </motion.h2>

      <p className="text-center text-lg mb-6 text-gray-400 max-w-3xl">
      Real-Time News Analyzer scans financial news and earnings reports to detect market trends. 
      Enter a stock name and get instant bullish or bearish signals for smarter investing!
      </p>

      {/* Ticker Input */}
      <div className="mb-6 flex gap-4 w-full">
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 w-full sm:w-3/4"
          placeholder="Enter stock symbol (e.g., AAPL)"
        />
        <button
          className="px-6 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 sm:w-1/4"
          onClick={fetchNews}
        >
          Analyze Sentiments
        </button>
      </div>

      {/* Show Loading Animated Image */}
      {loading && (
        <div className="text-center flex justify-center items-center h-screen ">
          <img src="src\assets\images\loading1.gif" alt="Loading..." className="w-24 h-24" />
        </div>
      )}

      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Sentiment Summary & Bar Chart */}
      {sentimentSummary && !loading && (
        <div className="mb-6 w-full flex gap-8">
          {/* Sentiment Analysis Bar Chart */}
          <div className="w-full sm:w-1/3" style={{ height: "300px" }}>
            <h3 className="text-xl font-semibold mb-4 text-center">Sentiment Analysis</h3>
            <Bar
              data={sentimentData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: 'Sentiment Breakdown',
                  },
                },
              }}
            />
          </div>

          {/* News List */}
          <div className="w-full sm:w-2/3 space-y-6">
            {news.length > 0 ? (
              news.map((article, index) => (
                <div key={index} className="p-6 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  <h4 className="text-2xl font-bold mb-3">{article.title}</h4>
                  <p className="text-gray-400 mb-3">{article.summary}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Read more
                  </a>
                  <p className="mt-3 text-sm">
                    Sentiment: <span className="font-bold">{article.sentiment.label}</span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No news available.</p>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
