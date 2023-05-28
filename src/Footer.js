import React from 'react';
import '../src/assets/css/style.css';
import FBI from '../src/assets/images/footer-bottom-img.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="www.google.com" className="logo">Gamics</a>
            <p className="footer-text">
              Gamics marketplace the release etras that's sheets containing passage.
            </p>
            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="location"></ion-icon>
                </div>
                <address className="item-text">
                  Address: LPU, Jalandhar
                </address>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="headset"></ion-icon>
                </div>
                <a href="tel:+241245654235" className="item-text">Phone: 9509902769</a>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="mail-open"></ion-icon>
                </div>
                <a href="mailto:info@exemple.com" className="item-text">Email: jk204164@gmail.com</a>
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Products</p>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Graphics (26)</a>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Backgrounds (11)</a>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Fonts (9)</a>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Music (3)</a>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Photography (3)</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Need Help?</p>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Terms & Conditions</a>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Privacy Policy</a>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Refund Policy</a>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Affiliate</a>
            </li>
            <li>
              <a href="www.google.com" className="footer-link">Use Cases</a>
            </li>
          </ul>
          <div className="footer-wrapper">
            <div className="social-wrapper">
              <p className="footer-list-title">Follow Us</p>
              <ul className="social-list">
                <li>
                  <a href="www.google.com" className="social-link" style={{ backgroundColor: 'www.google.com3b5998' }}>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="www.google.com" className="social-link" style={{ backgroundColor: 'www.google.com55acee' }}>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="www.google.com" className="social-link" style={{ backgroundColor: 'www.google.comd71e18' }}>
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="www.google.com" className="social-link" style={{ backgroundColor: 'www.google.com1565c0' }}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <p className="footer-list-title">Newsletter Sign Up</p>
              <form action="" className="footer-newsletter">
                <input type="email" name="email_address" aria-label="email" placeholder="Enter your email" required className="email-field" />
                <button type="submit" className="footer-btn" aria-label="submit">
                  <ion-icon name="rocket"></ion-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2023 GameVerse. All Right Reserved by <a href="www.google.com" className="copyright-link">Jitender</a>
          </p>
          <img src={FBI} width="340" height="21" loading="lazy" alt="" className="footer-bottom-img" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
