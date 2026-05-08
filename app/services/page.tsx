import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-4xl font-bold">
            Our Services
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We help businesses grow online through modern digital solutions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              Business Websites
            </div>
            <div className="rounded-2xl border p-6">
              SEO Optimization
            </div>
            <div className="rounded-2xl border p-6">
              WhatsApp Integration
            </div>
            <div className="rounded-2xl border p-6">
              Branding & Design
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}