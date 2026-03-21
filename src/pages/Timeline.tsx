import React, { useEffect, useRef, useState } from 'react';

const timelineData = [
    { id: 1, title: 'Early January 1935', text: 'Sugar estates finalize their crop budgets. Despite requests, workers learn the cutting rate will remain significantly below previous years at merely eight pence per ton.', img: '/timeline_1.png', alt: 'Colonial sugar plantation' },
    { id: 2, title: 'January 28 - Early Morning', text: "Strikers gather at Buckley's Estate. A delegation formally approaches Manager E.D.B. Dobridge demanding the rate be restored to one shilling.", img: '/timeline_2.png', alt: 'Workers gathered outside estate' },
    { id: 3, title: 'January 28 - Midday', text: "Dobridge adamantly refuses the demands. News spreads like wildfire across the island. Workers from other estates abandon the fields and march to join the gathering at Buckley's.", img: '/timeline_3.png', alt: 'Workers marching' },
    { id: 4, title: 'January 28 - Afternoon', text: 'The crowd grows to the hundreds, then thousands. The colonial police force is deployed but is severely outnumbered by the frustrated, united workers.', img: '/timeline_4.png', alt: 'Workers facing police' },
    { id: 5, title: 'January 28 - Evening', text: 'In a drastic escalation, Dobridge fires a shotgun from a veranda into the advancing crowd. The Riot Act is hastily read by the magistrate.', img: '/timeline_5.png', alt: 'Manager with shotgun at dusk' },
    { id: 6, title: 'The Night of January 28', text: 'Official forces open fire on the unarmed laborers. Three men are killed, and numerous others are severely wounded causing chaos across the estate.', img: '/timeline_6.png', alt: 'Night chaos in couryard' },
    { id: 7, title: 'January 29 - Afternoon', text: 'The British warship <em>HMS Leander</em> drops anchor. Marines are dispatched across St. Kitts to quell any remaining resistance and execute mass arrests.', img: '/timeline_7.png', alt: 'HMS Leander and marines' },
];

const Timeline: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        if (!isNaN(index)) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 } // triggers when item hits middle 20% of screen
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        const currentRefs = itemRefs.current;
        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <main className="page-container relative overflow-hidden" style={{ position: 'relative' }}>
            {/* Cinematic Background */}
            <div className="timeline-dynamic-bg" style={{ 
                backgroundImage: `url(${timelineData[activeIndex]?.img || timelineData[0].img})`,
            }}></div>
            <div className="timeline-dynamic-overlay"></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <header className="page-header text-center border-none" style={{ position: 'relative', zIndex: 10, borderBottom: 'none' }}>
                    <h1 className="reveal delay-1">The Escalation</h1>
                    <h2 className="reveal delay-2">An Hour-by-Hour Timeline</h2>
                </header>

                <section className="timeline-container">
                    <div className="timeline-line"></div>

                    {timelineData.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div 
                                key={item.id} 
                                className={`timeline-item ${activeIndex === index ? 'active-item' : ''}`}
                                ref={(el: HTMLDivElement | null) => {
                                    itemRefs.current[index] = el;
                                }}
                                data-index={index}
                                style={{
                                    opacity: activeIndex === index ? 1 : 0.3,
                                    transform: activeIndex === index ? 'scale(1.02)' : 'scale(0.98)',
                                    transition: 'opacity 0.6s ease, transform 0.6s ease'
                                }}
                            >
                                {isLeft ? (
                                    <>
                                        <div className="timeline-content left">
                                            <h3>{item.title}</h3>
                                            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                        </div>
                                        <div className="timeline-media right">
                                            <img src={item.img} alt={item.alt} style={{ boxShadow: activeIndex === index ? '0 10px 30px rgba(0,0,0,0.8)' : 'none', transition: 'box-shadow 0.6s' }} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="timeline-media left">
                                            <img src={item.img} alt={item.alt} style={{ boxShadow: activeIndex === index ? '0 10px 30px rgba(0,0,0,0.8)' : 'none', transition: 'box-shadow 0.6s' }} />
                                        </div>
                                        <div className="timeline-content right">
                                            <h3>{item.title}</h3>
                                            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </section>
            </div>
        </main>
    );
};

export default Timeline;
