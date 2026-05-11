import React, { useState, useEffect } from 'react';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
    setActiveSection(targetId.substring(1));
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => scrollToSection(e, '#home')}>
          <span className="logo-text">P</span>
          <span className="logo-full">ooja</span>
          <span className="logo-dot"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, `#${section}`)}
            >
              <span className="nav-link-text">{section}</span>
              <span className="nav-link-indicator"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-container">
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">Menu</span>
              <button className="mobile-close-btn" onClick={toggleMobileMenu}>✕</button>
            </div>
            <div className="mobile-nav-links">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, `#${section}`)}
                >
                  <span className="mobile-nav-index">0{['home', 'about', 'skills', 'projects', 'experience', 'contact'].indexOf(section) + 1}</span>
                  <span className="mobile-nav-name">{section}</span>
                  <span className="mobile-nav-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;