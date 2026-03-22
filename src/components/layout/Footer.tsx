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
                <div className="footer-links">
                    <Link to="/the-event">The Event</Link>
                    <Link to="/legacy">Legacy</Link>
                    <Link to="/sources">Sources</Link>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} A Buckley's Uprising historical initiative. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
