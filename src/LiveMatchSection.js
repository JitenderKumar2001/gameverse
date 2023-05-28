import React from 'react';
import '../src/assets/css/style.css';
import LMB from '../src/assets/images/live-match-banner.jpg';
import LMP1 from '../src/assets/images/live-match-player-1.png';
import LMP2 from '../src/assets/images/live-match-player-2.png';

const LiveMatchSection = () => {
  return (
    <section className="section live-match" id="live" aria-label="live match">
      <div className="container">
        <h2 className="h2 section-title">
          Watch Live <span className="span">Match</span>
        </h2>
        <figure className="live-match-banner img-holder" style={{ '--width': 800, '--height': 470 }}>
          <img src={LMB} width="800" height="470" loading="lazy" alt="Live Match Video" className="img-cover" />
          <button className="play-btn" aria-label="play video">
            <ion-icon name="play"></ion-icon>
          </button>
        </figure>
        <div className="live-match-player">
          <figure className="player player-1 img-holder" style={{ '--width': 406, '--height': 277 }}>
            <img src={LMP1} width="406" height="277" loading="lazy" alt="tokyo eagle" className="w-100" />
          </figure>
          <div className="live-match-detail">
            <p className="live-match-subtitle">Upcoming Live Matches</p>
            <time className="live-match-time" dateTime="08:30">08:30</time>
          </div>
          <figure className="player player-2 img-holder" style={{ '--width': 400, '--height': 305 }}>
            <img src={LMP2} width="400" height="305" loading="lazy" alt="new york hunter7" className="w-100" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default LiveMatchSection;
