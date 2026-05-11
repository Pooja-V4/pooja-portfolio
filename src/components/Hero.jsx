import React, { useEffect, useState } from 'react';
import '../assets/styles/Hero.css';

const ROLES = [
  'Web Developer',
  'CSE Student',
  'Frontend Engineer',
  'Innovator',
  'Problem Solver',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect for the role
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 50 : 110;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === '') {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-v2">
      {/* Animated background blobs */}
      <div className="hero-v2-bg">
          {/*<span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />*/}
        <div className="hero-v2-grid" />
      </div>

      <div className="container">
        <div className="row align-items-center hero-v2-row">
          {/* LEFT SIDE */}
          <div className="col-lg-7 hero-v2-content">
            <div className="hero-v2-badge">
              <span className="dot" />
              Available for internships & collabs
            </div>

            <h3 className="hero-v2-greet">
              <span className="wave">👋</span> Hi, I'm
            </h3>

            <h1 className="hero-v2-name" data-text="Pooja">
              Pooja<span className="dot-accent">.</span>
            </h1>

            <div className="hero-v2-role">
              <span className="role-prefix">{'<'} </span>
              <span className="role-text">{displayed}</span>
              <span className="role-cursor">|</span>
              <span className="role-prefix"> {'/>'}</span>
            </div>

            <p className="hero-v2-desc">
              Pre-final year CSE student who loves crafting{' '}
              seamless frontend experiences. Currently
              exploring backend & open to building startup ideas with you.
            </p>

            <div className="hero-v2-stats">
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">3+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">∞</span>
                <span className="stat-label">Curiosity</span>
              </div>
            </div>

            <div className="hero-v2-btns">
              <a
                href="#projects"
                className="btn-v2 btn-v2-primary"
                onClick={(e) => scrollToSection(e, '#projects')}
              >
                <span>View Projects</span>
                <i className="arrow">→</i>
              </a>
              <a
                href="#contact"
                className="btn-v2 btn-v2-ghost"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-5 hero-v2-image-wrap">
            <div className="hero-v2-image-frame">
              <div className="ring ring-1" />
              <div className="ring ring-2" />
              {/*<div className="orbit-dot dot-a" />
              <div className="orbit-dot dot-b" />
              <div className="orbit-dot dot-c" />*/}

              
              <img
                src="./img/Profile.png"
                alt="Pooja"
                className="hero-v2-img"
              />

              {/* Floating tech chips */}
              <div className="chip chip-react">⚛️ React</div>
              <div className="chip chip-js">Java</div>
              <div className="chip chip-css">Python</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-v2-scroll" onClick={(e) => scrollToSection(e, '#about')}>
        <span className="mouse"><span className="wheel" /></span>
        <span className="scroll-label">Scroll</span>
      </a>
    </section>
  );
};

export default Hero;