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
import CallButton from "@/components/ui/call-button";

import Schema from "@/components/seo/schema";
import { homeSchema } from "@/lib/schema";

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
        <Schema data={homeSchema()} />
      </main>

      <Footer />

      <WhatsAppButton />
      <CallButton />
    </>
  );
}