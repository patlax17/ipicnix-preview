import styles from './Collections.module.css';

const collections = [
    { name: "The Spark", price: "$1,500", features: ["Intimate Room Setup", "Premium Champagne", "Rose Petal Pathway", "Ambient Lighting"] },
    { name: "The Flame", price: "$2,800", features: ["Full Suite Transformation", "Live Acoustic Musician", "Private Chef Dining", "Floral Installation"] },
    { name: "The Elite", price: "Custom", features: ["Penthouse Buyout", "Helicopter Arrival", "Complete Photography Unit", "Bespoke Itinerary"], isElite: true },
];

export default function Collections() {
    return (
        <section className={styles.section} id="collections">
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className="subtitle">Invest in Memory</p>
                    <h2 className="display-text">Signature Collections</h2>
                </div>

                <div className={styles.grid}>
                    {collections.map((col, i) => (
                        <div key={i} className={`${styles.card} ${col.isElite ? styles.cardElite : ''}`}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.tierName}>{col.name}</h3>
                                <p className={styles.price}>{col.price}</p>
                            </div>
                            <ul className={styles.features}>
                                {col.features.map((f, j) => <li key={j} className={styles.feature}>{f}</li>)}
                            </ul>
                            <button className={`${styles.button} ${col.isElite ? styles.buttonElite : ''}`}>
                                {col.isElite ? 'Request Consultation' : 'Reserve Date'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
