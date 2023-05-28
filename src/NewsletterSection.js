import React from 'react';
import '../src/assets/css/style.css';

const NewsletterSection = () => {
  return (
    <section className="newsletter" aria-label="newsletter">
      <div className="container">
        <div className="newsletter-card">
          <h2 className="h2">
            Our <span className="span">Newsletter</span>
          </h2>
          <form action="" className="newsletter-form">
            <div className="input-wrapper skewBg">
              <input
                type="email"
                name="email_address"
                aria-label="email"
                placeholder="Enter your email..."
                required
                className="email-field"
              />
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <button type="submit" className="btn newsletter-btn skewBg">
              <span className="span">Subscribe</span>
              <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
