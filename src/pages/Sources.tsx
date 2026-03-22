import React, { useEffect } from 'react';

const Sources: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container" style={{ position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <header className="page-header" style={{ marginBottom: 'var(--spacing-xxl)' }}>
                    <h1 className="reveal">Sources & Further Reading</h1>
                    <h2 className="reveal delay-1">Historical Attributions and Documentation</h2>
                </header>

                <section className="story-content text-content reveal delay-2">
                    <p className="lead" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        The historical narrative of the 1935 Buckley's Uprising is built upon the dedicated research and preservation efforts of historians, scholars, and national archives. Below are key resources used to construct this site and excellent starting points for those who wish to delve deeper into the St. Kitts labor movement.
                    </p>

                    <h3 className="serif" style={{ color: 'var(--color-white)', marginTop: 'var(--spacing-xl)' }}>Textual & Historical Accounts</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)', color: 'var(--color-light-gray)', lineHeight: '1.8' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Sir Probyn Innis</strong> — <em>Whither Bound St. Kitts-Nevis?</em> A foundational text detailing the socio-economic disparities and political landscape leading up to the 1935 strikes.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>O. Nigel Bolland</strong> — <em>On the March: Labour Rebellions in the British Caribbean, 1934-39.</em> Provides vital context on how the St. Kitts uprising served as a catalyst for widespread labor movements across the West Indies.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>St. Kitts National Archives</strong> — Crucial primary source documents, police logs, and contemporary newspaper articles providing firsthand accounts of the tensions at Buckley's Estate.
                        </li>
                    </ul>

                    <h3 className="serif" style={{ color: 'var(--color-white)', marginTop: 'var(--spacing-xl)' }}>Archival Photography & Imagery</h3>
                    <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                        Visual representations on this site aim to respectfully recreate the profound struggle and dignity of the 1930s Kittitian working class. 
                        While some images are historically referenced or AI-assisted recreations based on historical descriptions of the sugarcane fields and estate conditions, their spirit is derived from authentic archival photography preserved by the history departments of the Federation of St. Kitts and Nevis.
                    </p>

                    <div style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid var(--color-white)', background: 'var(--color-dark-gray)', margin: 'var(--spacing-xl) 0' }}>
                        <h3 className="serif" style={{ color: 'var(--color-white)', margin: 0 }}>Special Thanks</h3>
                        <p style={{ margin: 0, marginTop: 'var(--spacing-md)' }}>
                            To the descendants of the martyrs and the resilient workers of the 1935 movement, whose oral histories continue to ensure that the sacrifice made at Buckley's Estate is never forgotten.
                        </p>
                    </div>

                </section>
            </div>
        </main>
    );
};

export default Sources;
