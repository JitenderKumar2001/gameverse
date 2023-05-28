import '../src/assets/css/style.css';
import About from './About';
import Header from "./Header";
import Brand from './Brand';
import LatestGameSection from './LatestGameSection';
import LiveMatchSection from './LiveMatchSection';
import FeaturedGameSection from './FeaturedGameSection';
import ShopSection from './ShopSection';
import BlogSection from './BlogSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

function App() {
  return (
    <div id="top">
      <Header />
      <div className='main'>
        <div className="article">
          <About />
          <Brand />
          <div className='section-wrapper'>
            <LatestGameSection />
            <LiveMatchSection />
          </div>
          <FeaturedGameSection />
          <ShopSection />
          <BlogSection />
          <NewsletterSection />
        </div>
      </div>
      <Footer />
      <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
        <ion-icon name="caret-up"></ion-icon>
      </a>
    </div>
  );
}

export default App;
