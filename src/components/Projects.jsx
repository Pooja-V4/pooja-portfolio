import React, { useState, useEffect, useCallback, useRef } from 'react';
import ProjectCard from './ProjectCard';
import '../assets/styles/Projects.css';

const projectsData = [
  { id: 1, title: 'Browser Automation', tags: ['python', 'selenium', 'automate'], img: "./img/Browser-auto.png", description: "A collection of Python automation projects using Selenium for messaging apps, games, and web interactions.", liveLink: 'https://github.com/Pooja-V4/browser-automation-selenium', detailsLink: 'https://github.com/Pooja-V4/browser-automation-selenium'},
  { id: 2, title: 'Rhythmix', tags: ['Web App', 'Fullstack', 'Java', 'javascript', 'MusicPlayer'], img: "./img/Rhythmix.png", description: "Rhythmix is a Spotify-inspired full-stack music streaming web application built using Java, Spring Boot, React, and MySQL. It features JWT & OAuth authentication, playlist management, favorites/liked songs, artist sections, and a responsive modern music player", liveLink: 'https://rhythmix-frontend.vercel.app/', detailsLink: 'https://github.com/Pooja-V4/Rhythmix-frontend'},
  { id: 3, title: 'TxtMagic', tags: ['python', 'fonts', 'animation', 'color'], img: "./img/TxtMagic.png", description: "A Python package for adding style, emojis, and colors to your text effortlessly! 🎨✨", liveLink: 'https://pypi.org/project/TxtMagic/', detailsLink: 'https://github.com/Pooja-V4/TxtMagic'},
  { id: 4, title: 'AI based Student Metal Health detector', tags: ['Web app', 'PHP-fullStackDevelopement', 'Mysql'], img: "./img/SMH.png", description: "AI based early detection of the student mental health using their Academic and the behavioral data.", liveLink: 'https://github.com/Pooja-V4/StudentMH-EarlyDetect-AI', detailsLink: 'https://github.com/Pooja-V4/StudentMH-EarlyDetect-AI'},
  { id: 5, title: 'Galactic Shooter', tags: ['frontend', 'UI/UX' ], img: "./img/shooting.png", description: "A fast-paced space shooter game built using HTML, CSS, and JavaScript, featuring shooting, boosting, audio effects, and an immersive galactic background. 🚀", liveLink: 'https://pooja-v4.github.io/my-frontend-projects/Galactic-Shooter/', detailsLink: 'https://github.com/Pooja-V4/my-frontend-projects/tree/main/Galactic-Shooter'},
];

const Projects = () => {
  const totalProjects = projectsData.length;
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isHovering, setIsHovering] = useState(false);
  const autoRotateRef = useRef(null);
  const particlesRef = useRef(null);

  // Carousel Navigation Handlers
  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalProjects);
  }, [totalProjects]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  // Auto Rotation Effect
  useEffect(() => {
    if (!isHovering) {
      autoRotateRef.current = setInterval(nextSlide, 4000);
    } else {
      clearInterval(autoRotateRef.current);
    }
    return () => clearInterval(autoRotateRef.current);
  }, [isHovering, nextSlide]);

  // Keyboard Navigation Effect
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Floating Particles Effect (Re-implementation of the original JS)
  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;
    
    // Clear existing particles on re-render/cleanup
    particlesContainer.innerHTML = ''; 

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${10 + Math.random() * 15}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
  }, []);

  // Function to get position of each card (for circular navigation)
  const getCardPosition = (index) => {
    // Calculate the relative position from current index
    let diff = index - currentIndex;
    
    // Handle circular wrapping
    if (diff > totalProjects / 2) diff = diff - totalProjects;
    if (diff < -totalProjects / 2) diff = diff + totalProjects;
    
    const absDiff = Math.abs(diff);
    
    // Center card
    if (diff === 0) {
      return 'center';
    }
    // Left card (previous)
    else if (diff === -1 || diff === totalProjects - 1) {
      return 'left';
    }
    // Right card (next)
    else if (diff === 1 || diff === -(totalProjects - 1)) {
      return 'right';
    }
    // Far left card (second previous)
    else if (diff === -2 || diff === totalProjects - 2) {
      return 'far-left';
    }
    // Far right card (second next)
    else if (diff === 2 || diff === -(totalProjects - 2)) {
      return 'far-right';
    }
    // Hidden cards
    else {
      return 'hidden';
    }
  };

  // Get style based on position
  const getCardStyle = (position) => {
    switch(position) {
      case 'center':
        return { 
          transform: "translateX(0) scale(1) rotateY(0)", 
          zIndex: 10, 
          opacity: 1,
          display: "block"
        };
      case 'left':
        return { 
          transform: "translateX(-75%) scale(0.85) rotateY(20deg)", 
          zIndex: 5, 
          opacity: 0.8,
          display: "block"
        };
      case 'right':
        return { 
          transform: "translateX(75%) scale(0.85) rotateY(-20deg)", 
          zIndex: 5, 
          opacity: 0.8,
          display: "block"
        };
      case 'far-left':
        return { 
          transform: "translateX(-150%) scale(0.7) rotateY(30deg)", 
          zIndex: 2, 
          opacity: 0.5,
          display: "block"
        };
      case 'far-right':
        return { 
          transform: "translateX(150%) scale(0.7) rotateY(-30deg)", 
          zIndex: 2, 
          opacity: 0.5,
          display: "block"
        };
      default:
        return { 
          transform: "scale(0.5)", 
          opacity: 0, 
          zIndex: 0,
          display: "none"
        };
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-title">
          <span className="exp-v2-eyebrow">
                        <span className="dot" />
                        03 — Projects
                    </span>
          <h2>My Projects</h2>
          <p className="section-subtitle">Creative solutions I've built</p>
        </div>

        <div 
          className="carousel"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="carousel-inner">
            {projectsData.map((project, i) => {
              const position = getCardPosition(i);
              const style = getCardStyle(position);
              return (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  style={{ ...style, transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }} 
                  isActive={position === 'center'}
                />
              );
            })}
          </div>

          <div className="carousel-control prev" onClick={prevSlide}>
            <span>❮</span>
          </div>
          <div className="carousel-control next" onClick={nextSlide}>
            <span>❯</span>
          </div>

          <div className="carousel-indicators">
            {projectsData.map((_, i) => (
              <span 
                key={i} 
                className={i === currentIndex ? 'active' : ''}
                onClick={() => setCurrentIndex(i)}
              ></span>
            ))}
          </div>

          <div className="project-counter">
            Project <span className="current-project">{currentIndex + 1}</span> of <span className="total-projects">{totalProjects}</span>
          </div>

          {/* Auto rotation indicator - shows when auto-rotation is active */}
          <div className="auto-rotation-indicator">
            <div className={`auto-rotation-dot ${!isHovering ? 'active' : ''}`}></div>
            <span>Auto-rotation {!isHovering ? 'ON' : 'PAUSED'}</span>
          </div>
        </div>

        {/* Floating particles container */}
        <div className="particles" ref={particlesRef}></div>
      </div>
    </section>
  );
};

export default Projects;