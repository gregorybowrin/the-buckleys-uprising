import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            {/* 
        This is a placeholder video URL. Replace 'hero-bg.mp4' with your actual 
        historical/sugarcane/rebellion footage when you have it. 
        Place your video in the public/ folder.
      */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            >
                <source src="/buckleys_uprising_conceptual_video.mp4" type="video/mp4" />
            </video>
            <div className="vertical-word-overlay">
                <span>R</span>
                <span>I</span>
                <span>S</span>
                <span>E</span>
            </div>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text">
                    <h2 className="hero-sub reveal delay-1">St. Kitts, January 1935</h2>
                    <h1 className="hero-title reveal delay-2">The Spark of a Movement</h1>
                    <p className="hero-desc reveal delay-3">
                        A demand for fair wages. A stand against oppression.
                        The events at Buckley’s Estate echoed throughout the Caribbean,
                        forever changing the course of history.
                    </p>
                    <div className="hero-cta reveal delay-3">
                        <a href="#story" className="btn btn-outline">Discover the Story</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
