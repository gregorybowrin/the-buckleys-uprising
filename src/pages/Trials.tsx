import React, { useEffect } from 'react';

const Trials: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container">
            <div className="container">
                <header className="page-header" style={{ marginBottom: 'var(--spacing-xxl)' }}>
                    <h1 className="reveal">The Arrests & The Trials</h1>
                    <h2 className="reveal delay-1">From Riot to Legal Revolution</h2>
                </header>

                <section className="story-content text-content reveal delay-2">

                    <p className="lead" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        In the immediate aftermath of the January tragedy, the colonial response was swift and draconian. With the arrival of the British warship <em>HMS Leander</em>, martial authority was enforced. Thirty-nine striking workers were arrested, thrown into cramped cells, and slapped with severe charges of rioting, assault, and sedition.
                    </p>

                    <img
                        src="/uprising_trials.png"
                        alt="Historical recreation of a 1930s Caribbean lawyer"
                        style={{ width: '100%', margin: 'var(--spacing-lg) 0', filter: 'grayscale(100%) contrast(1.1)', border: '1px solid var(--color-mid-gray)' }}
                    />

                    <h3 className="serif" style={{ color: 'var(--color-white)', marginTop: 'var(--spacing-xl)' }}>The Peacemakers</h3>
                    <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                        Throughout the deadly evening of January 28, key figures like <strong>Thomas Manchester</strong> (founder of the Workers' League) and renowned lawyer <strong>Clement Malone</strong> risked their lives to de-escalate the violence. Though they failed to stop the colonial police from opening fire, their presence marked a critical shift. They recognized that raw, violent uprising—while justified by decades of starvation wages—would only lead to mass slaughter by British forces. The battlefield had to be moved to the courtroom.
                    </p>

                    <h3 className="serif" style={{ color: 'var(--color-white)', marginTop: 'var(--spacing-xl)' }}>The Defense of the 39</h3>
                    <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                        During the trials in March and April of 1935, Clement Malone took up the monumental task of defending the arrested workers. Facing a seemingly insurmountable colonial justice system, Malone was brilliant and relentless. He systematically dismantled the prosecution's case, aggressively exposing stark discrepancies in the police evidence and accusing the constabulary of blatant collusion to secure guilty verdicts.
                    </p>

                    <div style={{ padding: 'var(--spacing-lg)', borderTop: '1px solid var(--color-mid-gray)', borderBottom: '1px solid var(--color-mid-gray)', margin: 'var(--spacing-xl) 0' }}>
                        <p style={{ marginBottom: 0, fontStyle: 'italic', color: 'var(--color-light-gray)' }}>
                            Against all odds, Malone's masterful defense convinced a jury composed primarily of middle-class businessmen to acquit the vast majority of the accused laborers.
                        </p>
                    </div>

                    <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                        While six individuals were ultimately sentenced to severe terms of two to five years in prison, the acquittals were a monumental victory. It legitimized the workers' struggle in the eyes of the law. Guided by Manchester and defended by Malone, the Buckley's Uprising ceased being categorized merely as an "illegal riot" and became the recognized, undeniable birth of the constitutional Caribbean labor movement.
                    </p>

                </section>
            </div>
        </main>
    );
};

export default Trials;
