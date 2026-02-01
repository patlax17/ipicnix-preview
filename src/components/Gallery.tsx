import styles from './Gallery.module.css';

const moments = [
    { id: 1, title: "Sultry", image: "/gallery_sultry.png", desc: "A touch of midnight." },
    { id: 2, title: "Festive", image: "/gallery_festive.png", desc: "Celebration redefined." },
    { id: 3, title: "Elite", image: "/gallery_sultry.png", desc: "The height of luxury." },
    { id: 4, title: "Intimate", image: "/hero_bg.png", desc: "Just for two." },
];

export default function Gallery() {
    return (
        <section className={styles.section} id="gallery">
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className="subtitle">Curated Moments</p>
                    <h2 className="display-text">The Collection</h2>
                </div>
            </div>

            <div className={styles.galleryWrapper}>
                <div className={styles.galleryTrack}>
                    {moments.map((moment) => (
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
