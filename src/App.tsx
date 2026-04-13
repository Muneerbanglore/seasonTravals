import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Expeditions from './pages/Expeditions';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="tours">
          <Expeditions />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <footer className="footer container">
        <div className="footer-content glass-card">
          <div className="footer-brand">
            <h2 className="premium-font">SEASONS.TRAVEL</h2>
            <p>Dubai's premier luxury travel and elite expedition curator.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#tours">Expeditions</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Emirates Towers, Dubai, UAE</p>
            <p>concierge@seasonstravel.me</p>
            <p>+971 4 000 0000</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Seasons Travel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
