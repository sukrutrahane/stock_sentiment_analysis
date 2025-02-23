
"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[#1B2430]/95 backdrop-blur-sm z-50 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-[#0096FF] font-bold text-2xl">Drstikon-AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-[#0096FF] transition-colors">
              Home
            </a>
            <a href="/news-feed" className="text-gray-300 hover:text-[#0096FF] transition-colors">
              Market Sentiment
            </a>
            <a href="/chatbot" className="text-gray-300 hover:text-[#0096FF] transition-colors">
              AI Assistant
            </a>
            <a href="#" className="text-gray-300 hover:text-[#0096FF] transition-colors">
              News & Insights
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1B2430] border-t border-blue-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-[#0096FF]">
              Home
            </a>
            <a href="/news-feed" className="block px-3 py-2 text-gray-300 hover:text-[#0096FF]">
              Market Sentiment
            </a>
            <a href="/chatbot" className="block px-3 py-2 text-gray-300 hover:text-[#0096FF]">
              AI Assistant
            </a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-[#0096FF]">
              News & Insights
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
