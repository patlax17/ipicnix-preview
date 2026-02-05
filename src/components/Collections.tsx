import styles from './Collections.module.css';

const collections = [
    {
        name: "Crushin’ On You",
        features: [
            "3,500 silk rose petals styled throughout the room",
            "Ribbon wrapped pillow",
            "Custom balloon banner",
            "25+ floating balloons",
            "Rose petal heart or personalized name design",
            "24 LED tea-light candles"
        ],
        link: "/book-now"
    },
    {
        name: "Cloud Nine",
        features: [
            "4,500 silk rose petals styled throughout the room",
            "Ribbon wrapped pillow",
            "Custom balloon banner",
            "30+ floating balloons",
            "Rose petal heart or personalized name design",
            "50 LED tea-light candles",
            "16 foil heart balloons",
            "48\" foil teddy bear",
            "Two dozen fresh roses"
        ],
        link: "/book-now"
    },
    {
        name: "Sweet Love",
        features: [
            "9,000 silk rose petals styled throughout the room",
            "Ribbon wrapped pillow",
            "Custom balloon banner",
            "36+ floating balloons",
            "Rose petal heart or personalized name design",
            "75 LED tea-light candles",
            "Premium champagne or wine (21+)",
            "Premium chocolates",
            "Fresh fruit arrangement",
            "Fresh roses styled in glass vases",
            "Next day clean up"
        ],
        link: "/book-now"
    },
];

export default function Collections() {
    return (
        <section className={styles.section} id="collections">
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className="subtitle">February 13, 2026 - February 16, 2026</p>
                    <h2 className="display-text">Valentine’s Weekend Packages</h2>
                </div>

                <div className={styles.grid}>
                    {collections.map((col, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.tierName}>{col.name}</h3>
                                {/* Price removed as per new content */}
                            </div>
                            <ul className={styles.features}>
                                {col.features.map((f, j) => <li key={j} className={styles.feature}>{f}</li>)}
                            </ul>
                            <a href="/book-now" className={styles.button}>
                                Book Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
