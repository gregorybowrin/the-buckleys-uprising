import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Show the audio player after a slight delay on initial load to avoid popping in instantly
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Create a new audio element on mount
    useEffect(() => {
        const audio = new Audio('/carry_me_through_the_river.mp3');
        audio.loop = true;
        audio.volume = 1.0; // Max volume so it can be heard on all speakers
        audioRef.current = audio;

        return () => {
            audio.pause();
            audio.src = '';
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            // Browsers require user interaction before playing audio
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.error("Audio playback failed. Please ensure you have placed an 'ambient.mp3' file in the public/ directory.", error);
                    setIsPlaying(false);
                });
            }
        }
    };

    return (
        <button 
            className={`audio-toggle ${isVisible ? 'visible' : ''} ${isPlaying ? 'playing' : ''}`}
            onClick={togglePlay}
            aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
            title={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
        >
            <div className="audio-bars">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <span className="audio-label">{isPlaying ? 'SOUND ON' : 'SOUND OFF'}</span>
        </button>
    );
};

export default AudioPlayer;
