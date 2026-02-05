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
                    height: '600px',
                    background: 'rgba(255,255,255,0.05)',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed rgba(255,255,255,0.2)'
                }}>
                    <p style={{ opacity: 0.5 }}>Booking Form Embed (Client will provide link)</p>
                </div>

                <p style={{ marginTop: '2rem', opacity: 0.7, padding: '1rem' }}>
                    Prefer to book by phone/email? (917) 300-8585 • ipicnix@gmail.com
                </p>
            </section>
        </>
    );
}
