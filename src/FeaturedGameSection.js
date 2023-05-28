import React from 'react';
import '../src/assets/css/style.css';
import FG1 from '../src/assets/images/featured-game-1.jpg';
import FG2 from '../src/assets/images/featured-game-2.jpg';
import FG3 from '../src/assets/images/featured-game-3.jpg';
import FG4 from '../src/assets/images/featured-game-4.jpg';
import FGI from '../src/assets/images/featured-game-icon.png';

const FeaturedGameSection = () => {
  return (
    <section className="section featured-game" id="features" aria-label="featured game">
      <div className="container">
        <h2 className="h2 section-title">
          All Released <span className="span">Games</span>
        </h2>
        <ul className="has-scrollbar">
          <li className="scrollbar-item">
            <div className="featured-game-card">
              <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                <img src={FG1} width="450" height="600" loading="lazy" alt="Just for Gamers" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3 className="h3">
                  <a href="www.google.com" className="card-title" tabIndex="-1">
                    Just for <span className="span">Gamers</span>
                  </a>
                </h3>
                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="span">Playstation 5, Xbox</span>
                </span>
              </div>
              <div className="card-content-overlay">
                <img src={FGI} width="36" height="61" loading="lazy" alt="" className="card-icon" />
                <h3 className="h3">
                  <a href="www.google.com" className="card-title">
                    Just for <span className="span">Gamers</span>
                  </a>
                </h3>
                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="span">Playstation 5, Xbox</span>
                </span>
              </div>
            </div>
          </li>
          <li className="scrollbar-item">
            <div className="featured-game-card">
              <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                <img src={FG2} width="450" height="600" loading="lazy" alt="Need for Speed" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3 className="h3">
                  <a href="www.google.com" className="card-title" tabIndex="-1">
                    Need for <span className="span">Speed</span>
                  </a>
                </h3>
                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="span">Playstation 5, Xbox</span>
                </span>
              </div>
              <div className="card-content-overlay">
                <img src={FGI} width="36" height="61" loading="lazy" alt="" className="card-icon" />
                <h3 className="h3">
                  <a href="www.google.com" className="card-title">
                    Need for <span className="span">Speed</span>
                  </a>
                </h3>
                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="span">Playstation 5, Xbox</span>
                </span>
              </div>
            </div>
          </li>
          <li className="scrollbar-item">
            <div className="featured-game-card">
              <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                <img src={FG3} width="450" height="600" loading="lazy" alt="Egypt Hunting Gamers" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3 className="h3">
                  <a href="www.google.com" className="card-title" tabIndex="-1">
                    Egypt Hunting <span className="span">Gamers</span>
                  </a>
                </h3>
                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="span">Playstation 5, Xbox</span>
                </span>
              </div>
              <div className="card-content-overlay">
                <img src={FGI} width="36" height="61" loading="lazy" alt="" className="card-icon" />
                <h3 className="h3">
                  <a href="www.google.com" className="card-title">
                    Egypt Hunting <span className="span">Gamers</span>
                  </a>
                </h3>
                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="span">Playstation 5, Xbox</span>
                </span>
              </div>
            </div>
          </li>
          <li className="scrollbar-item">
            <div className="featured-game-card">
              <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                <img src={FG4} width="450" height="600" loading="lazy" alt="Just for Gamers" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3 className="h3">
                  <a href="www.google.com" className="card-title" tabIndex="-1">
                    Just for <span className="span">Gamers</span>
                  </a>
                </h3>
                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="span">Playstation 5, Xbox</span>
                </span>
              </div>
              <div className="card-content-overlay">
                <img src={FGI} width="36" height="61" loading="lazy" alt="" className="card-icon" />
                <h3 className="h3">
                  <a href="www.google.com" className="card-title">
                    Just for <span className="span">Gamers</span>
                  </a>
                </h3>
                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="span">Playstation 5, Xbox</span>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturedGameSection;
