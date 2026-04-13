import React from 'react';
import './Expeditions.css';
import TourCard from '../components/TourCard';

const Expeditions: React.FC = () => {
  return (
    <div className="expeditions-page container">
      <div className="page-header">
        <span className="badge">Curated Collections</span>
        <h1 className="section-title">World-Class <span className="highlight">Journeys</span></h1>
        <p>From the depths of the Arabian dunes to the heights of modern luxury, explore our exclusive seasonal offerings.</p>
      </div>

      <div className="filter-bar glass-card">
        <button className="filter-btn active">All Collections</button>
        <button className="filter-btn">Desert Escapes</button>
        <button className="filter-btn">Ocean Cruises</button>
        <button className="filter-btn">VIP Experiences</button>
      </div>

      <div className="tours-grid">
        <TourCard 
          title="Golden Desert Safari" 
          price="$299" 
          image="/assets/tour-1.png" 
          tag="Standard Luxury" 
          details="6 Hours • Includes BBQ Dinner & Live Show"
        />
        <TourCard 
          title="Marina Yacht Cruise" 
          price="$450" 
          image="/assets/tour-2.png" 
          tag="Private Elite" 
          details="4 Hours • Private Chef & Sunset View"
        />
        <TourCard 
          title="Hatta Mountain Safari" 
          price="$350" 
          image="/assets/tour-3.png" 
          tag="Adventure" 
          details="Full Day • Kayaking & Heritage Village Visit"
        />
        <TourCard 
          title="Palm Jumeirah Helicopter Tour" 
          price="$550" 
          image="/assets/tour-4.png" 
          tag="Aerial" 
          details="22 Minutes • Panoramic Burj Al Arab View"
        />
        <TourCard 
          title="Platinum Desert Conservation" 
          price="$899" 
          image="/assets/tour-5.png" 
          tag="Sustainable" 
          details="Overnight • Wildlife Drive & Luxury Stargazing"
        />
        <TourCard 
          title="Full Day Dubai Modern Wonders" 
          price="$199" 
          image="/assets/tour-6.png" 
          tag="Sightseeing" 
          details="10 Hours • Museum of Future & Burj Khalifa"
        />
      </div>
    </div>
  );
};

export default Expeditions;
