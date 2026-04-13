import React from 'react';
import './Home.css';
import TourCard from '../components/TourCard';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/assets/hero_ultra.png" alt="Dubai Ultra Luxury Skyline" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content">
          <div className="hero-text-card">
            <span className="badge">Elite Travel Curation</span>
            <h1 className="hero-title">Experience <br /><span className="highlight">Dubai Unfiltered</span></h1>
            <p className="hero-desc">
              At Seasons Travel, we define luxury by the moments that stay with 
              you forever. Escape the ordinary with bespoke expeditions 
              designed for the curious and the bold.
            </p>
            <div className="hero-btns">
              <button className="btn-primary">View Collections</button>
              <button className="btn-outline">Consult an Expert</button>
            </div>
          </div>
        </div>

        {/* Feature Highlights (Replaces Booking Bar) */}
        <div className="features-strip-wrapper">
          <div className="container">
            <div className="features-strip glass-card">
              <div className="feature-item">
                <span className="f-icon">✦</span>
                <div className="f-text">
                  <h6>Private Access</h6>
                  <p>Exclusive entry to Dubai's hidden gems.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="f-icon">✦</span>
                <div className="f-text">
                  <h6>Personalized Itineraries</h6>
                  <p>Tailored specifically to your travel style.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="f-icon">✦</span>
                <div className="f-text">
                  <h6>Elite Conceirge</h6>
                  <p>24/7 support for every detail of your trip.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section (New) */}
      <section className="philosophy container reveal">
        <div className="phi-grid">
          <div className="phi-text">
            <span className="badge">Our Philosophy</span>
            <h2 className="section-title">Beyond Just <br />A Destination</h2>
            <p>
              Travel is an art form. We believe that every journey should tell a story. 
              Our team of local experts in Dubai sources the most exclusive experiences, 
              from high-altitude culinary adventures to serene desert sanctuaries.
            </p>
            <div className="phi-stats">
              <div className="stat">
                <h3>150+</h3>
                <p>Private Tours</p>
              </div>
              <div className="stat">
                <h3>10k+</h3>
                <p>Happy Travelers</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Dedicated Support</p>
              </div>
            </div>
          </div>
          <div className="phi-image-box">
             <div className="phi-img glass-card">
                <img src="/assets/tour-1.png" alt="Desert Luxury" />
             </div>
             <div className="phi-img-floating glass-card">
                <img src="/assets/tour-2.png" alt="Marina Luxury" />
             </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="featured-tours" className="tours-teaser container reveal">
        <div className="section-header">
          <h2 className="section-title">Curated <span className="highlight">Expeditions</span></h2>
          <p>Hand-picked luxury tours tailored for the discerning traveler.</p>
        </div>
        
        <div className="tours-grid">
          <TourCard title="Golden Desert Safari" price="$299" image="/assets/tour-1.png" tag="Elite" />
          <TourCard title="Marina Yacht Cruise" price="$450" image="/assets/tour-2.png" tag="Premium" />
          <TourCard title="Hatta Mountain Safari" price="$350" image="/assets/tour-3.png" tag="Adventure" />
        </div>
      </section>
    </div>
  );
};

export default Home;
