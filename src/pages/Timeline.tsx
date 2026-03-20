import React, { useEffect } from 'react';

const Timeline: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container">
            <div className="container">
                <header className="page-header">
                    <h1 className="reveal delay-1">The Escalation</h1>
                    <h2 className="reveal delay-2">An Hour-by-Hour Timeline</h2>
                </header>

                <section className="timeline-container">
                    <div className="timeline-line"></div>

                    <div className="timeline-item reveal">
                        <div className="timeline-content left">
                            <h3>Early January 1935</h3>
                            <p>Sugar estates finalize their crop budgets. Despite requests, workers learn the cutting rate will remain significantly below previous years at merely eight pence per ton.</p>
                        </div>
                        <div className="timeline-media right">
                            <img src="/timeline_1.png" alt="Colonial sugar plantation" />
                        </div>
                    </div>

                    <div className="timeline-item reveal delay-1">
                        <div className="timeline-media left">
                            <img src="/timeline_2.png" alt="Workers gathered outside estate" />
                        </div>
                        <div className="timeline-content right">
                            <h3>January 28 - Early Morning</h3>
                            <p>Strikers gather at Buckley's Estate. A delegation formally approaches Manager E.D.B. Dobridge demanding the rate be restored to one shilling.</p>
                        </div>
                    </div>

                    <div className="timeline-item reveal delay-2">
                        <div className="timeline-content left">
                            <h3>January 28 - Midday</h3>
                            <p>Dobridge adamantly refuses the demands. News spreads like wildfire across the island. Workers from other estates abandon the fields and march to join the gathering at Buckley's.</p>
                        </div>
                        <div className="timeline-media right">
                            <img src="/timeline_3.png" alt="Workers marching" />
                        </div>
                    </div>

                    <div className="timeline-item reveal">
                        <div className="timeline-media left">
                            <img src="/timeline_4.png" alt="Workers facing police" />
                        </div>
                        <div className="timeline-content right">
                            <h3>January 28 - Afternoon</h3>
                            <p>The crowd grows to the hundreds, then thousands. The colonial police force is deployed but is severely outnumbered by the frustrated, united workers.</p>
                        </div>
                    </div>

                    <div className="timeline-item reveal delay-1">
                        <div className="timeline-content left">
                            <h3>January 28 - Evening</h3>
                            <p>In a drastic escalation, Dobridge fires a shotgun from a veranda into the advancing crowd. The Riot Act is hastily read by the magistrate.</p>
                        </div>
                        <div className="timeline-media right">
                            <img src="/timeline_5.png" alt="Manager with shotgun at dusk" />
                        </div>
                    </div>

                    <div className="timeline-item reveal delay-2">
                        <div className="timeline-media left">
                            <img src="/timeline_6.png" alt="Night chaos in couryard" />
                        </div>
                        <div className="timeline-content right">
                            <h3>The Night of January 28</h3>
                            <p>Official forces open fire on the unarmed laborers. Three men are killed, and numerous others are severely wounded causing chaos across the estate.</p>
                        </div>
                    </div>

                    <div className="timeline-item reveal">
                        <div className="timeline-content left">
                            <h3>January 29 - Afternoon</h3>
                            <p>The British warship <em>HMS Leander</em> drops anchor. Marines are dispatched across St. Kitts to quell any remaining resistance and execute mass arrests.</p>
                        </div>
                        <div className="timeline-media right">
                            <img src="/timeline_7.png" alt="HMS Leander and marines" />
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
};

export default Timeline;
