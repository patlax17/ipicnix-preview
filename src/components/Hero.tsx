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
                        Step into a world <br />
                        <span className={styles.italic}>curated exclusively for you</span>
                    </h1>
                </div>

                <div className={styles.logoWrapper}>
                    <img src="/logo.png" alt="iPicnix Signature" className={styles.logoMark} />
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>Explore</span>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    );
}
