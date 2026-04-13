import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <span className="premium-font">SEASONS</span>
          <span className="logo-dot">.</span>
          <span className="logo-sub">TRAVEL</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#tours">Expeditions</a></li>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn-secondary">Client Portal</button>
          <button className="btn-book">Plan Expedition</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
