import React, { useState, useEffect } from 'react';

type Location = {
    id: string;
    name: string;
    x: number;
    y: number;
    description: string;
};

const locations: Location[] = [
    {
        id: 'buckleys',
        name: "Buckley's Estate",
        x: 50,
        y: 57,
        description: "The epicenter of the 1935 uprising. Here, Manager E.D.B. Dobridge refused the workers' demand for a one-shilling rate, sparking the island-wide strike that culminated in military intervention and the deaths of three martyrs."
    },
    {
        id: 'shadwell',
        name: 'Shadwell Estate',
        x: 54,
        y: 53,
        description: "After being rejected at Buckley's, strikers marched to Shadwell Estate to persuade the workers there to lay down their tools and join the growing movement for fair wages."
    },
    {
        id: 'brighton',
        name: 'Brighton Estate',
        x: 63,
        y: 38,
        description: "As the strike spread eastward, workers at Brighton were among the many coerced into joining the stoppage, effectively outperforming the colonial administration and halting the entire island's sugar production."
    }
];

const StrikeMap: React.FC = () => {
    const [activeLocation, setActiveLocation] = useState<Location | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container map-page">
            <div className="container">
                <header className="page-header text-center" style={{ borderBottom: 'none' }}>
                    <h1 className="reveal">The Strike Path</h1>
                    <h2 className="reveal delay-1">Explore the estates of the 1935 uprising</h2>
                </header>

                <div className="map-wrapper reveal delay-2">
                    <div 
                        className="map-container"
                        onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
                            const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
                            // Avoid triggering when clicking existing pins or close buttons
                            if ((e.target as HTMLElement).closest('.map-pin')) return;
                            alert(`Exact Map Coordinates:\nx: ${x}\ny: ${y}\n\nSend these numbers to me for the estates!`);
                        }}
                        style={{ cursor: 'crosshair' }}
                    >
                        <img src="/stkitts-map.jpg" alt="Ancient Map of St. Kitts" className="map-image" />

                        {/* Map Pins */}
                        {locations.map(loc => (
                            <button
                                key={loc.id}
                                className={`map-pin ${activeLocation?.id === loc.id ? 'active' : ''}`}
                                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                                onClick={() => setActiveLocation(loc)}
                                aria-label={`View details for ${loc.name}`}
                            >
                                <span className="pin-pulse"></span>
                                <span className="pin-dot"></span>
                                <span className="pin-label">{loc.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Info Card */}
                    <div className={`map-info-card ${activeLocation ? 'visible' : ''}`}>
                        {activeLocation ? (
                            <>
                                <h3>{activeLocation.name}</h3>
                                <p>{activeLocation.description}</p>
                                <button className="btn-close" onClick={() => setActiveLocation(null)}>×</button>
                            </>
                        ) : (
                            <p className="placeholder-text">Select a location on the map to explore its history.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StrikeMap;
