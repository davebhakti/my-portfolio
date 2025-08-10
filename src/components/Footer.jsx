import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'visible' : ''}`}>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Bhakti Dave. All rights reserved.</p>
        <div className="footer-links">
          Made with ♥ using React, JavaScript, Tailwind CSS, and Vite.
        </div>
      </div>
    </footer>
  );
};

export default Footer;