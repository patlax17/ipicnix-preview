"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './BackgroundMusic.module.css';

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [userHasInteracted, setUserHasInteracted] = useState(false);
    const pathname = usePathname();

    // Pages where music is allowed
    const isMusicAllowed = ['/', '/packages', '/gallery'].includes(pathname) || pathname === '/packages/' || pathname === '/gallery/'; // Loose matching

    // Check if we are specifically on book-now to disable
    const isBookNow = pathname?.includes('book-now');

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.15; // Low volume 10-20%
        }

        const playAudio = async () => {
            if (audioRef.current && !isBookNow) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    setUserHasInteracted(true);
                } catch (err) {
                    console.log("Autoplay blocked by browser. Waiting for interaction.");
                    setIsPlaying(false);
                }
            }
        };

        playAudio();

        // Fallback: If autoplay is blocked, play on first interaction
        const handleInteraction = () => {
            if (audioRef.current && audioRef.current.paused && !isBookNow) {
                audioRef.current.play().catch(e => console.error("Play failed:", e));
                setIsPlaying(true);
                setUserHasInteracted(true);
            }
            // Remove listeners after first interaction attempt
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, []);

    // Handle route changes
    useEffect(() => {
        if (audioRef.current) {
            if (isBookNow) {
                audioRef.current.pause();
                // We don't change isPlaying to false here visually if we want it to 'resume' when they leave? 
                // But let's keep visual sync: if we pause, we pause.
                setIsPlaying(false);
            } else if (userHasInteracted) {
                // Resume if we have interacted before
                audioRef.current.play().catch(e => console.log("Playback failed", e));
                setIsPlaying(true);
            }
        }
    }, [pathname, isBookNow, userHasInteracted]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(e => {
                console.error("Audio play failed:", e);
            });
            setIsPlaying(true);
            setUserHasInteracted(true);
        }
    };

    // If on a disabled page, do not render the controls or play audio
    // But we keep the component mounted so audio element exists (just paused)
    // Actually if we don't render, audio might stop? 
    // Return null renders nothing but hooks run. 
    // But if we want to "persist", we keep it rendered but hidden or just paused.
    // Spec says "Music disabled on: Book Now".

    // If on a disabled page, we hide the controls but keep component mounted to preserve state/logic
    // We handle the pausing via the useEffect above

    return (
        <div className={`${styles.container} ${isBookNow ? styles.hidden : ''}`}>
            <audio
                ref={audioRef}
                src="/audio/ipicnix-ambient.mp3"
                loop
                autoPlay
                preload="auto"
            />
            <button
                onClick={togglePlay}
                className={styles.button}
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? (
                    <svg viewBox="0 0 24 24" className={styles.icon}>
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" className={styles.icon}>
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
