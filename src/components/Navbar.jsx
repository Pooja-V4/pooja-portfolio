import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Custom scroll handler for React
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
        behavior: 'smooth'
      });
    }
  };


  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#">Pooja</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;