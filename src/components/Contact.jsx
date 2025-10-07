import React, { useState } from 'react';
import axios from 'axios';


const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

const Contact = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null); 


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // --- Logic for contact option buttons (now updates state) ---
    const handleContactOptionClick = (e) => {
        // 1. Get the subject title from the clicked option
        const optionTitle = e.currentTarget.closest('.contact-option').querySelector('h3').textContent;
        
        // 2. Update the subject state immediately
        setFormData(prev => ({ ...prev, subject: `Regarding: ${optionTitle}` }));

        // 3. Scroll to the form
        const contactForm = document.querySelector('.contact-form-wrapper');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // --- Form Submission Logic (using axios) ---
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Validation check (basic, browser handles most of this)
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus('Please fill in all required fields.');
            return;
        }

        setStatus('sending');

        try {
            // Send the form data to Formspree
            const response = await axios.post(FORMSPREE_URL, formData);
            
            if (response.status === 200) {
                setStatus('success');
                // Clear the form fields upon success
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }

        } catch (error) {
            console.error('Form Submission Error:', error);
            setStatus('error');
        }
    };
    
    // Helper function to render status messages
    const renderStatusMessage = () => {
        if (status === 'success') {
            return <p className="mt-4 text-center" style={{ color: 'var(--neon-green)', fontWeight: 600 }}>Message sent successfully! I'll be in touch soon. ✨</p>;
        }
        if (status === 'error') {
            return <p className="mt-4 text-center" style={{ color: 'var(--neon-pink)', fontWeight: 600 }}>Failed to send message. Please check your network or try emailing directly.</p>;
        }
        return null;
    };


    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container">
                <div className="section-title">
                    <h2>Let's Create Something Amazing Together</h2>
                </div>
                
                <p className="section-subtitle text-center mb-5">I'm always excited to collaborate on innovative projects and bring ideas to life</p>
                
                {/* Contact Options */}
                <div className="contact-options">
                    <div className="contact-option animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <div className="contact-icon"><i className="fas fa-briefcase"></i></div>
                        <h3>Hire Me</h3>
                        <p>Looking for a developer? Let’s talk about how I can help your team grow.</p>
                        <button className="contact-btn" onClick={handleContactOptionClick}>
                            <span>Discuss Opportunity</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                                    
                    <div className="contact-option animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
                        <div className="contact-icon"><i className="fas fa-rocket"></i></div>
                        <h3>Startup Collaboration</h3>
                        <p>Got a startup idea? I’d love to help you build it.</p>
                        <button className="contact-btn" onClick={handleContactOptionClick}>
                            <span>Start Conversation</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                                    
                    <div className="contact-option animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
                        <div className="contact-icon"><i className="fas fa-users"></i></div>
                        <h3>Project Partnership</h3>
                        <p>Have something creative in mind? Let’s build it.</p>
                        <button className="contact-btn" onClick={handleContactOptionClick}>
                            <span>Let's Team Up</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                
                {/* Contact Form */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="contact-form-wrapper animate__animated animate__fadeInUp" style={{ animationDelay: '0.8s' }}>
                            <div className="form-header">
                                <h3>Send Me a Message</h3>
                                <p>Tell me about your project or idea, and I'll get back to you as soon as possible</p>
                            </div>
                                        
                            <form onSubmit={handleFormSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Your Name</label>
                                            <input type="text" className="form-control" placeholder="Enter your full name" 
                                                name="name" 
                                                value={formData.name} 
                                                onChange={handleChange} required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Your Email</label>
                                            <input type="email" className="form-control" placeholder="Enter your email address" 
                                                name="email" 
                                                value={formData.email} 
                                                onChange={handleChange} required 
                                            />
                                        </div>
                                    </div>
                                </div>
                                                
                                <div className="form-group">
                                    <label className="form-label">Subject</label>
                                    <input type="text" className="form-control" placeholder="What is this regarding?" 
                                        name="subject" 
                                        value={formData.subject} 
                                        onChange={handleChange} required 
                                    />
                                </div>
                                                
                                <div className="form-group">
                                    <label className="form-label">Your Message</label>
                                    <textarea className="form-control" rows="5" placeholder="Tell me about your project, idea, or opportunity..." 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} required
                                    ></textarea>
                                </div>
                                                
                                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                                    <i className="fas fa-paper-plane me-2"></i>
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                                
                                {renderStatusMessage()}
                            </form>
                        </div>
                    </div>
                </div>
                
                {/* Contact Information */}
                <div className="contact-info">
                    <div className="info-card animate__animated animate__fadeInUp" style={{ animationDelay: '1s' }}>
                        <div className="info-icon"><i className="fas fa-envelope"></i></div>
                        <h4>Email Me</h4>
                        <p>poojavelm@example.com</p>
                    </div>
                                    
                                    
                    <div className="info-card animate__animated animate__fadeInUp" style={{ animationDelay: '1.2s' }}>
                        <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                        <h4>Location</h4>
                        <p>TamilNadu, Chennai.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
