import styles from './Introduction.module.css';

export default function Introduction() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className="display-text">Create Unforgettable Moments</h2>
                <p className={styles.text}>
                    At iPicnix, we transform ordinary spaces into unforgettable experiences. Our decor packages are perfect for celebrating birthdays, anniversaries, proposals, and intimate celebrations.
                </p>
            </div>
        </section>
    );
}
