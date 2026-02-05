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
    }, []);

    // Handle route changes
    useEffect(() => {
        if (audioRef.current) {
            if (isBookNow) {
                // Determine if we should pause
                audioRef.current.pause();
                // We keep isPlaying state as is technically, or visual indicator should show "muted/disabled"?
                // If we want to resume automatically when leaving book-now IF it was playing, we need to track "userIntentPlaying".
                // For simplicity, if we go to disabled page, we pause. 
                // If we go back, user might need to press play? 
                // Prompt says: "If user pauses, keep it paused". "Persist play/pause state across navigation if feasible".
                // If the SYSTEM pauses it because of route, we should probably resume it if valid.
            } else if (isPlaying && userHasInteracted) {
                audioRef.current.play().catch(e => console.log("Playback failed", e));
            }
        }
    }, [pathname, isBookNow, isPlaying, userHasInteracted]);

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
