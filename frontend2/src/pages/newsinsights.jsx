// import { Link } from "react-router-dom";
// import { Coffee, Hammer, Smile } from "lucide-react";
// import underConstruction from "../assets/images/under-construction.gif"; // Replace with an actual funny image

// export default function NewsInsights() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
//       <div className="bg-white p-10 rounded-lg shadow-xl max-w-2xl w-full border-t-4 border-purple-500">
//         <h1 className="text-4xl font-bold mb-4 text-purple-600 flex items-center justify-center gap-2">
//           <Hammer size={30} /> Breaking News: Under Construction!
//         </h1>
//         <p className="text-gray-600 text-lg mb-6">
//           Our developers are currently on a **well-deserved productivity retreat** 🏖️.  
//           Translation? They're chilling, sipping coffee ☕, and playing video games 🎮.  
//         </p>

//         {/* Funny Image */}
//         <img
//           src={underConstruction}
//           alt="Under Construction"
//           className="w-64 mx-auto mb-6"
//         />

//         <p className="text-gray-500 italic mb-6">
//           *Don't worry, we'll be back soon... maybe after one more coffee break!* 😴
//         </p>

//         {/* CTA Button */}
//         <Link
//           to="/"
//           className="px-6 py-3 bg-purple-500 text-white rounded-lg flex items-center gap-2 justify-center hover:bg-purple-600 transition"
//         >
//           <Smile size={20} /> Wake Up the Devs
//         </Link>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import underConstructionImage from "../assets/images/under-construction.gif"; // Add an appropriate image

export default function NewsInsights() {
  const [shake, setShake] = useState(false);

  const handleWakeUp = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="text-center max-w-2xl p-8 bg-white rounded-xl shadow-xl border-4 border-purple-500"
        animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Under Construction 🚧</h1>
        <p className="text-lg text-gray-600 mb-6">
          Our team is working hard... or hardly working? 
        </p>
        <img
          src={underConstructionImage}
          alt="Under Construction"
          className="w-64 mx-auto mb-6 rounded-lg"
        />
        <button
          onClick={handleWakeUp}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium shadow-lg hover:bg-purple-600 transition-transform"
        >
          Wake Them Up! 
        </button>
      </motion.div>
    </div>
  );
}