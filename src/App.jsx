import React, { useEffect } from 'react';
import './App.css'; 

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import ParticlesBackground from './components/ParticlesBackground';
import BackToTop from './components/BackToTop';
import ResumeButton from './components/ResumeButton'; 

const App = () => {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply a generic fade-in animation to any observed element
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Target elements not covered by other component effects
    const elementsToAnimate = document.querySelectorAll('.section-title, .section-subtitle, .contact-option, .info-card');

    elementsToAnimate.forEach(element => {
        // Skip elements that already have a specific animation delay in the JSX
        if (!element.hasAttribute('style') || element.style.animationDelay === '') {
            observer.observe(element);
        }
    });

    return () => elementsToAnimate.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <>
      <ParticlesBackground />
      <Navbar /> 
      
      <main>
        <Hero />
        <ResumeButton />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer component contains the back-to-top button logic and element */}
      <Footer /> 
      <BackToTop />
    </>
  );
};

export default App;