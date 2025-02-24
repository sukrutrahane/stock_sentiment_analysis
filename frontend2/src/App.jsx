import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigation-bar';
import HeroSection from './components/hero-section';
import NewsFeed from './components/news-feed';
import Chatbot from "./pages/chatbot";
import Footer from './components/footer';
import Bot from './components/ChatbotComponent';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1B2430]">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/news-feed" element={<NewsFeed />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
