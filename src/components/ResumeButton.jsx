import React from 'react';

const RESUME_LINK = './img/Pooja_Resume.pdf'; 

const ResumeButton = () => {
  const handleClick = (e) => {
    const button = e.currentTarget;
    button.classList.add('click-animation');

    setTimeout(() => {
      button.classList.remove('click-animation');
    }, 1500);
    
    console.log('Resume button clicked');
  };

  return (
    <a 
      href={RESUME_LINK} 
      className="floating-resume-btn" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="View Resume PDF"
      onClick={handleClick}
    >
      <i className="fas fa-file-pdf"></i>
      
      <div className="ripple-ring"></div>
      <div className="ripple-ring"></div>
      <div className="ripple-ring"></div>
      <div className="bg-ripple"></div>
    </a>
  );
};

export default ResumeButton;