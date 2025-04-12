import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import PromoBar from "@/components/promo-bar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PromoBar />
      <Navbar />
      <HeroSection />
    </main>
  );
}
