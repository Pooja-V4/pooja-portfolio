import React, { useEffect, useRef } from 'react';

// SVG Icons for Kotlin and Jetpack Compose
const KotlinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H23L12 12L1 23V1Z" fill="url(#kotlinGradient)"/>
    <defs>
      <linearGradient id="kotlinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7F52FF"/>
        <stop offset="100%" stopColor="#FF6B6B"/>
      </linearGradient>
    </defs>
  </svg>
);

const ComposeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H21V21H3V3Z" fill="#4285F4"/>
    <path d="M8 12L12 8L16 12L12 16L8 12Z" fill="white"/>
    <path d="M12 8L16 12L20 8H12Z" fill="white" fillOpacity="0.6"/>
  </svg>
);

const skillsData = [
  { name: 'HTML5', iconClass: 'fab fa-html5 html-icon' },
  { name: 'CSS3', iconClass: 'fab fa-css3-alt css-icon' },
  { name: 'JavaScript', iconClass: 'fab fa-js js-icon' },
  { name: 'Python', iconClass: 'fab fa-python python-icon' },
  { name: 'Java', iconClass: 'fab fa-java java-icon' },
  { name: 'C', iconClass: 'fa-solid fa-c c-icon' },
  { name: 'PHP', iconClass: 'fab fa-php php-icon' },
  { name: 'MySQL', iconClass: 'fa-solid fa-database mysql-icon' },
  { name: 'Bootstrap', iconClass: 'fab fa-bootstrap bootstrap-icon' },
  { name: 'Git', iconClass: 'fab fa-git-alt git-icon' },
  { name: 'React', iconClass: 'fab fa-react react-icon' },
  { name: 'Kotlin', customIcon: <KotlinIcon /> },
  { name: 'Jetpack Compose', customIcon: <ComposeIcon /> },
];

const Skills = () => {
  const containerRef = useRef(null);

  const positionSkillsInCircle = () => {
    const skillsContainer = containerRef.current;
    if (!skillsContainer) return;

    const skills = skillsContainer.querySelectorAll('.skill-item');
    const radius = skillsContainer.offsetWidth > 400 ? 240 : 180;
    const centerX = skillsContainer.offsetWidth / 2;
    const centerY = skillsContainer.offsetHeight / 2;
    const totalSkills = skills.length;

    skills.forEach((skill, index) => {
      const angle = (360 / totalSkills) * index;
      const x = centerX + radius * Math.cos(angle * Math.PI / 180) - (skill.offsetWidth / 2);
      const y = centerY + radius * Math.sin(angle * Math.PI / 180) - (skill.offsetHeight / 2);

      skill.style.top = `${y}px`;
      skill.style.left = `${x}px`;
    });
  };

  useEffect(() => {
    positionSkillsInCircle();
    window.addEventListener('resize', positionSkillsInCircle);
    return () => window.removeEventListener('resize', positionSkillsInCircle);
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>

        <div className="skills-container">
          <div className="skills-orbit-container" ref={containerRef}>
            <div className="skills-orbit">
              {skillsData.map((skill, index) => (
                <div className="skill-item" key={index}>
                  {skill.customIcon ? (
                    <div className="skill-icon custom-icon">
                      {skill.customIcon}
                    </div>
                  ) : (
                    <i className={`${skill.iconClass} skill-icon`}></i>
                  )}
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>

            <div className="central-skill">
              <i className="fas fa-code"></i>
              <span>Skills</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;