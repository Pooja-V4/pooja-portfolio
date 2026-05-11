import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Experience.css';

const timelineData = [
    {
        id: 1,
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
        date: 'March 2025',
        title: 'Prompt Intern',
        company: 'Metawyse Solutions',
        description: 'Explored creative AI applications and interactive web development by building engaging projects such as a shooting game, dynamic websites, and AI-generated poster designs.',
        tech: ['ChatGPT', 'Gemini'],
        achievements: [
            'Developed an interactive shooting game using HTML, CSS, and JavaScript',
            'Created "Wonder"-style responsive websites with smooth animations and UI effects',
            'Designed multiple posters and visual assets using AI-powered design tools'
        ],
        duration: '1 month'
    }
];

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const els = sectionRef.current?.querySelectorAll('[data-reveal]') || [];
        els.forEach((el) => observer.observe(el));
        return () => els.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <section id="experience" className="exp-v2" ref={sectionRef}>
            <div className="exp-v2-bg">
                <div className="exp-v2-grid" />
                <div className="exp-v2-glow" />
            </div>

            <div className="exp-v2-container">
                <header className="exp-v2-header" data-reveal>
                    <span className="exp-v2-eyebrow">
                        <span className="dot" />
                        04 — Experience
                    </span>
                    <h2 className="exp-v2-title">
                        Where I&apos;ve <span className="accent">Intern</span>
                    </h2>
                    <p className="exp-v2-lead">
                        A timeline of internships and roles that shaped how I build.
                    </p>
                </header>

                <div className="exp-v2-layout" data-reveal>
                    <div className="exp-v2-tabs" role="tablist">
                        {timelineData.map((item, index) => (
                            <button
                                key={item.id}
                                role="tab"
                                aria-selected={activeIndex === index}
                                className={`exp-v2-tab ${activeIndex === index ? 'is-active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className="tab-index">0{index + 1}</span>
                                <span className="tab-company">{item.company}</span>
                                <span className="tab-date">{item.date}</span>
                            </button>
                        ))}
                    </div>

                    <div className="exp-v2-panel">
                        <div className="panel-head">
                            <div>
                                <h3 className="panel-role">
                                    {timelineData[activeIndex].title}
                                    <span className="panel-at"> @ {timelineData[activeIndex].company}</span>
                                </h3>
                                <div className="panel-meta">
                                    <span className="meta-chip">
                                        <span className="chip-dot" />
                                        {timelineData[activeIndex].date}
                                    </span>
                                    <span className="meta-chip muted">
                                        {timelineData[activeIndex].duration}
                                    </span>
                                </div>
                            </div>
                            <div className="panel-counter">
                                <span className="cnt-cur">0{activeIndex + 1}</span>
                                <span className="cnt-sep">/</span>
                                <span className="cnt-total">0{timelineData.length}</span>
                            </div>
                        </div>

                        <p className="panel-desc">{timelineData[activeIndex].description}</p>

                        <div className="panel-section">
                            <h4 className="panel-h4">// what I shipped</h4>
                            <ul className="panel-list">
                                {timelineData[activeIndex].achievements.map((a, i) => (
                                    <li key={i}>
                                        <span className="li-arrow">→</span>
                                        <span>{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="panel-section">
                            <h4 className="panel-h4">// stack</h4>
                            <div className="panel-tags">
                                {timelineData[activeIndex].tech.map((t, i) => (
                                    <span key={i} className="panel-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
