import React from 'react';
import '../src/assets/css/style.css';
import heroBG from '../src/assets/images/hero-bg.jpg';
import heroBanner from '../src/assets/images/hero-banner.png';

function About() {

  const divStyle = {
    backgroundImage: `url(${heroBG})`
  };

  return (
    <section className="section hero" id="home" aria-label="home" style={divStyle}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">World Gaming</p>
          <h1 className="h1 hero-title">
            Create <span className="span">Manage</span> Matches
          </h1>
          <p className="hero-text">
            Find technology or people for digital projects in public sector and Find an individual specialist develope
            researcher.
          </p>
          <button className="btn skewBg">Read More</button>
        </div>
        <figure className="hero-banner img-holder" style={{ '--width': 700, '--height': 700 }}>
          <img src={heroBanner} width="700" height="700" alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>
  )
}

export default About