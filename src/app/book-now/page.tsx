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
                    maxWidth: '1000px',
                    height: '700px',
                    margin: '0 auto',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: '#fff'
                }}>
                    {/* Calendly Inline Widget - Demo */}
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/acmesales?hide_gdpr_banner=1"
                        style={{ minWidth: '320px', height: '700px' }}
                    />
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                </div>

                <p style={{ marginTop: '2rem', opacity: 0.7, padding: '1rem' }}>
                    Prefer to book by phone/email? (917) 300-8585 • ipicnix@gmail.com
                </p>
            </section>
        </>
    );
}
