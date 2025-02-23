import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Stock Market Sentiment Analysis</h1>
      <div className="mt-6 flex gap-4">
      <button 
        onClick={() => navigate("/news-feed")} 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
      >
        Start Analyzing
      </button>
      <button
         onClick={() => navigate("/chatbot")}
         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
         Ask AI
      </button>
    </div>
  </div>
  );
};

export default Home;
