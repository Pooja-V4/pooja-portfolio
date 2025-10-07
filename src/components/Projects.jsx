import React, { useState, useEffect, useCallback, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  { id: 1, title: 'Browser Automation', tags: ['python', 'selenium', 'automate'], img: "./img/Browser-auto.png", description: "A collection of Python automation projects using Selenium for messaging apps, games, and web interactions.", liveLink: 'https://github.com/Pooja-V4/browser-automation-selenium', detailsLink: 'https://github.com/Pooja-V4/browser-automation-selenium'},
  { id: 2, title: 'PlayNext', tags: ['Web App', 'Frontend', 'MusicPlayer'], img: "./img/playnext.png", description: "PlayNext is a music streaming web application that allows users to explore, stream, and manage their favorite tracks effortlessly.", liveLink: 'https://pooja-v4.github.io/PlayNext/', detailsLink: 'https://github.com/Pooja-V4/PlayNext'},
  { id: 3, title: 'TxtMagic', tags: ['python', 'fonts', 'animation', 'color'], img: "./img/TxtMagic.png", description: "A Python package for adding style, emojis, and colors to your text effortlessly! 🎨✨", liveLink: 'https://pypi.org/project/TxtMagic/', detailsLink: 'https://github.com/Pooja-V4/TxtMagic'},
  { id: 4, title: 'AI based Student Metal Health detector', tags: ['Web app', 'PHP-fullStackDevelopement', 'Mysql'], img: "./img/SMH.png", description: "AI based early detection of the student mental health using their Academic and the behavioral data.", liveLink: 'https://github.com/Pooja-V4/StudentMH-EarlyDetect-AI', detailsLink: 'https://github.com/Pooja-V4/StudentMH-EarlyDetect-AI'},
  { id: 5, title: 'Galactic Shooter', tags: ['frontend', 'UI/UX' ], img: "./img/shooting.png", description: "A fast-paced space shooter game built using HTML, CSS, and JavaScript, featuring shooting, boosting, audio effects, and an immersive galactic background. 🚀", liveLink: 'https://pooja-v4.github.io/my-frontend-projects/Galactic-Shooter/', detailsLink: 'https://github.com/Pooja-V4/my-frontend-projects/tree/main/Galactic-Shooter'},
];

const Projects = () => {
  const totalProjects = projectsData.length;
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
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
    if (isAutoRotating) {
      autoRotateRef.current = setInterval(nextSlide, 4000);
    } else {
      clearInterval(autoRotateRef.current);
    }
    return () => clearInterval(autoRotateRef.current);
  }, [isAutoRotating, nextSlide]);

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
  }, []); // Run only once on mount

  // Function to dynamically calculate CSS transform based on state
  const getCardStyle = (i) => {
    const diff = i - currentIndex;
    const absDiff = Math.abs(diff);

    if (diff === 0) {
      return { transform: "translateX(0) scale(1) rotateY(0)", zIndex: 5, opacity: 1, filter: "brightness(1.2)" };
    } else if (absDiff === 1) {
      const direction = diff > 0 ? 1 : -1;
      return { transform: `translateX(${direction * 75}%) scale(0.85) rotateY(${direction * 20}deg)`, zIndex: 3, opacity: 0.8, filter: "brightness(0.7) blur(1px)" };
    } else if (absDiff === 2) {
      const direction = diff > 0 ? 1 : -1;
      return { transform: `translateX(${direction * 150}%) scale(0.7) rotateY(${direction * 30}deg)`, zIndex: 1, opacity: 0.5, filter: "brightness(0.5) blur(2px)" };
    } else {
      return { transform: "scale(0.5)", opacity: 0, zIndex: 0 };
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-title">
          <h2>My projects</h2>
        </div>


        <div className="carousel">
          <div className="carousel-inner">
            {projectsData.map((project, i) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                // Apply dynamic style, including the transition property
                style={{ ...getCardStyle(i), transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }} 
              />
            ))}
          </div>

          <div className="carousel-control prev" id="carousel-prev" onClick={prevSlide}>
            <span>&#10094;</span>
          </div>
          <div className="carousel-control next" id="carousel-next" onClick={nextSlide}>
            <span>&#10095;</span>
          </div>

          <div className="carousel-indicators">
            {projectsData.map((_, i) => (
              <span 
                key={i} 
                className={`project-indicator ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              ></span>
            ))}
          </div>

          <div className="project-counter">
            Project <span id="current-project">{currentIndex + 1}</span> of <span id="total-projects">{totalProjects}</span>
          </div>

          <div className="auto-rotate-toggle">
            <span>Auto Rotation</span>
            <div 
              className={`toggle-switch ${isAutoRotating ? 'active' : ''}`}
              onClick={() => setIsAutoRotating(prev => !prev)}
              id="auto-rotate-toggle"
            ></div>
          </div>
        </div>

        {/* Floating particles container using ref */}
        <div className="particles" id="particles" ref={particlesRef}></div>
      </div>
    </section>
  );
};

export default Projects;