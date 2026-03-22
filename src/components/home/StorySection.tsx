import React from 'react';
import { Link } from 'react-router-dom';

const StorySection: React.FC = () => {
    return (
        <section id="story" className="story-section" style={{ position: 'relative', overflow: 'hidden' }}>
            <img
                src="/worker_looking_left.png"
                alt="Historical illustration of a 1935 sugarcane worker looking over his shoulder"
                className="story-bg-worker"
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="story-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px' }}>
                    <div className="story-text">
                        <h2 className="serif">The Breaking Point</h2>
                        <p className="lead">
                            In the sugarcane fields of St. Kitts, tension had been mounting for years.
                            Despite grueling labor, wages remained stagnant, denying workers basic dignity.
                        </p>
                        <p>
                            When requests for a wage increase were violently rejected in January 1935, the workers made a resolute decision to strike. Beginning at Buckley's Estate, what started as a labor dispute transformed into a catalyst for the West Indian labor movement, resulting in tragic loss of life but undeniable, historic change across the entirety of the Caribbean.
                        </p>
                        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/the-event" className="btn btn-outline" style={{ borderColor: 'var(--color-mid-gray)' }}>Read The Event</Link>
                            <Link to="/legacy" className="btn btn-outline" style={{ borderColor: 'var(--color-mid-gray)' }}>Explore The Legacy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
