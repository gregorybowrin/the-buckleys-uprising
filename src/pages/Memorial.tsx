import React, { useEffect } from 'react';

const Memorial: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container memorial-page">
            <div className="container">
                <div className="memorial-wrapper">
                    <h2 className="memorial-title reveal">In Memoriam</h2>
                    <p className="memorial-subtitle reveal delay-1">Those who paid the ultimate price for dignity on January 28, 1935.</p>

                    <div className="martyr-list">
                        <div className="martyr-name reveal delay-2">
                            <h1>Joseph Samuel</h1>
                        </div>

                        <div className="martyr-name reveal delay-3">
                            <h1>John Allen</h1>
                        </div>

                        <div className="martyr-name reveal delay-4">
                            <h1>James Archibald</h1>
                        </div>
                    </div>

                    <div className="memorial-footer reveal delay-5">
                        <p>And to the countless unnamed laborers who were wounded, arrested, and silenced in the fight for a fair wage. We remember.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Memorial;
