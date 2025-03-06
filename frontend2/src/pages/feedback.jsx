// import { useState } from "react";
// import { Mail } from "lucide-react";

// export default function Feedback() {
//   const [message, setMessage] = useState("");

//   const handleSendFeedback = () => {
//     const email = "ankit.dhadiwal.885@gmail.com"; // Your email
//     const subject = "User Feedback";
//     const body = encodeURIComponent(message);

//     window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-4 text-center">Send Your Feedback</h1>
//         <textarea
//           className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Write your feedback here..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <button
//           onClick={handleSendFeedback}
//           className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-blue-600 transition"
//         >
//           <Mail size={18} /> Send Feedback
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Mail } from "lucide-react";

export default function Feedback() {
  const [message, setMessage] = useState("");

  const handleSendFeedback = () => {
    const email = "ankit.dhadiwal.885@gmail.com";
    const subject = "User Feedback";
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-6">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-lg w-full border-2 border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Share Your Feedback
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Your feedback helps us improve! Let us know your thoughts.
        </p>

        <textarea
          className="w-full h-36 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition duration-300"
          placeholder="Write your feedback here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          onClick={handleSendFeedback}
          className="mt-5 w-full bg-purple-500 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-purple-600 transition"
        >
          <Mail size={20} /> Send Feedback
        </button>
      </div>
    </div>
  );
}
