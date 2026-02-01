"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>iPicnix</div>
                <div className={styles.links}>
                    <a href="#narrative" className={styles.link}>The Journey</a>
                    <a href="#gallery" className={styles.link}>Moments</a>
                    <a href="#collections" className={styles.link}>Collections</a>
                    <a href="#concierge" className={styles.ctaButton}>Concierge</a>
                </div>
            </div>
        </nav>
    );
}
