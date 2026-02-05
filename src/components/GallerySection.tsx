import styles from './Gallery.module.css';

interface GallerySectionProps {
    title: string;
    items: { id: number; title: string; image: string; desc: string }[];
}

export default function GallerySection({ title, items }: GallerySectionProps) {
    return (
        <section className={styles.section} style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className="subtitle">Curated Moments</p>
                    <h2 className="display-text">{title}</h2>
                </div>
            </div>

            <div className={styles.galleryWrapper}>
                <div className={styles.galleryTrack}>
                    {items.map((moment) => (
                        <div key={moment.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={moment.image} alt={moment.title} className={styles.image} />
                                <div className={styles.overlay}>
                                    <span className={styles.cardTitle}>{moment.title}</span>
                                </div>
                            </div>
                            <div className={styles.caption}>
                                <p>{moment.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
