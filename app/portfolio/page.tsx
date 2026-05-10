import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

import WhatsAppButton from "@/components/ui/whatsapp-button";
import CallButton from "@/components/ui/call-button";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-4xl font-bold">
            Our Work
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Examples of digital solutions we build for businesses.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="h-40 rounded-2xl border" />
            <div className="h-40 rounded-2xl border" />
            <div className="h-40 rounded-2xl border" />
          </div>
        </Container>
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}