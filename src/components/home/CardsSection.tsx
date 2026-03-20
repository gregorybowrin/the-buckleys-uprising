import React from 'react';
import { Link } from 'react-router-dom';

const navigationCards = [
    {
        title: 'The Event',
        description: 'The definitive account of January 28, 1935, and the violent suppression of the sugar workers.',
        link: '/the-event',
        image: '/riots.png'
    },
    {
        title: 'The Women',
        description: 'Discover the unsung vanguard of the 1935 strikes who stopped the carts and stood before the militia.',
        link: '/women',
        image: '/uprising_women.png'
    },
    {
        title: 'Interactive Timeline',
        description: 'Follow the hour-by-hour escalation from wage disputes to the arrival of the HMS Leander.',
        link: '/timeline',
        image: '/timeline_4.png'
    },
    {
        title: 'The Trials',
        description: 'Learn about the 39 arrests and the brilliant legal defense by Clement Malone that secured justice.',
        link: '/trials',
        image: '/uprising_trials.png'
    },
    {
        title: 'The Legacy',
        description: 'Understand how the uprising forged the St. Kitts Workers\' League and defined modern independence.',
        link: '/legacy',
        image: '/timeline_1.png'
    },
    {
        title: 'In Memoriam',
        description: 'A solemn tribute to the martyrs who paid the ultimate price for dignity and fair compensation.',
        link: '/memorial',
        image: '/timeline_6.png'
    }
];

const CardsSection: React.FC = () => {
    return (
        <section className="cards-section container">
            <h2 className="serif text-center" style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--color-white)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Explore the Archives
            </h2>
            <div className="cards-grid">
                {navigationCards.map((card, index) => (
                    <Link to={card.link} className="nav-card reveal" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="card-image-wrapper">
                            <img src={card.image} alt={card.title} className="card-image" />
                        </div>
                        <div className="card-content">
                            <h3 className="serif">{card.title}</h3>
                            <p>{card.description}</p>
                            <span className="card-action">Read Chapter &#8594;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CardsSection;
