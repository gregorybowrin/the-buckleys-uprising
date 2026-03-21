import React, { useEffect } from 'react';

const WomenOfUprising: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-container" style={{ position: 'relative' }}>
            <img
                src="/sugarcane_female_worker.png"
                alt="Female sugarcane worker portrait"
                className="women-bg-worker"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <header className="page-header" style={{ marginBottom: 'var(--spacing-xxl)' }}>
                    <h1 className="reveal">The Women of the Uprising</h1>
                    <h2 className="reveal delay-1">The Unsung Vanguard of 1935</h2>
                </header>

                <section className="story-content text-content reveal delay-2">

                    <p className="lead" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        When historical accounts of the 1935 Buckley's Uprising are told, the focus often falls heavily on the men who were arrested, wounded, or killed. However, the true backbone of the resistance was heavily fortified by the women of St. Kitts.
                    </p>

                    <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                        According to esteemed local historian Sir Probyn Innis, women were <em>"as active and as committed as the men in the resistance movement."</em> They were not mere bystanders; they were organizers, instigators, and frontline defenders. When the strikes began, it was frequently the women who physically blocked the estate carts, demanding that work cease until fair wages were guaranteed.
                    </p>

                    <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                        Living under the exact same brutal colonial economic conditions, female laborers endured agonizing hours in the cane fields alongside their male counterparts, often returning home to manage households in severe systemic poverty. Their breaking point was collective. During the marches from Buckley's Estate across the island, women sang, shouted down the colonial police, and fiercely sustained the momentum of the strike.
                    </p>

                    <div style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid var(--color-white)', background: 'var(--color-dark-gray)', margin: 'var(--spacing-xl) 0' }}>
                        <h3 className="serif" style={{ color: 'var(--color-white)', marginTop: 0 }}>A Dangerous Defiance</h3>
                        <p style={{ marginBottom: 0 }}>
                            On the evening of January 28, as tensions reached a fatal boiling point in the estate courtyard, women stood resolute before the armed colonial forces. Their immense courage in the face of live ammunition shattered the illusion of colonial compliance and proved that the demand for dignity was absolute and universal across the working class.
                        </p>
                    </div>

                </section>
            </div>
        </main>
    );
};

export default WomenOfUprising;
