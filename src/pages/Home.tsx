import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import StorySection from '../components/home/StorySection';
import CardsSection from '../components/home/CardsSection';

const Home: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <StorySection />
            <div className="parallax-separator" />
            <CardsSection />
        </main>
    );
};

export default Home;
