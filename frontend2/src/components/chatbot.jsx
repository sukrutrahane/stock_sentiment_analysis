// "use client"

// import { Bot, Send } from "lucide-react"
// import { useState } from "react"

// export default function Chatbot() {
//   const [message, setMessage] = useState("")

//   const quickPrompts = ["Latest Tesla news?", "Summarize Apple's sentiment", "Market overview", "Top gaining stocks"]

//   return (
//     <section className="bg-gradient-to-b from-[#1B2430] to-[#1B2430]/80 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-white">AI Trading Assistant</h2>
//             <p className="text-gray-300">
//               Get instant answers to your trading questions, market analysis, and sentiment insights from our AI-powered
//               assistant.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {quickPrompts.map((prompt, index) => (
//                 <button
//                   key={index}
//                   className="px-4 py-2 bg-[#1B2430] border border-blue-500/20 rounded-lg text-sm text-gray-300 hover:bg-[#0096FF]/10 hover:border-[#0096FF] transition-colors"
//                 >
//                   {prompt}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="bg-[#1B2430]/50 border border-blue-500/20 rounded-xl p-6">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-12 rounded-full bg-[#0096FF]/20 flex items-center justify-center">
//                 <Bot className="w-6 h-6 text-[#0096FF]" />
//               </div>
//               <div>
//                 <h3 className="text-white font-medium">StockSense AI</h3>
//                 <p className="text-sm text-gray-400">Online • Ready to help</p>
//               </div>
//             </div>

//             <div className="h-[300px] mb-4 overflow-y-auto space-y-4">
//               <Message type="bot" content="Hello! I'm your AI trading assistant. How can I help you today?" />
//               <Message type="user" content="What's the market sentiment for Tesla?" />
//               <Message
//                 type="bot"
//                 content="Based on recent news and social media analysis, Tesla (TSLA) is showing predominantly positive sentiment (78%) over the last 24 hours. Key factors include strong Q4 delivery numbers and new factory expansion plans."
//               />
//             </div>

//             <div className="relative">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Ask about market trends, stock analysis, or news..."
//                 className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#0096FF] pr-12"
//               />
//               <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#0096FF] hover:bg-white/5 rounded-lg transition-colors">
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Message({ type, content }) {
//   return (
//     <div className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}>
//       <div
//         className={`max-w-[80%] rounded-lg px-4 py-2 ${
//           type === "user" ? "bg-[#0096FF] text-white" : "bg-white/5 text-gray-300"
//         }`}
//       >
//         {content}
//       </div>
//     </div>
//   )
// }

// import { useState } from "react";

// export default function Chatbot() {
//   const [inputText, setInputText] = useState("");
//   const [sentiment, setSentiment] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const analyzeSentiment = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://127.0.0.1:5000/sentiment/analyze", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: inputText }),
//       });

//       const data = await response.json();
//       if (data.status === "success") {
//         setSentiment(data.data);
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError("Failed to analyze sentiment.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-10 text-white h-screen overflow-y-auto flex flex-col items-center justify-center pt-24 px-6">
//       <h2 className="text-3xl font-bold mb-4">AI Stock Chatbot</h2>

//       <textarea
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         placeholder="Type your stock-related question..."
//         className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white"
//       />

//       <button
//         className="mt-4 px-6 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
//         onClick={analyzeSentiment}
//         disabled={loading}
//       >
//         {loading ? "Analyzing..." : "Analyze Sentiment"}
//       </button>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {sentiment && (
//         <div className="mt-6">
//           <h3 className="text-xl font-semibold">Sentiment Analysis Result:</h3>
//           <p className="text-white">Label: <span className="font-bold">{sentiment.label}</span></p>
//           <p className="text-gray-400">Confidence: {sentiment.confidence.toFixed(2)}</p>
//         </div>
//       )}
//     </div>
//   );
// }

function Message({ type, content }) {
  return (
    <div className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          type === "user" ? "bg-[#0096FF] text-white" : "bg-white/5 text-gray-300"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Chatbot() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!inputText.trim()) return;

    // Store user message
    setMessages([...messages, { type: "user", content: inputText }]);

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/sentiment/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();

      if (data.status === "success") {
        // Update with sentiment analysis result
        setMessages([
          ...messages,
          { type: "user", content: inputText },
          { type: "bot", content: `Sentiment: ${data.data.label}, Confidence: ${data.data.confidence.toFixed(2)}` },
        ]);
      } else {
        setError(data.message || "Failed to get sentiment data.");
      }
    } catch (err) {
      setError("Failed to analyze sentiment.");
    } finally {
      setLoading(false);
    }

    setInputText(""); // Clear input field
  };

  return (
    <div className="max-w-2xl mx-auto py-10 text-white h-screen overflow-y-auto flex flex-col items-center justify-center pt-24 px-6">
      <h2 className="text-3xl font-bold mb-4">AI Stock Chatbot</h2>

      <div className="w-full max-w-md h-96 border p-4 rounded-lg overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <Message key={index} type={msg.type} content={msg.content} />
        ))}
      </div>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your stock-related question..."
        className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white"
      />

      <button
        className="mt-4 px-6 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Send"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

