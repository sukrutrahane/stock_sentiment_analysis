

// import { useState } from "react";
// import { motion } from "framer-motion";

// // MessageBox component for displaying messages
// const MessageBox = ({ message, isAI }) => {
//     return (
//         <div className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}>
//             <div
//             //     className={`p-3 max-w-xl rounded-lg ${
//             //         isAI ? "bg-[#374151]" : "bg-[#3B82F6] text-white"
//             //     }`}
//             // >
//             className={`p-3 max-w-xl rounded-lg bg-[#1B2430] text-white border ${
//                 isAI ? "border-gray-600" : "border-blue-400"
//             }`}
//         >
//                 <p>{message}</p>
//             </div>
//         </div>
//     );
// };

// const ChatbotComponent = () => {
//     const [query, setQuery] = useState("");
//     const [response, setResponse] = useState("");
//     const [loading, setLoading] = useState(false);

//     const handleAskAI = async () => {
//         if (!query.trim()) return; // Prevent empty queries
//         setLoading(true);

//         try {
//             const res = await fetch("http://127.0.0.1:5000/bot/ask-ai", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ query }),
//             });
//             const data = await res.json();

//             // Ensure proper formatting
//             const formattedResponse = data.response
//                 ? data.response.replace(/\*/g, "").trim() // Remove extra asterisks
//                 : "No response available.";
            
//             setResponse(formattedResponse);
//         } catch (error) {
//             console.error("Error fetching AI response:", error);
//             setResponse("Error connecting to AI service.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-[#1B2430] p-6">
//             {/* Smart Investment Assistant Title */}
//             <motion.h1
//                 className="text-4xl font-bold md:text-6xl leading-tight mb-6 bg-gradient-to-r from-white via-pink-400 to-purple-500 bg-clip-text text-transparent"
//                 initial={{ opacity: 0, y: -50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//             >
//                 Smart Investment Assistant
//             </motion.h1>

//             {/* Centered Chatbot GIF */}
//             <div className="text-center mb-8">
//                 <img 
//                     src="src/assets/images/chatbot.gif" 
//                     alt="Chatbot" 
//                     className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-2xl" 
//                 />
//             </div>

//             <p className="text-lg text-gray-300 text-center max-w-2xl mb-6">
//                 Make smarter investments with real-time data and AI-driven analysis.
//                 Get actionable insights from financial news, stock trends, and sentiment to stay ahead in the market.
//             </p>

//             {/* Search Bar and Button Container */}
//             <div className="flex w-full sm:w-4/5 max-w-4xl mb-6 space-x-8">
//                 <input
//                     type="text"
//                     placeholder="Let's chat about Finance . . ."
//                     className="p-2 border border-gray-300 rounded-xl w-full text-white"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                 />
//                 <button
//                     onClick={handleAskAI}
//                     className="p-2 bg-blue-500 text-white hover:bg-blue-600 transition rounded-xl opacity-300"
//                     disabled={loading}
//                 >
//                     {loading ? "Thinking..." : "Explore"}
//                 </button>
//             </div>

//             {/* Display AI Response Only */}
//             <div className="w-full sm:w-4/5 max-w-4xl mb-6">
//                 {response && <MessageBox message={response} isAI={true} />}
//             </div>
//         </div>
//     );
// };

// export default ChatbotComponent;


import { useState } from "react";
import { motion } from "framer-motion";

// MessageBox component for displaying messages
const MessageBox = ({ message, isAI }) => {
    return (
        <div className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}>
            <div
                className={`p-3 max-w-xl rounded-lg ${
                    isAI ? "bg-[#f0f0f0] text-black border-gray-300" : "bg-[#3B82F6] text-white border-blue-400"
                }`}
            >
                <p>{message}</p>
            </div>
        </div>
    );
};

const ChatbotComponent = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAskAI = async () => {
        if (!query.trim()) return; // Prevent empty queries
        setLoading(true);

        try {
            const res = await fetch("http://127.0.0.1:5000/bot/ask-ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query }),
            });
            const data = await res.json();

            // Ensure proper formatting
            const formattedResponse = data.response
                ? data.response.replace(/\*/g, "").trim() // Remove extra asterisks
                : "No response available.";
            
            setResponse(formattedResponse);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setResponse("Error connecting to AI service.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
            {/* Smart Investment Assistant Title */}
            <motion.h1
                className="text-4xl font-bold md:text-6xl leading-tight mt-12 mb-6 text-black"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Smart <span className="text-orange-500">Investment</span> Assistant
            </motion.h1>

            {/* Centered Chatbot GIF */}
            <div className="text-center mb-8">
                <img 
                    src="src/assets/images/chatbot.gif" 
                    alt="Chatbot" 
                    className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-2xl" 
                />
            </div>

            <p className="text-lg text-black text-center max-w-3xl mb-6">
                Make smarter investments with real-time data and AI-driven analysis.
                Get actionable insights from financial news, stock trends, and sentiment to stay ahead in the market.
            </p>

            {/* Search Bar and Button Container */}
            <div className="flex w-full sm:w-4/5 max-w-4xl mb-6 space-x-8">
                <input
                    type="text"
                    placeholder="Let's chat about Finance . . ."
                    className="p-2 border border-gray-300 rounded-xl w-full text-black"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    onClick={handleAskAI}
                    className="p-2 bg-blue-500 text-white hover:bg-blue-600 transition rounded-xl opacity-300"
                    disabled={loading}
                >
                    {loading ? "Thinking..." : "Explore"}
                </button>
            </div>

            {/* Display AI Response Only */}
            <div className="w-full sm:w-4/5 max-w-4xl mb-12">
                {response && <MessageBox message={response} isAI={true} />}
            </div>
        </div>
    );
};

export default ChatbotComponent;

