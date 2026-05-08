import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Benefits from "@/components/sections/benefits";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}