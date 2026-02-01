import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import Gallery from "@/components/Gallery";
import WallOfLove from "@/components/WallOfLove";
import Collections from "@/components/Collections";
import Concierge from "@/components/Concierge";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Narrative />
      <Gallery />
      <WallOfLove />
      <Collections />
      <Concierge />
    </>
  );
}
