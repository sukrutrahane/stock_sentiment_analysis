import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1B2430] border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Drstikon AI</h3>
            <p className="text-gray-400">AI-powered stock market analysis and sentiment tracking for modern traders.</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#0096FF]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                  Market Sentiment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                  AI Chatbot
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                  News & Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                  API Access
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0096FF]">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Finzaro AI. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#0096FF] text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0096FF] text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

