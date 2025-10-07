import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Handle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Smooth scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div 
            className={`back-to-top ${isVisible ? 'active' : ''}`}
            onClick={scrollToTop}
        >
            <i className="fas fa-arrow-up"></i>
        </div>
    );
};

export default BackToTop;