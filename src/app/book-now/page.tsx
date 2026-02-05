import Navigation from "@/components/Navigation";

export default function BookNowPage() {
    return (
        <>
            <Navigation />
            <section style={{
                paddingTop: '150px',
                paddingBottom: '100px',
                textAlign: 'center',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1 className="display-text" style={{ marginBottom: '3rem' }}>Valentine’s Bookings</h1>

                <div style={{
                    width: '100%',
                    maxWidth: '800px',
                    height: '800px',
                    margin: '0 auto',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: '#fff'
                }}>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc73kvyAciRFzgIjMSniiWkTwUpwp19CLQByXOM1fjSGVTgvQ/viewform?embedded=true"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        title="Book Now"
                    >
                        Loading…
                    </iframe>
                </div>

                <p style={{ marginTop: '2rem', opacity: 0.7, padding: '1rem' }}>
                    Prefer to book by phone/email? (917) 300-8585 • ipicnix@gmail.com
                </p>
            </section>
        </>
    );
}
