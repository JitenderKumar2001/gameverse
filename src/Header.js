import React from 'react';
import '../src/assets/css/style.css';

function Header() {
  return (
    <header className="header">

    <div className="header-top">
      <div className="container">

        <div className="countdown-text">
          Exclusive Black Friday ! Offer <span className="span skewBg">10</span> Days
        </div>

        <div className="social-wrapper">

          <p className="social-title">Follow us on :</p>

          <ul className="social-list">

            <li>
              <a href="www.google.com" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="www.google.com" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="www.google.com" className="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="www.google.com" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>

    <div className="header-bottom skewBg" data-header>
      <div className="container">

        <a href="www.google.com" className="logo">GameVerse</a>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">

            <li className="navbar-item">
              <a href="www.google.comhome" className="navbar-link skewBg" data-nav-link>Home</a>
            </li>

            <li className="navbar-item">
              <a href="www.google.comlive" className="navbar-link skewBg" data-nav-link>Live</a>
            </li>

            <li className="navbar-item">
              <a href="www.google.comfeatures" className="navbar-link skewBg" data-nav-link>Features</a>
            </li>

            <li className="navbar-item">
              <a href="www.google.comshop" className="navbar-link skewBg" data-nav-link>Shop</a>
            </li>

            <li className="navbar-item">
              <a href="www.google.comblog" className="navbar-link skewBg" data-nav-link>Blog</a>
            </li>

            <li className="navbar-item">
              <a href="www.google.com" className="navbar-link skewBg" data-nav-link>Contact</a>
            </li>

          </ul>
        </nav>

        <div className="header-actions">

          <button className="cart-btn" aria-label="cart">
            <ion-icon name="cart"></ion-icon>

            <span className="cart-badge">0</span>
          </button>

          <button className="search-btn" aria-label="open search" data-search-toggler>
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
            <ion-icon name="menu-outline" className="menu"></ion-icon>
            <ion-icon name="close-outline" className="close"></ion-icon>
          </button>

        </div>

      </div>
    </div>

  </header>
  )
}

export default Header