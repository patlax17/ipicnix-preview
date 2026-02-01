"use client";
import { useRef, useState } from 'react';
import styles from './WallOfLove.module.css';

const testimonials = [
    {
        video: "/IMG_6868.mp4",
        quote: "They created a universe just for us. It wasn't just decoration; it was pure emotion.",
        author: "Sarah & James"
    },
    {
        video: "/IMG_9142.mp4",
        quote: "Every detail spoke to our story. The moment we walked in, we knew this was beyond anything we imagined.",
        author: "Marcus & Nia"
    },
    {
        video: "/IMG_9276.mp4",
        quote: "iPicnix didn't just set a scene—they crafted a memory we'll carry forever.",
        author: "Olivia & Daniel"
    },
];

export default function WallOfLove() {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [mutedStates, setMutedStates] = useState([true, true, true]);

    const handleVideoClick = (index: number) => {
        const video = videoRefs.current[index];
        if (!video) return;

        const newMutedStates = [...mutedStates];
        newMutedStates[index] = !newMutedStates[index];
        setMutedStates(newMutedStates);
        video.muted = newMutedStates[index];
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className="subtitle">Real Steps</p>
                    <h2 className="display-text">Echoes of Delight</h2>
                </div>
                <div className={styles.grid}>
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className={styles.card}>
                            <div
                                className={styles.videoWrapper}
                                onClick={() => handleVideoClick(i)}
                            >
                                <video
                                    ref={(el) => { videoRefs.current[i] = el; }}
                                    className={styles.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={testimonial.video} type="video/mp4" />
                                </video>
                                {mutedStates[i] && (
                                    <div className={styles.soundIndicator}>
                                        <span className={styles.soundIcon}>🔇</span>
                                        <span className={styles.soundText}>Tap to unmute</span>
                                    </div>
                                )}
                            </div>
                            <p className={styles.quote}>"{testimonial.quote}"</p>
                            <p className={styles.author}>— {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
