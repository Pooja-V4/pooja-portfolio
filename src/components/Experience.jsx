import React, { useState, useEffect, useRef } from 'react';

const timelineData = [
    {
        id: 1,
        icon: 'fas fa-code',
        date: 'Oct 2024',
        title: 'Full-Stack Development Intern',
        company: 'Infomatronics',
        description: 'Designed and developed full-stack web applications, including a Movie Ticket Booking System and multiple responsive websites using modern web technologies.',
        tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'JavaScript', 'MySQL'],
        achievements: [
            'Built a Movie Ticket Booking System with seat selection features and admin functionality',
            'Developed multiple responsive websites optimized for mobile and desktop screens',
            'Enhanced user experience and site speed through front-end and back-end optimization'
        ],
        duration: '1 month'
    },
    {
        id: 2,
        icon: 'fas fa-robot',
        date: 'May 2025',
        title: 'Android App Development Intern',
        company: 'Internshala',
        description: 'Developed Android applications using Kotlin and Jetpack Compose, focusing on building clean UI layouts, smooth navigation, and optimized app performance.',
        tech: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase', 'MVVM'],
        achievements: [
            'Built a Hotel Booking System app with room availability and authentication features',
            'Developed a sample E-commerce app with product listings and add to cart',
            'Enhanced app performance by optimizing Compose layouts and integrating efficient data handling'
        ],
        duration: '2 months'
    },
    {
        id: 3,
        icon: 'fas fa-universal-access',
        date: 'March 2025',
        title: 'Prompt Intern',
        company: 'Metawyse Solutions',
        description: 'Explored creative AI applications and interactive web development by building engaging projects such as a shooting game, dynamic websites, and AI-generated poster designs.',
        tech: ['chatgpt','gemini'],
        achievements: [
            'Developed an interactive shooting game using HTML, CSS, and JavaScript',
            'Created “Wonder”-style responsive websites with smooth animations and UI effects',
            'Designed multiple posters and visual assets using AI-powered design tools'
        ],
        duration: '1 months'
    }
];

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animatedItems, setAnimatedItems] = useState([]);
    const accordionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.dataset.id;
                    setAnimatedItems(prev => [...new Set([...prev, id])]);
                }
            });
        }, { threshold: 0.2 });

        const items = document.querySelectorAll('.accordion-item');
        items.forEach(item => observer.observe(item));

        return () => items.forEach(item => observer.unobserve(item));
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section id="experience" className="experience-accordion-section">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2 className="accordion-title">Professional Experience</h2>
                    <p className="accordion-subtitle">
                        Click on each role to view my internship experience
                    </p>
                </div>

                <div className="accordion-container" ref={accordionRef}>
                    {timelineData.map((item, index) => (
                        <div 
                            key={item.id}
                            data-id={item.id}
                            className={`accordion-item ${animatedItems.includes(item.id.toString()) ? 'animated' : ''} ${activeIndex === index ? 'active' : ''}`}
                            style={{ '--item-index': index }}
                        >
                            <div 
                                className="accordion-header"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="header-content">
                                    <div className="icon-wrapper">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="title-section">
                                        <h3 className="job-title">{item.title}</h3>
                                        <div className="company-details">
                                            <span className="company-name">{item.company}</span>
                                            <span className="duration-badge">{item.duration}</span>
                                        </div>
                                        <span className="date-range">{item.date}</span>
                                    </div>
                                </div>
                                <div className="accordion-indicator">
                                    <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
                                </div>
                            </div>

                            <div className="accordion-content">
                                <div className="content-grid">
                                    <div className="main-description">
                                        <h4>Role Overview</h4>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className="achievements-section">
                                        <h4>Key Achievements</h4>
                                        <div className="achievements-list">
                                            {item.achievements.map((achievement, achievementIndex) => (
                                                <div key={achievementIndex} className="achievement-item">
                                                    <div className="achievement-icon">
                                                        <i className="fas fa-trophy"></i>
                                                    </div>
                                                    <span>{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="tech-stack-section">
                                        <h4>Technologies & Tools</h4>
                                        <div className="tech-tags">
                                            {item.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;