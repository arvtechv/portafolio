import HeroSection from "../components/HeroSection";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0a0a] text-white min-h-screen">
        <HeroSection />
        {/* Aquí luego añadiremos About, Skills, Portfolio, Contact */}
      </main>
    </>
  );
}
