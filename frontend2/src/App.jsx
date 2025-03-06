import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigation-bar';
import HeroSection from './components/hero-section';
import NewsFeed from './components/news-feed';
import Chatbot from "./pages/chatbot";
import Footer from './components/footer';
import Feedback from './pages/feedback';
import NewsInsights from './pages/newsinsights';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen ">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/news-feed" element={<NewsFeed />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/news" element={<NewsInsights />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
