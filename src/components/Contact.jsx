import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/Contact.css';

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContactOptionClick = (e) => {
        const optionTitle = e.currentTarget.closest('.contact-option').querySelector('h3').textContent;
        setFormData(prev => ({ ...prev, subject: `Regarding: ${optionTitle}` }));
        const contactForm = document.querySelector('.contact-form-wrapper');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus('Please fill in all required fields.');
            return;
        }
        setStatus('sending');
        try {
            const response = await axios.post(FORMSPREE_URL, formData);
            if (response.status === 200) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form Submission Error:', error);
            setStatus('error');
        }
    };

    const renderStatusMessage = () => {
        if (status === 'success') {
            return (
                <div className="status-toast success">
                    <span className="toast-icon">✦</span>
                    <span>Message received — I'll be in touch soon.</span>
                </div>
            );
        }
        if (status === 'error') {
            return (
                <div className="status-toast error">
                    <span className="toast-icon">✕</span>
                    <span>Something went wrong. Try emailing directly.</span>
                </div>
            );
        }
        return null;
    };

    const contactOptions = [
        {
            icon: 'fas fa-briefcase',
            title: 'Hire Me',
            desc: 'Looking for a developer? Let\'s talk about how I can help your team.',
            label: 'Discuss Opportunity',
            delay: '0s'
        },
        {
            icon: 'fas fa-rocket',
            title: 'Startup Collaboration',
            desc: 'Got a startup idea? I\'d love to help you build something great.',
            label: 'Start Conversation',
            delay: '0.1s'
        },
        {
            icon: 'fas fa-users',
            title: 'Project Partnership',
            desc: 'Have something creative in mind? Let\'s bring it to life together.',
            label: 'Let\'s Team Up',
            delay: '0.2s'
        }
    ];

    return (
        <section id="contact" className="contact-section">
            {/* Background grid */}
            <div className="bg-grid" aria-hidden="true" />
            <div className="bg-glow glow-left" aria-hidden="true" />
            <div className="bg-glow glow-right" aria-hidden="true" />

            <div className="contact-container">

                {/* Header */}
                <div className="contact-header">
                    <span className="exp-v2-eyebrow">
                        <span className="dot" />
                        05 — Contact Me
                    </span>
                    <h2 className="contact-heading">
                        Let's Build<br />
                        <span className="heading-accent">Something Together</span>
                    </h2>
                    <p className="contact-subtitle">
                        Open for collaborations, ideas, and opportunities
                    </p>
                </div>

                {/* Contact Option Cards */}
                <div className="options-grid">
                    {contactOptions.map((opt, i) => (
                        <div
                            className="contact-option"
                            key={i}
                            style={{ animationDelay: opt.delay }}
                        >
                            <div className="option-number">0{i + 1}</div>
                            <div className="option-icon-wrap">
                                <i className={opt.icon}></i>
                            </div>
                            <h3>{opt.title}</h3>
                            <p>{opt.desc}</p>
                            <button className="option-btn" onClick={handleContactOptionClick}>
                                <span>{opt.label}</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="section-divider">
                    <span className="divider-line" />
                    <span className="divider-text">or send a message directly</span>
                    <span className="divider-line" />
                </div>

                {/* Contact Form */}
                <div className="contact-form-wrapper">
                    <div className="form-glow" aria-hidden="true" />

                    <div className="form-header">
                        <h3>Send a Message</h3>
                        <p>I'll get back to you within 24 hours</p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="contact-form">
                        <div className="form-row">
                            <div className={`field-group ${focusedField === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Pooja Velm"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                />
                                <span className="field-line" />
                            </div>

                            <div className={`field-group ${focusedField === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                />
                                <span className="field-line" />
                            </div>
                        </div>

                        <div className={`field-group ${focusedField === 'subject' ? 'focused' : ''} ${formData.subject ? 'filled' : ''}`}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                placeholder="What is this regarding?"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('subject')}
                                onBlur={() => setFocusedField(null)}
                                required
                            />
                            <span className="field-line" />
                        </div>

                        <div className={`field-group ${focusedField === 'message' ? 'focused' : ''} ${formData.message ? 'filled' : ''}`}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project or idea..."
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                required
                            />
                            <span className="field-line" />
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${status === 'sending' ? 'is-sending' : ''}`}
                            disabled={status === 'sending'}
                        >
                            <span className="btn-text">
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </span>
                            <span className="btn-icon">
                                {status === 'sending'
                                    ? <span className="spinner" />
                                    : <i className="fas fa-paper-plane" />
                                }
                            </span>
                            <span className="btn-shine" aria-hidden="true" />
                        </button>

                        {renderStatusMessage()}
                    </form>
                </div>

                {/* Info Cards */}
                <div className="info-strip">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-envelope" />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Email</span>
                            <span className="info-value">poojavelm@gmail.com</span>
                        </div>
                    </div>

                    <div className="info-divider" />

                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Based in</span>
                            <span className="info-value">Chennai, Tamil Nadu</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;