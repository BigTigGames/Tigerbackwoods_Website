import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import TokenomicsPage from './pages/TokenomicsPage';
import AboutPage from './pages/AboutPage';
import EconomyPage from './pages/EconomyPage';
import RoadmapPage from './pages/RoadmapPage';
import FAQPage from './pages/FAQPage';
import LegalPage from './pages/LegalPage';
import WhitepaperPage from './pages/WhitepaperPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/tokenomics" element={<TokenomicsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/economy" element={<EconomyPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/whitepaper" element={<WhitepaperPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;