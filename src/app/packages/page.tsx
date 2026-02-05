import Navigation from "@/components/Navigation";
import Collections from "@/components/Collections";

export default function PackagesPage() {
    return (
        <>
            <Navigation />
            <div style={{ paddingTop: '100px' }}>
                <Collections />
            </div>
        </>
    );
}
