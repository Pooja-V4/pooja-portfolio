import React, { useEffect } from 'react';
import '../assets/styles/About.css';

const About = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.about-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <span className="exp-v2-eyebrow">
                        <span className="dot" />
                        01 — About Me
                    </span>
                    <h2 className="about-title">
                        Crafting Digital Excellence
                        <span className="title-glow"></span>
                    </h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-grid">
                    {/* Left Column - Bio */}
                    <div className="about-card bio-card">
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                        </div>
                        <h3>Digital Creator & Developer</h3>
                        <div className="bio-content">
                            <p>
                                Hello! I'm <strong>Pooja</strong>, a pre-final year <strong>Computer Science student</strong> 
                                who loves coding, problem-solving, and building creative projects. I'm passionate about crafting 
                                engaging digital experiences and currently focus on <strong>Front-End Development</strong>
                                using HTML, CSS, JavaScript, Bootstrap and React.
                            </p>
                            <p>
                                I'm learning backend technologies and databases to become a complete full-stack developer. 
                                I'm always ready to learn and explore new topics. I'm also available for freelance and 
                                startup collaborations—let's connect if you need a modern, responsive, and user-friendly website!
                            </p>
                        </div>
                        <div className="availability-tag">
                            <span className="status-dot"></span>
                            Available for collaboration
                        </div>
                    </div>

                    {/* Right Column - Education Timeline */}
                    <div className="about-card education-card">
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                <path d="M2 17l10 5 10-5"/>
                                <path d="M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <h3>Education Journey</h3>
                        
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-line"></div>
                                <div className="timeline-content">
                                    <div className="timeline-date">
                                        <span className="year">2023 - 2027</span>
                                        <span className="badge current">Current</span>
                                    </div>
                                    <h4>B.Tech in Computer Science</h4>
                                    <p className="institution">Panimalar Engineering College</p>
                                    <div className="achievement">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                        </svg>
                                        <span>CGPA: 8.76</span>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-line"></div>
                                <div className="timeline-content">
                                    <div className="timeline-date">
                                        <span className="year">2015 - 2023</span>
                                    </div>
                                    <h4>Secondary & Higher Secondary</h4>
                                    <p className="institution">KKS Mani Matric Higher Secondary School</p>
                                    <div className="achievement">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                        </svg>
                                        <span>Percentage: 89%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default About;