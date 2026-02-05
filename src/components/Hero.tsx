import Logo from './Logo';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundWrapper}>
                <video
                    className={styles.bgVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/hero_bg.png"
                >
                    <source src="/hero_video.mp4" type="video/mp4" />
                </video>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.headlineWrapper}>
                    <h1 className={styles.headline}>
                        Luxury Room Decorations
                    </h1>
                    <p className={styles.subheadline}>
                        Luxury room styling & intimate experiences
                    </p>
                    <a href="/book-now" className={styles.ctaButton}>Book Now</a>
                </div>

                <div className={styles.logoWrapper}>
                    <Logo variant="hero" />
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>Explore</span>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    );
}
