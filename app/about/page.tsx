import {
  AboutHero,
  Mission,
  AboutCTA,
} from "@/components/sections/about";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import WhatsAppButton from "@/components/ui/whatsapp-button";
import CallButton from "@/components/ui/call-button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Gulf Digital Solutions",
  
  description:
    "Learn about Gulf Digital Solutions and our website design and digital advertising services in the UAE.",
    
  alternates: {
    canonical: "/about",
  },
};

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