import React, { useEffect } from 'react';

const About = () => {
    // Re-implementing the Intersection Observer for section content (as in original JS)
    useEffect(() => {
        const elements = document.querySelectorAll('.about-content-wrapper > div');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.classList.contains('about-summary') ? '0.3s' : '0.5s';
                    entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
                    entry.target.style.animationDelay = delay;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            observer.observe(element);
        });

        return () => elements.forEach(element => observer.unobserve(element));
    }, []);

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-content about-content-wrapper">

                            <div className="col-lg-7 about-summary">
                                <h3>A Digital Creator Focused on Coding and Innovation</h3>
                                <p>Hello! I'm <strong>Pooja</strong>, a pre-final year <strong>Computer Science student</strong> 
                                who loves coding, problem-solving, and building creative projects. I’m passionate about crafting engaging digital experiences and currently focus on <strong>Front-End Development</strong>
                                using HTML, CSS, JavaScript, Bootstrap and frontend framework react.</p>
                                <p>I’m learning backend technologies and databases to become a complete full-stack developer. I’m always ready to learn and explore new topics.
                                I’m also available for freelance and startup collaborations—let’s connect if you need a modern, responsive, and user-friendly website!    
                                </p>
                            </div>

                            <div className="col-lg-5">
                                <ul className="timeline">
                                    <li className="timeline-item">
                                        <div className="timeline-icon"><i className="fas fa-graduation-cap"></i></div>
                                        <div className="timeline-date">2023 - 2027</div>
                                        <div className="timeline-content">
                                            <h4>B.Tech in Computer Science and Engineering  </h4>
                                            <p>Panimalar Engineering College</p>
                                            <b className="timeline-date">CGPA : 8.76</b>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-icon"><i className="fas fa-graduation-cap"></i></div>
                                        <div className="timeline-date">2015 - 2023</div>
                                        <div className="timeline-content">
                                            <h4>SSLC and HS</h4>
                                            <p>KKS Mani Matric Higher Secondary School</p>
                                            <b className="timeline-date">Percentage : 89%</b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;