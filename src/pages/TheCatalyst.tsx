import React, { useEffect } from 'react';

const TheCatalyst: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container" style={{ position: 'relative' }}>
            <img
                src="/caribbean-archipelago.png"
                alt="Vintage 1930s style map of the Caribbean archipelago"
                className="catalyst-bg-map"
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <header className="page-header" style={{ marginBottom: 'var(--spacing-xxl)' }}>
                    <h1 className="reveal">The Catalyst</h1>
                    <h2 className="reveal delay-1">Igniting the West Indian Labour Rebellions</h2>
                </header>

                <section className="story-content text-content reveal delay-2">
                    <p className="lead" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        While the violence at Buckley's Estate was initially viewed by colonial administrators as a localized disturbance, history has definitively recorded the January 1935 strike in St. Kitts as the spark that ignited an undeniable regional inferno. 
                    </p>

                    <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                        News of the courage displayed by the Kittitian sugarcane workers traveled quickly through the inter-island schooner trade and local word-of-mouth. The demands made at Buckley's—for fair wages, basic human dignity, and the right to organize—resonated powerfully with laborers across the British West Indies who were suffering under the exact same oppressive colonial economic depression.
                    </p>

                    <h3 className="serif" style={{ color: 'var(--color-white)', marginTop: 'var(--spacing-xl)' }}>The Domino Effect (1935–1939)</h3>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        St. Kitts was simply the first. What followed over the next four years was a spectacular cascade of labor uprisings across the Caribbean, forever altering the political landscape:
                    </p>
                    
                    <ul style={{ listStyleType: 'disc', paddingLeft: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)', color: 'var(--color-light-gray)', lineHeight: '1.8' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>St. Vincent (October 1935):</strong> Later that exact same year, severe riots broke out over increased customs duties and widespread poverty, influenced directly by the Kittitian unrest.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>St. Lucia (1935–1937):</strong> Coal carriers staged a successful strike, emboldened by a newly discovered collective working-class consciousness.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Barbados (July 1937):</strong> Deportations and wage disputes led to massive riots in Bridgetown, resulting in significant casualties but cementing the power of organized strikes.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Trinidad (June 1937):</strong> Oilfield workers led by Tubal Uriah "Buzz" Butler launched a devastating general strike that paralyzed the southern oilbelt.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Jamaica (1938):</strong> Widespread demonstrations across sugar estates and the Kingston waterfront demanded an end to destitution.
                        </li>
                    </ul>

                    <div style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid var(--color-white)', background: 'var(--color-dark-gray)', margin: 'var(--spacing-xl) 0' }}>
                        <h3 className="serif" style={{ color: 'var(--color-white)', margin: 0 }}>The Birth of the Modern Caribbean</h3>
                        <p style={{ margin: 0, marginTop: 'var(--spacing-md)' }}>
                            The sacrifices of the martyrs at Buckley's Estate cannot be viewed in isolation. They forcefully demonstrated to the entire Caribbean working class that colonial authorities were not invincible. The resulting region-wide unrest ultimately forced the British Government to dispatch the Moyne Commission in 1938, which formally acknowledged the staggering inequalities and paved the crucial legal pathways for trade unionism, universal adult suffrage, and eventual political independence across the West Indies.
                        </p>
                    </div>

                </section>
            </div>
        </main>
    );
};

export default TheCatalyst;
