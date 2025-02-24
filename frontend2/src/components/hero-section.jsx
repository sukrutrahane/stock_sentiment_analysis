
import { ArrowRight, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import myImage from '../assets/images/home.png'; 
import { motion } from "framer-motion";



export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#1B2430] pt-16">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            {/* <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              AI-Powered Stock Market
              <span className="text-[#0096FF]"> Insights</span>
            </h1> */}
            <motion.h1
             className="text-4xl font-bold md:text-6xl leading-tight mb-6 bg-gradient-to-r from-white via-pink-400 to-purple-500 bg-clip-text text-transparent"
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
            >
          AI-Powered Stock Market Insights
</motion.h1>
            
            <p className="text-xl text-gray-300">
              Harness AI-powered insights and stay ahead of market moves before they happen.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-3 bg-[#0096FF] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#a61ad9]/90 transition-colors"
                onClick={() => navigate('/news-feed')}
              >
                Start Analyzing
                <ArrowRight size={20} />
              </button>
              <button 
                className="px-8 py-3 border border-[#0096FF] text-[#0096FF] rounded-lg font-medium flex items-center gap-2 hover:bg-[#0096FF]/10 transition-colors"
                onClick={() => navigate('/chatbot')}
              >
                Ask Our Assistant
                <Bot size={20} />
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <img 
               src={myImage}
               alt="Sentiment Analysis"
               className="w-96 h-auto transform scale-150 rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Full-width Market Insights Section */}
      <div className="mt-25 w-full bg-[#161D26] py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-8">
          <p className="text-2xl font-bold text-[#0096FF] text-center">
            Market Insights Powered by AI
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "⚡ 80% of Market Moves Are Driven by Sentiment!",
                description: "Numbers don’t lie, but emotions move the market. Fear, greed, and speculation impact stock prices more than just financials."
              },
              {
                title: "📰 News Moves Stocks Faster Than Fundamentals!",
                description: "A single tweet, a CEO’s statement, or breaking news can send stocks soaring or crashing in seconds—before any earnings report is released."
              },
              {
                title: "🤖 AI Can Analyze Millions of Sentiments in Seconds!",
                description: "Our AI-driven sentiment analysis scans news, social media, and financial reports in real time, spotting trends before they impact the market."
              },
              {
                title: "📉 Technical Analysis Alone Isn’t Enough!",
                description: "Historical price patterns don’t predict market shocks, but real-time sentiment analysis can detect hidden opportunities and risks."
              },
              {
                title: "⚡ 95% of Retail Traders Lose Money Due to Emotional Trading!",
                description: "Avoid impulsive decisions—use AI-powered sentiment tracking to trade smarter and stay ahead of the market."
              },
              {
                title: "🔍 See Beyond the Numbers!",
                description: "Fundamental ratios don’t reflect market mood, but sentiment analysis uncovers hidden market forces that drive stock movements."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-[#1E2836] border border-[#0096FF] rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Last Insight without a Box */}
          <div className="text-center text-white text-lg mt-8 px-4">
            <p className="font-semibold text-[#0096FF] text-xl">🚀 Get an Unfair Advantage!</p>
            <p className="text-gray-300 mt-2">
              While others rely on outdated methods, leverage AI-powered market insights and trade with confidence.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
