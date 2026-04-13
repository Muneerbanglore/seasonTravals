import React from 'react';
import './TourCard.css';

interface TourCardProps {
  title: string;
  image: string;
  tag: string;
  details?: string;
}

const TourCard: React.FC<TourCardProps> = ({ title, image, tag, details }) => {
  return (
    <div className="tour-card glass-card">
      <div className="tour-img">
        <img src={image} alt={title} />
        <span className="tour-tag">{tag}</span>
      </div>
      <div className="tour-info">
        <h3 className="tour-title">{title}</h3>
        {details && <p className="tour-details">{details}</p>}
        <div className="tour-footer">
          <div className="price-tag">
            <span className="label">Inquire for Private Access</span>
          </div>
          <button className="btn-details">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
