import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    // Check if particlesJS is available (loaded via script tag)
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#6e44ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#6e44ff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          }
        },
        retina_detect: true
      });
    }

    // Cleanup function (important for unmounting)
    return () => {
      // Logic to destroy particles instance if needed (particles.js usually cleans itself)
    };
  }, []); // Empty dependency array means this runs once on mount

  return <div id="particles-js"></div>;
};

export default ParticlesBackground;