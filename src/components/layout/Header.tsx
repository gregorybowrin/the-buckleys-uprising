import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-inner">
                <Link to="/" className="logo">
                    <strong>The Buckley's Uprising</strong>
                    <span className="logo-year">1935</span>
                </Link>
                <nav className="nav">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/the-event" className={`nav-link ${location.pathname === '/the-event' ? 'active' : ''}`}>The Event</Link>
                    <Link to="/women" className={`nav-link ${location.pathname === '/women' ? 'active' : ''}`}>The Women</Link>
                    <Link to="/timeline" className={`nav-link ${location.pathname === '/timeline' ? 'active' : ''}`}>Timeline</Link>
                    <Link to="/trials" className={`nav-link ${location.pathname === '/trials' ? 'active' : ''}`}>The Trials</Link>
                    <Link to="/legacy" className={`nav-link ${location.pathname === '/legacy' ? 'active' : ''}`}>Legacy</Link>
                    <Link to="/memorial" className={`nav-link ${location.pathname === '/memorial' ? 'active' : ''}`}>Memorial</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
