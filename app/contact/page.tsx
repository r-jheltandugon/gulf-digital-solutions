import ContactForm from "@/components/sections/contact-form";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}