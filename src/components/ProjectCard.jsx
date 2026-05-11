import React from 'react';

const ProjectCard = ({ project, style, isActive }) => {
  return (
    <div className={`project-card ${isActive ? 'active' : ''}`} style={style}>
      <div className="project-image">
        <img src={project.img} alt={project.title} />
        <div className="project-overlay">
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="project-actions">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-btn primary"
          >
            Live Demo
          </a>
          <a 
            href={project.detailsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-btn secondary"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;