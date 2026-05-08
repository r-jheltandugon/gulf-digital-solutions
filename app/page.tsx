import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import CTA from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <Services />
        <CTA />
      </main>

      <Footer />
    </>
  );
}