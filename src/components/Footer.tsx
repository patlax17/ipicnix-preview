import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <span className={styles.brand}>iPicnix</span>
                    <p className={styles.tagline}>
                        Elevating intimate celebrations with rooms designed to create unforgettable memories.
                    </p>
                </div>

                <div className={styles.details}>
                    <p>(917) 300-8585</p>
                    <p>ipicnix@gmail.com</p>
                    <p>New York, NY</p>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} iPicnix. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
