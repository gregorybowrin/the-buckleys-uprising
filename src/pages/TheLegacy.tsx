import React, { useEffect } from 'react';

const TheLegacy: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container" style={{ position: 'relative' }}>
            <img
                src="/sugarcane_worker.png"
                alt="Sugarcane worker portrait"
                className="legacy-bg-worker"
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <header className="page-header">
                    <h1 className="reveal delay-1">The Ripple Effect</h1>
                    <h2 className="reveal delay-2">A Legacy That Changed the Caribbean</h2>
                </header>

                <section className="story-content reveal delay-3">
                    <p className="lead">
                        The violence at Buckley’s Estate was a tragedy, but the blood of the martyrs became the seed for sweeping transformation across the entire British West Indies.
                    </p>

                    <h3>The Birth of Organized Labour</h3>
                    <p>
                        The uprising exposed the brutal reality of colonial labor exploitation, proving that unorganized, isolated strikes could be violently suppressed. This realization sparked the formal organization of the labor movement in St. Kitts. The protests led directly to the formation of the St. Kitts Workers' League, an institution that would evolve into the St. Kitts Nevis Trades and Labour Union, securing constitutional representation and bargaining power for the working class.
                    </p>

                    <h3>The Moyne Commission</h3>
                    <p>
                        St. Kitts was the catalyst. The flames of rebellion quickly spread across the Caribbean throughout the late 1930s. Faced with region-wide unrest, the British government was forced to act. They appointed the West India Royal Commission, commonly known as the <em>Moyne Commission</em>, in 1938.
                    </p>
                    <p>
                        The Commission's findings were a devastating indictment of colonial rule. They confirmed what the workers at Buckley’s had been fighting against: severe economic depression, unsafe workplaces, and appalling living conditions. The resulting Moyne Report established critical reforms, strengthened trade union rights, mandated minimum wages, and set the entire region on the pathway to eventual political independence.
                    </p>

                    <h3>A National Day of Recognition</h3>
                    <p>
                        The sacrifices made on January 28, 1935, are never to be forgotten. Acknowledging its profound historical importance, the Government of St. Kitts and Nevis has declared January 28th an annual national holiday, effective from 2027. It stands as a solemn commemoration of a pivotal moment in the nation's struggle for dignity, social justice, and profound liberation.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default TheLegacy;
