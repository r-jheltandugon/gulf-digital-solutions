import {
  AboutHero,
  Mission,
  AboutCTA,
} from "@/components/sections/about";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import WhatsAppButton from "@/components/ui/whatsapp-button";
import CallButton from "@/components/ui/call-button";

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <AboutHero />
    <Mission />
    <AboutCTA />
    <Footer />
    <WhatsAppButton />
    <CallButton />
    </>
);
}