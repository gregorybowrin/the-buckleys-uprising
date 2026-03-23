import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            title="Back to top"
            style={{
                position: 'fixed',
                bottom: '6rem',
                right: '2rem',
                zIndex: 2000,
                width: '3.5rem',
                height: '3.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                border: '1px solid var(--color-white)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            }}
            onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.backgroundColor = 'var(--color-white)';
                target.style.color = 'var(--color-black)';
            }}
            onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.backgroundColor = 'var(--color-black)';
                target.style.color = 'var(--color-white)';
            }}
            aria-label="Scroll back to top"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        </button>
    );
};

export default BackToTop;
