"use client";
import React, { useEffect, useRef } from 'react';
import styles from './Narrative.module.css';

export default function Narrative() {
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        }, { threshold: 0.3, rootMargin: "-100px" });

        textRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const phrases = [
        { title: "The Anticipation", text: "The soft snap of a clasp. A breath held in the quiet dark. The feeling that something extraordinary is about to unfold." },
        { title: "The Reveal", text: "Velvet that yields under fingertips. The scent of roses drifting through the air. Light dancing off crystal, etching shadows into memory." },
        { title: "The Memory", text: "A moment suspended in time. Curated not just to be seen, but to be felt. An alluring escape designed for two." }
    ];

    return (
        <section className={styles.container} id="narrative">
            <div className={styles.fixedBackground}>
                {/* Floating elements could go here */}
                <div className={styles.petal}></div>
            </div>
            <div className={styles.content}>
                {phrases.map((phrase, i) => (
                    <div
                        key={i}
                        className={styles.phraseGroup}
                        ref={(el) => { textRefs.current[i] = el; }}
                    >
                        <h2 className={`${styles.heading} display-text`}>{phrase.title}</h2>
                        <p className={styles.text}>{phrase.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
