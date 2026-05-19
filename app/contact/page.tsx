import ContactForm from "@/components/sections/contact-form";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import WhatsAppButton from "@/components/ui/whatsapp-button";
import CallButton from "@/components/ui/call-button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Gulf Digital Solutions",
  
  description:
    "Get in touch with Gulf Digital Solutions for all your website design and digital advertising needs in the UAE.",
    
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}