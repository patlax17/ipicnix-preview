"use client";
import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
    variant?: 'header' | 'hero' | 'mobile';
    className?: string;
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
    if (variant === 'header') {
        return (
            <div className={`${styles.headerLogo} ${className}`}>
                <span className={styles.wordmark}>IPICNIX</span>
            </div>
        );
    }

    if (variant === 'mobile') {
        return (
            <div className={`${styles.mobileLogo} ${className}`}>
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 25 Q20 15, 30 15 Q40 15, 40 25 Q40 35, 30 35 Q20 35, 20 25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        className={styles.monogramPath}
                    />
                    <text x="30" y="32" textAnchor="middle" className={styles.monogramText}>
                        ip
                    </text>
                </svg>
            </div>
        );
    }

    // Hero variant - refined monogram with floral elements
    return (
        <div className={`${styles.heroLogo} ${className}`}>
            <div className={styles.logoGlass}>
                <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.logoSvg}
                >
                    {/* Floral branch - left */}
                    <path
                        d="M 60 100 Q 50 90, 45 85 M 50 95 Q 45 90, 42 87 M 55 90 L 50 85"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        className={styles.floralLeft}
                    />
                    {/* Small leaves on left branch */}
                    <circle cx="45" cy="85" r="2" fill="currentColor" opacity="0.6" className={styles.leaf} />
                    <circle cx="42" cy="87" r="1.5" fill="currentColor" opacity="0.5" className={styles.leaf} />
                    <circle cx="50" cy="85" r="1.5" fill="currentColor" opacity="0.5" className={styles.leaf} />

                    {/* Main monogram circle */}
                    <circle
                        cx="100"
                        cy="100"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        className={styles.mainCircle}
                    />

                    {/* "ip" script monogram */}
                    <text
                        x="100"
                        y="115"
                        textAnchor="middle"
                        className={styles.scriptMonogram}
                    >
                        ip
                    </text>

                    {/* Floral branch - right */}
                    <path
                        d="M 140 100 Q 150 90, 155 85 M 150 95 Q 155 90, 158 87 M 145 90 L 150 85"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        className={styles.floralRight}
                    />
                    {/* Small leaves on right branch */}
                    <circle cx="155" cy="85" r="2" fill="currentColor" opacity="0.6" className={styles.leaf} />
                    <circle cx="158" cy="87" r="1.5" fill="currentColor" opacity="0.5" className={styles.leaf} />
                    <circle cx="150" cy="85" r="1.5" fill="currentColor" opacity="0.5" className={styles.leaf} />
                </svg>
            </div>
        </div>
    );
}
