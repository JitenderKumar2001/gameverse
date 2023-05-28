import React from 'react';
import '../src/assets/css/style.css';
import BP1 from '../src/assets/images/blog-1.jpg';
import BP2 from '../src/assets/images/blog-2.jpg';
import BP3 from '../src/assets/images/blog-3.jpg';

const BlogSection = () => {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <h2 className="h2 section-title">
          Latest News &amp; <span className="span">Articles</span>
        </h2>
        <p className="section-text">
          Compete With 100 Players On A Remote Island For Winner Takes Showdown Known Issue Where Certain Skin Strategic
        </p>
        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 400, '--height': 290 }}>
                <img src={BP1} width="400" height="290" loading="lazy" alt="Shooter Action Video" className="img-cover" />
              </figure>
              <div className="card-content">
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="person-outline"></ion-icon>
                    <a href="www.google.com" className="item-text">Admin</a>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon name="calendar-outline"></ion-icon>
                    <time datetime="2022-09-19" className="item-text">September 19, 2022</time>
                  </li>
                </ul>
                <h3>
                  <a href="www.google.com" className="card-title">Shooter Action Video</a>
                </h3>
                <p className="card-text">
                  Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                </p>
                <a href="www.google.com" className="card-link">
                  <span className="span">Read More</span>
                  <ion-icon name="caret-forward"></ion-icon>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 400, '--height': 290 }}>
                <img src={BP2} width="400" height="290" loading="lazy" alt="The Walking Dead" className="img-cover" />
              </figure>
              <div className="card-content">
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="person-outline"></ion-icon>
                    <a href="www.google.com" className="item-text">Admin</a>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon name="calendar-outline"></ion-icon>
                    <time datetime="2022-09-19" className="item-text">September 19, 2022</time>
                  </li>
                </ul>
                <h3>
                  <a href="www.google.com" className="card-title">The Walking Dead</a>
                </h3>
                <p className="card-text">
                  Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                </p>
                <a href="www.google.com" className="card-link">
                  <span className="span">Read More</span>
                  <ion-icon name="caret-forward"></ion-icon>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 400, '--height': 290 }}>
                <img src={BP3} width="400" height="290" loading="lazy" alt="Defense Of The Ancients" className="img-cover" />
              </figure>
              <div className="card-content">
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="person-outline"></ion-icon>
                    <a href="www.google.com" className="item-text">Admin</a>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon name="calendar-outline"></ion-icon>
                    <time datetime="2022-09-19" className="item-text">September 19, 2022</time>
                  </li>
                </ul>
                <h3>
                  <a href="www.google.com" className="card-title">Defense Of The Ancients</a>
                </h3>
                <p className="card-text">
                  Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                </p>
                <a href="www.google.com" className="card-link">
                  <span className="span">Read More</span>
                  <ion-icon name="caret-forward"></ion-icon>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
