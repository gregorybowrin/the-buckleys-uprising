import React, { useEffect } from 'react';

const TheEvent: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container" style={{ position: 'relative' }}>
            <img
                src="/event_bg_manager.png"
                alt="Colonial estate manager portrait"
                className="event-bg-manager"
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <header className="page-header">
                    <h1 className="reveal delay-1">The Breaking Point</h1>
                    <h2 className="reveal delay-2">January 28, 1935 – Buckley’s Estate</h2>
                </header>

                <section className="story-content reveal delay-3">
                    <p className="lead">
                        The roots of the uprising lay deeply embedded in the harsh, exploitative conditions of the colonial sugar industry. For decades, laborers in St. Kitts endured grueling work for wages that barely sustained survival.
                    </p>

                    <h3>The Refusal</h3>
                    <p>
                        Tensions reached a boiling point at the start of the 1935 sugar crop. Workers demanded a return to the cane cutting rate of one shilling per ton—a rate they had been denied in previous years. Their request was brought before E.D.B. Dobridge, the manager of Buckley’s Estate, who resoundingly rejected their plea. For the laborers, this uncompromising stance was the final indignity. They refused to work.
                    </p>

                    <h3>The Spark Spreads</h3>
                    <p>
                        What started at Buckley's Estate rapidly became an island-wide movement. Word spread from estate to estate. Strikers marched across St. Kitts, calling on their fellow workers to join the strike, demonstrating an unprecedented level of unity and determination. Their peaceful, yet forceful, demand was simple: dignity, fair compensation, and an end to systemic exploitation.
                    </p>

                    <h3>The Tragic Climax</h3>
                    <p>
                        As the numbers grew, colonial authorities panicked. To suppress the strike, an armed response was deployed, including local police and troops from the British warship <em>HMS Leander</em>. When crowds gathered at Buckley's Estate, Dobridge reportedly fired his shotgun into the crowd, inciting outrage. The Riot Act was read, and official forces opened fire on the unarmed laborers.
                    </p>

                    <p className="highlight-text">
                        Three men lost their lives in the gunfire: Joseph Samuel, John Allen, and James Archibald. At least eight others were wounded, and numerous workers were subsequently arrested and imprisoned.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default TheEvent;
