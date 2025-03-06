// import { motion, AnimatePresence, color } from "framer-motion";
// import { useState, useEffect } from "react";

// export function MarketInsightsSlider() {
//   const insights = [
//     { title: "⚡ 80% of Market Moves Are Driven by Sentiment!", description: "Numbers don’t lie, but emotions move the market. Fear, greed, and speculation impact stock prices more than just financials." },
//     { title: "📰 News Moves Stocks Faster Than Fundamentals!", description: "A single tweet, a CEO’s statement, or breaking news can send stocks soaring or crashing in seconds—before any earnings report is released." },
//     { title: "🤖 AI Can Analyze Millions of Sentiments in Seconds!", description: "Our AI-driven sentiment analysis scans news, social media, and financial reports in real time, spotting trends before they impact the market." },
//     { title: "📉 Technical Analysis Alone Isn’t Enough!", description: "Historical price patterns don’t predict market shocks, but real-time sentiment analysis can detect hidden opportunities and risks." },
//     { title: "⚡ 95% of Retail Traders Lose Money Due to Emotional Trading!", description: "Avoid impulsive decisions—use AI-powered sentiment tracking to trade smarter and stay ahead of the market." },
//     { title: "🔍 See Beyond the Numbers!", description: "Fundamental ratios don’t reflect market mood, but sentiment analysis uncovers hidden market forces that drive stock movements." }
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % insights.length);
//     }, 3000); // Slower transition (7 seconds)

//     return () => clearInterval(interval);
//   }, [index]);

//   return (
//     <div className="h-screen w-full flex justify-center items-center bg-white px-4">
//       <div className="w-full max-w-7xl flex flex-col items-center px-8">
//       <motion.h1
//        className="text-5xl font-bold md:text-5xl leading-tight mb-6"
//        initial={{ opacity: 0, x: -50 }}
//        animate={{ opacity: 1, x: 0 }}
//        transition={{ duration: 1 }}
//       >
//       Market Insights <span className="text-blue-500">Powered</span> by AI
//      </motion.h1>


//         <div className="relative w-full flex justify-center mt-8"> {/* Margin adjustment */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: 100 }} // Slide-in effect
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }} // Slide-out effect
//               transition={{ duration: 1.5 }} // Smooth transition
//               className="p-16 bg-white border border-black rounded-3xl shadow-2xl max-w-9xl text-center"
//             >
//               <p className="text-4xl font-semibold text-black">{insights[index].title}</p>
//               <p className="text-2xl text-gray-700 mt-6">{insights[index].description}</p>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Dots Navigation with smaller size */}
//         <div className="flex justify-center mt-8 space-x-3">
//           {insights.map((_, i) => (
//             <button
//               key={i}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 i === index ? "bg-black w-3 h-3" : "bg-gray-300"
//               }`} // Smaller dots
//               onClick={() => setIndex(i)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function MarketInsightsSlider() {
  const insights = [
    {
      title: "⚡ 80% of Market Moves Are Driven by <span class='text-blue-500'>Sentiment</span>!",
      description: "Numbers don’t lie, but <span class='text-red-500'>emotions</span> move the market. Fear, greed, and speculation impact stock prices more than just <span class='text-green-500'>financials</span>.",
    },
    {
      title: "📰 News Moves Stocks <span class='text-red-500'>Faster</span> Than Fundamentals!",
      description: "A single <span class='text-blue-500'>tweet</span>, a CEO’s statement, or breaking <span class='text-yellow-500'>news</span> can send stocks soaring or crashing in seconds—before any <span class='text-purple-500'>earnings</span> report is released.",
    },
    {
      title: "🤖 AI Can Analyze <span class='text-green-500'>Millions</span> of Sentiments in Seconds!",
      description: "Our <span class='text-blue-500'>AI-driven</span> sentiment analysis scans <span class='text-yellow-500'>news</span>, social media, and financial reports in real time, spotting <span class='text-purple-500'>trends</span> before they impact the market.",
    },
    {
      title: "📉 Technical Analysis Alone Isn’t <span class='text-red-500'>Enough</span>!",
      description: "Historical price patterns don’t predict <span class='text-yellow-500'>market shocks</span>, but real-time <span class='text-blue-500'>sentiment analysis</span> can detect hidden <span class='text-green-500'>opportunities</span> and risks.",
    },
    {
      title: "⚡ 95% of Retail Traders Lose Money Due to <span class='text-red-500'>Emotional Trading</span>!",
      description: "Avoid <span class='text-red-500'>impulsive decisions</span>—use <span class='text-blue-500'>AI-powered</span> sentiment tracking to <span class='text-green-500'>trade smarter</span> and stay ahead of the market.",
    },
    {
      title: "🔍 See Beyond the <span class='text-blue-500'>Numbers</span>!",
      description: "Fundamental <span class='text-green-500'>ratios</span> don’t reflect <span class='text-red-500'>market mood</span>, but sentiment analysis uncovers hidden <span class='text-yellow-500'>market forces</span> that drive stock movements.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % insights.length);
    }, 7000); 

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white px-4">
      <div className="w-full max-w-7xl flex flex-col items-center px-8">
        <motion.h1
          className="text-5xl font-bold md:text-5xl leading-tight mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Market Insights <span className="text-blue-500">Powered</span> by AI
        </motion.h1>

        <div className="relative w-full flex justify-center mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="p-16 bg-white border border-black rounded-3xl shadow-2xl max-w-9xl text-center"
            >
              {/* Title with injected HTML */}
              <p
                className="text-4xl font-semibold text-black"
                dangerouslySetInnerHTML={{ __html: insights[index].title }}
              ></p>

              {/* Description with injected HTML */}
              <p
                className="text-2xl text-gray-700 mt-6"
                dangerouslySetInnerHTML={{ __html: insights[index].description }}
              ></p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {insights.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-black w-3 h-3" : "bg-gray-300"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="text-center mt-16 px-4">
        <p className="font-semibold text-black text-3xl mb-4">🚀 Get an Unfair Advantage!</p>
        <p className="text-black-700 text-xl">
        While others rely on outdated methods, leverage AI-powered market insights and trade with confidence.
        </p>
       </div>
      </div>
    </div>
  );
}
