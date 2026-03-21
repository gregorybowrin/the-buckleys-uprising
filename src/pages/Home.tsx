import React, { useEffect, useState } from 'react';
import Hero from '../components/home/Hero';
import StorySection from '../components/home/StorySection';
import CardsSection from '../components/home/CardsSection';

const collageImages = [
    { src: "/buckleys-uprising-estate-workers.jpg", alt: "Estate workers 1" },
    { src: "/buckelys-uprising-estate-workers2.jpg", alt: "Estate workers 2" },
    { src: "/buckelys-uprising-estate-workersb.jpg", alt: "Estate workers 3" },
    { src: "/buckelys-uprising-estate-workers3.jpg", alt: "Estate workers 4" }
];

const Home: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <StorySection />
            <div className="collage-separator">
                <div className="collage-track">
                    {[...collageImages, ...collageImages].map((img, index) => (
                        <img 
                            key={index} 
                            src={img.src} 
                            alt={img.alt} 
                            onClick={() => setSelectedImage(img.src)}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>
            </div>
            <CardsSection />

            {/* Fullscreen Image Modal */}
            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <button className="image-modal-close" onClick={() => setSelectedImage(null)} aria-label="Close modal">&times;</button>
                    <img 
                        src={selectedImage} 
                        alt="Enlarged historical view" 
                        className="image-modal-content" 
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </main>
    );
};

export default Home;
