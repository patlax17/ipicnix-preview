"use client";
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.container}>
                    <Logo variant="header" />

                    {/* Desktop Navigation */}
                    <div className={styles.desktopLinks}>
                        <a href="/#narrative" className={styles.link}>The Journey</a>
                        <a href="/#gallery" className={styles.link}>Moments</a>
                        <a href="/#collections" className={styles.link}>Collections</a>
                        <a href="/#concierge" className={styles.ctaButton}>Concierge</a>
                    </div>

                    {/* Mobile: Concierge Button + Hamburger */}
                    <div className={styles.mobileControls}>
                        <a href="/#concierge" className={styles.mobileCtaButton}>Concierge</a>
                        <button
                            className={styles.hamburger}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={styles.hamburgerLine}></span>
                            <span className={styles.hamburgerLine}></span>
                            <span className={styles.hamburgerLine}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <button
                    className={styles.closeButton}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <span className={styles.closeLine}></span>
                    <span className={styles.closeLine}></span>
                </button>
                <div className={styles.mobileMenuContent}>
                    <a href="/#narrative" className={styles.mobileLink} onClick={handleLinkClick}>
                        The Journey
                    </a>
                    <a href="/#gallery" className={styles.mobileLink} onClick={handleLinkClick}>
                        Moments
                    </a>
                    <a href="/#collections" className={styles.mobileLink} onClick={handleLinkClick}>
                        Collections
                    </a>
                    <a href="/#concierge" className={styles.mobileLink} onClick={handleLinkClick}>
                        Concierge
                    </a>
                </div>
            </div>
        </>
    );
}
