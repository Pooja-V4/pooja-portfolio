import React, { useState, useEffect } from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowBackToTop(scrollTop > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    {
      href: 'https://www.linkedin.com/in/pooja-v-3845772b9',
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      href: 'https://github.com/Pooja-V4',
      icon: 'fab fa-github',
      label: 'GitHub',
      color: '#e0e0e0'
    },
    {
      href: 'https://leetcode.com/u/Poojavel/',
      icon: 'fas fa-code',
      label: 'LeetCode',
      color: '#f89f1b'
    },
    {
      href: 'https://www.hackerrank.com/profile/poojavelm',
      icon: 'fab fa-hackerrank',
      label: 'HackerRank',
      color: '#2ec866'
    }
  ];

  return (
    <>
      <footer className="site-footer">
        {/* Top border line */}
        <div className="footer-topline" aria-hidden="true" />

        <div className="footer-inner">

          {/* Brand mark */}
          <div className="footer-brand">
            <span className="brand-initial">P</span>
            <span className="brand-name">Pooja</span>
          </div>

          {/* Social links */}
          <nav className="footer-socials" aria-label="Social links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={s.label}
                style={{ '--hover-color': s.color }}
              >
                <span className="social-bg" aria-hidden="true" />
                <i className={s.icon} />
                <span className="social-label">{s.label}</span>
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="footer-copy">
            <span className="copy-symbol">©</span>
            {currentYear} Pooja — Crafted with ❤️
          </p>

        </div>
      </footer>

      {/* Back to top — scroll ring button */}
      <button
        className={`back-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg className="progress-ring" viewBox="0 0 44 44">
          <circle className="ring-track" cx="22" cy="22" r="18" />
          <circle
            className="ring-fill"
            cx="22" cy="22" r="18"
            style={{
              strokeDashoffset: `${113.1 - (scrollProgress / 100) * 113.1}`
            }}
          />
        </svg>
        <svg className="arrow-icon" viewBox="0 0 16 16" fill="none">
          <path d="M8 12V4M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
};

export default Footer;