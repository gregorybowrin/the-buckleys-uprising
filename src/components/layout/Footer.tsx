import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-content">
                    <h3 className="serif">The Buckley's Uprising</h3>
                    <p className="footer-desc">
                        A documentary exploration of the 1935 St. Kitts labor rebellion.
                        Remembering those who stood for dignity and fair wages.
                    </p>
                </div>
                <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Link to="/the-event">The Event</Link>
                    <Link to="/legacy">Legacy</Link>
                    <Link to="/sources">Sources</Link>
                </div>
                <div className="footer-social">
                    <h4>Share This History</h4>
                    <div className="social-icons">
                        <a href="https://wa.me/?text=Explore%20the%20history%20of%20The%20Buckleys%20Uprising:%20https%3A%2F%2Fthebuckleysuprising.com" target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" title="Share on WhatsApp">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthebuckleysuprising.com" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" title="Share on Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="https://twitter.com/intent/tweet?text=Explore%20the%20history%20of%20The%20Buckleys%20Uprising%20in%20St.%20Kitts&url=https%3A%2F%2Fthebuckleysuprising.com" target="_blank" rel="noopener noreferrer" aria-label="Share on X" title="Share on X">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} A Buckley's Uprising historical initiative. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
