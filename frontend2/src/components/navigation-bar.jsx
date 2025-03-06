// "use client"

// import { Menu, X } from "lucide-react"
// import { useState } from "react"

// export default function NavigationBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <nav className="fixed top-0 w-full backdrop-blur-sm z-50 border-b border-blue-500/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <span className="text-[#0096FF] font-bold text-2xl">Drstikon-AI</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-white-300 hover:text-[#0096FF] transition-colors">
//               Home
//             </a>
//             <a href="/news-feed" className="text-white-300 hover:text-[#0096FF] transition-colors">
//               Market Sentiment
//             </a>
//             <a href="/chatbot" className="text-white-300 hover:text-[#0096FF] transition-colors">
//               AI Assistant
//             </a>
//             <a href="#" className="text-white-300 hover:text-[#0096FF] transition-colors">
//               News & Insights
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white-300 hover:text-white">
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden  border-t border-blue-500/20">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <a href="#" className="block px-3 py-2 text-white-300 hover:text-[#0096FF]">
//               Home
//             </a>
//             <a href="/news-feed" className="block px-3 py-2 text-white-300 hover:text-[#0096FF]">
//               Market Sentiment
//             </a>
//             <a href="/chatbot" className="block px-3 py-2 text-white-300 hover:text-[#0096FF]">
//               AI Assistant
//             </a>
//             <a href="#" className="block px-3 py-2 text-white-300 hover:text-[#0096FF]">
//               News & Insights
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// 2 : 
"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50 border-b border-blue-500/20 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Text aligned to the left */}
          <div className="flex items-center space-x-4 ">
            <img src="/src/assets/images/technology.png" alt="Drstikon AI Logo" className="h-12" />
            <span className="text-black font-bold text-2xl font-serif">Drstikon-AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="/" className="text-black hover:text-[#0096FF] transition-colors font-medium">
              Home
            </a>
            <a href="/news-feed" className="text-black hover:text-[#0096FF] transition-colors font-medium">
              Market Sentiment
            </a>
            <a href="/chatbot" className="text-black hover:text-[#0096FF] transition-colors font-medium">
              AI Assistant
            </a>
            <a href="/news" className="text-black hover:text-[#0096FF] transition-colors font-medium">
              News & Insights
            </a>
            <a href="/feedback" className="block px-3 py-2 text-white-300 hover:text-[#0096FF] font-medium">
              Feedback
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-blue-500/20 bg-white p-4 shadow-lg">
          <div className="space-y-4">
            <a href="#" className="block px-3 py-2 text-white-300 hover:text-[#0096FF] font-medium">
              Home
            </a>
            <a href="/news-feed" className="block px-3 py-2 text-white-300 hover:text-[#0096FF] font-medium">
              Market Sentiment
            </a>
            <a href="/chatbot" className="block px-3 py-2 text-white-300 hover:text-[#0096FF] font-medium">
              AI Assistant
            </a>
            <a href="#" className="block px-3 py-2 text-white-300 hover:text-[#0096FF] font-medium">
              News & Insights
            </a>
            <a href="#" className="block px-3 py-2 text-white-300 hover:text-[#0096FF] font-medium">
              Feedback
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
