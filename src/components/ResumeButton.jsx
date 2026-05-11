import React, { useState } from 'react';
import '../assets/styles/ResumeButton.css';

const RESUME_LINK = './img/Pooja.pdf';

const ResumeButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <a
      href={RESUME_LINK}
      className={`resume-float ${clicked ? 'clicked' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Resume PDF"
      onClick={handleClick}
    >
      {/* 3D Document object */}
      <div className="doc-wrap">
        <div className="doc-body">
          {/* Page lines */}
          <span className="doc-line" />
          <span className="doc-line short" />
          <span className="doc-line" />
          <span className="doc-line short" />
          <span className="doc-line" />
          {/* Folded corner */}
          <div className="doc-corner" />
        </div>
        {/* Doc shadow / depth layer */}
        <div className="doc-side" />
        <div className="doc-bottom" />
      </div>

      {/* Glow ring */}
      <div className="glow-ring" aria-hidden="true" />

      {/* Tooltip */}
      <span className="resume-tooltip">
        <i className="fas fa-download" style={{ fontSize: '0.7rem' }} />
        Resume
      </span>
    </a>
  );
};

export default ResumeButton;