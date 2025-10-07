import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/pooja-v-3845772b9"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Pooja-V4"><i className="fab fa-github"></i></a>
          </div>
          <p>&copy; 2025 Pooja. All Rights Reserved.</p>
        </div>
      </footer>

      <div className={`back-to-top ${showBackToTop ? 'active' : ''}`} onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
};

export default Footer;