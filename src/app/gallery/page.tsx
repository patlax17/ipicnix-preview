import Navigation from "@/components/Navigation";
import GallerySection from "@/components/GallerySection";

export default function GalleryPage() {
    const romanticImages = [
        { id: 1, title: "Sultry Night", image: "/gallery_sultry.png", desc: "For the perfect night in." },
        { id: 2, title: "Rose Path", image: "/gallery_festive.png", desc: "Walking on petals." },
        { id: 3, title: "Candlelight", image: "/hero_bg.png", desc: "Soft ambient glow." },
        { id: 4, title: "Heart of Roses", image: "/gallery_sultry.png", desc: "Symbol of love." },
    ];

    const birthdayImages = [
        { id: 1, title: "Balloon Bliss", image: "/gallery_festive.png", desc: "Celebrate in style." },
        { id: 2, title: "Golden Age", image: "/hero_bg.png", desc: "Timeless celebration." },
        { id: 3, title: "Partyscape", image: "/gallery_sultry.png", desc: "A room transformed." },
    ];

    const picnicImages = [
        { id: 1, title: "Central Park", image: "/hero_bg.png", desc: "Nature and luxury." },
        { id: 2, title: "Beachside", image: "/gallery_sultry.png", desc: "Sunset views." },
        { id: 3, title: "Indoor Oasis", image: "/gallery_festive.png", desc: "Comfort meets style." },
    ];

    return (
        <>
            <Navigation />
            <div style={{ paddingTop: '100px' }}>
                <h1 className="display-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>Gallery</h1>
                <GallerySection title="Romantic Decorations" items={romanticImages} />
                <GallerySection title="Birthday Decorations" items={birthdayImages} />
                <GallerySection title="Luxury Picnics" items={picnicImages} />
            </div>
        </>
    );
}
