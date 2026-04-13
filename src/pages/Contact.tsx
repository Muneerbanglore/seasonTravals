import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page container">
      <div className="contact-grid">
        <div className="contact-info-side">
          <span className="badge">Concierge Service</span>
          <h1 className="section-title">Let Us Design <br /> Your <span className="highlight">Story</span></h1>
          <p className="contact-desc">
            Our private office in the heart of Dubai is available for in-person consultations. 
            Experience the Seasons Travel difference with a dedicated travel designer.
          </p>
          
          <div className="contact-details-list">
            <div className="detail-item">
              <span className="icon">🏙️</span>
              <div>
                <h5>Dubai Headquarters</h5>
                <p>Office 1402, Boulevard Plaza Tower 1, Downtown Dubai, UAE</p>
                <p className="sub-text">View from our windows: The Burj Khalifa</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="icon">✨</span>
              <div>
                <h5>Private Concierge</h5>
                <p>concierge@seasonstravel.me</p>
                <p className="sub-text">Average response time: 25 minutes</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="icon">📱</span>
              <div>
                <h5>WhatsApp Expert</h5>
                <p>+971 58 123 4567</p>
                <p className="sub-text">Available 24/7 for our VIP clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-side glass-card">
          <form className="premium-form">
            <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Request a Consultation</h4>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Johnathan Doe" />
            </div>
            <div className="form-group">
              <label>Desired Experience</label>
              <select>
                <option>Desert Expedition</option>
                <option>Yacht Charter</option>
                <option>Hatta Mountain Tour</option>
                <option>VIP City Tour</option>
                <option>Custom Request</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tell us more</label>
              <textarea placeholder="Describe your dream vacation in Dubai..."></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Begin Planning
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
