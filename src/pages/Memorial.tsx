import React, { useEffect, useState } from 'react';

const martyrs = [
    {
        id: 'joseph',
        name: 'Joseph Samuel',
        bio: 'A 22-year-old laborer who stood at the forefront of the advancing crowd. His refusal to back down in the face of armed colonial power cemented his legacy as a courageous pioneer of the Caribbean working class.'
    },
    {
        id: 'john',
        name: 'John Allen',
        bio: 'A dedicated worker whose life was cut tragically short. His sacrifice became a rallying cry that echoed from the cane fields of St. Kitts across the entire West Indies, demanding immediate economic reform.'
    },
    {
        id: 'james',
        name: 'James Archibald',
        bio: 'A respected voice among the striking laborers. His unjust death under colonial fire proved to the world that the workers of St. Kitts were willing to pay the ultimate price for dignity and fair wages.'
    }
];

const Memorial: React.FC = () => {
    const [hoveredMartyr, setHoveredMartyr] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container memorial-page" style={{ position: 'relative', zIndex: 10 }}>
            <div className={`memorial-bg ${hoveredMartyr ? 'memorial-bg-dimmed' : ''}`}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="memorial-wrapper">
                    <h2 className={`memorial-title reveal ${hoveredMartyr ? 'dimmed-ui' : ''}`}>In Memoriam</h2>
                    <p className={`memorial-subtitle reveal delay-1 ${hoveredMartyr ? 'dimmed-ui' : ''}`} style={{ transition: 'opacity 0.5s ease' }}>
                        Those who paid the ultimate price for dignity on January 28, 1935.
                    </p>

                    <div className="martyr-list">
                        {martyrs.map((martyr, index) => {
                            const isHovered = hoveredMartyr === martyr.id;
                            const isDimmed = hoveredMartyr !== null && hoveredMartyr !== martyr.id;
                            
                            return (
                                <div 
                                    key={martyr.id}
                                    className={`martyr-item reveal delay-${index + 2} ${isHovered ? 'martyr-active' : ''} ${isDimmed ? 'martyr-dimmed' : ''}`}
                                    onMouseEnter={() => setHoveredMartyr(martyr.id)}
                                    onMouseLeave={() => setHoveredMartyr(null)}
                                    onTouchStart={() => setHoveredMartyr(martyr.id)}
                                >
                                    <h1>{martyr.name}</h1>
                                    <div className="martyr-bio-overlay">
                                        <p>{martyr.bio}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`memorial-footer reveal delay-5 ${hoveredMartyr ? 'dimmed-ui' : ''}`} style={{ transition: 'opacity 0.5s ease' }}>
                        <p>And to the countless unnamed laborers who were wounded, arrested, and silenced in the fight for a fair wage. We remember.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Memorial;
