import React from 'react';

const Hero = () => {
  // Function for button smooth scroll, reusing the logic from Navbar
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, 
        behavior: 'smooth'
      });
    }
  };
    
  return (
    <section id="home" className="hero">
      <div className="hero-grid-overlay"></div>

      <div className="container">
        <div className="hero-content">
          <h3 className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>Hi there, I'm </h3>
          <h1 
            data-text="Pooja" 
            className="animate__animated animate__fadeInUp" 
            style={{ animationDelay: '0.7s' }}
          >
            Pooja
          </h1>

          <div 
            className="hero-tagline-wrapper animate__animated animate__fadeInUp"
            style={{ animationDelay: '1.5s' }}
          >
            Pre-final Year CSE Student | Web Developer | Innovator
          </div>

          <p className="animate__animated animate__fadeInUp" style={{ animationDelay: '1.1s' }}>
            I specialize in frontend development and love creating seamless digital experiences.Open to learning backend and collaborating on startup projects!
          </p>
          <div className="hero-btn animate__animated animate__fadeInUp" style={{ animationDelay: '1.8s' }}>
            <a href="#projects" className="btn btn-primary me-3" onClick={(e) => scrollToSection(e, '#projects')}>View Projects</a>
            <a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, '#contact')}>Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;