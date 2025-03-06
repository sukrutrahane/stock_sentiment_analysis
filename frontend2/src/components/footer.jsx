
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-24">
          {/* Drstikon AI Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black font-serif">Drstikon AI</h3>
            <p className="text-gray-800 text-lg font-sans">AI-powered stock market analysis and sentiment tracking for modern traders.</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-800 hover:text-[#0096FF]">Home</a></li>
              <li><a href="/news-feed" className="text-gray-800 hover:text-[#0096FF]">Market Sentiment</a></li>
              <li><a href="/chatbot" className="text-gray-800 hover:text-[#0096FF]">AI Chatbot</a></li>
              <li><a href="/news" className="text-gray-800 hover:text-[#0096FF]">News & Insights</a></li>
              <li><a href="/feedback" className="text-gray-800 hover:text-[#0096FF]">Feedback</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Owner's - CodeHamster</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-800 hover:text-[#0096FF]">Aniket Lokhande</a></li>
              <li><a href="#" className="text-gray-800 hover:text-[#0096FF]">Ankit Dhadiwal</a></li>
              <li><a href="#" className="text-gray-800 hover:text-[#0096FF]">Sahil Deshkar</a></li>
              <li><a href="#" className="text-gray-800 hover:text-[#0096FF]">Sukrut Rahane</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          {/* <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-800 hover:text-[#0096FF] hover:scale-110 transition-transform duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-800 hover:text-[#0096FF] hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-800 hover:text-[#0096FF] hover:scale-110 transition-transform duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-800 hover:text-[#0096FF] hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div> */}
            <div className="flex space-x-6">
            <a href="https://x.com/whatever_ankit" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#0096FF] hover:scale-110 transition-transform duration-300">
            <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sahil-deshkar-829242240/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#0096FF] hover:scale-110 transition-transform duration-300">
            <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/ankitdhadiwal/Sentiment_Analysis" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#0096FF] hover:scale-110 transition-transform duration-300">
            <Github className="w-6 h-6" />
            </a>
            <a href="mailto:ankit.dhadiwal.885@gmail.com" className="text-gray-800 hover:text-[#0096FF] hover:scale-110 transition-transform duration-300">
            <Mail className="w-6 h-6" />
            </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t-2 border-gray-800 border-dashed">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Drstikon AI. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-[#0096FF] text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-[#0096FF] text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
    </footer>
  )
}
