import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

import ServicesSection from "@/components/sections/services";
import FAQ from "@/components/sections/faq";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import CallButton from "@/components/ui/call-button";
import Image from "next/image";

import Schema from "@/components/seo/schema";
import { serviceSchema } from "@/lib/schema";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design, Web Development, Web Advertising & Mobile App Development Services in Abu Dhabi, Dubai, UAE",
  
  description:
    "Professional website design, web development, web advertising, and mobile app development services for businesses in Abu Dhabi, Dubai, and across the UAE. ",
    
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium text-blue-600">
                Professional Digital Services in UAE
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                Website Design & Web Advertising That Grows Your Business
              </h1>

              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                We help businesses in Abu Dhabi, Dubai, and across the UAE build
                high-performance websites, improve Google visibility, and
                generate real customer inquiries.
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Get a Free Consultation
                </a>

                <a
                  href="/portfolio"
                  className="rounded-2xl border px-6 py-3 font-semibold transition hover:scale-105"
                >
                  View Work
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* VALUE STATEMENT */}
        <section className="border-y py-16">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">
              
              {/* TEXT */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Built for Real Business Growth — Not Just Design
                </h2>

                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                  Every website we build is focused on performance, lead generation,
                  and converting visitors into paying customers. We combine design,
                  SEO, and user experience to help your business stand out in a
                  competitive UAE market.
                </p>

                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                  Our solutions are tailored for businesses in Abu Dhabi, Dubai,
                  and across the UAE that want real digital results — not just a
                  basic website.
                </p>
              </div>

              {/* IMAGE */}
              <div className="relative w-full overflow-hidden rounded-3xl border shadow-lg">
                <Image
                  src="/value-section.png"
                  alt="Digital growth and website design for UAE businesses"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>

            </div>
          </Container>
        </section>

        {/* SERVICES */}
        <section className="py-24">
          <ServicesSection />
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">
                Why Businesses Choose Us
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border p-6">
                <h3 className="font-semibold">Fast & Modern Websites</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Optimized for speed, mobile, and user experience.
                </p>
              </div>

              <div className="rounded-3xl border p-6">
                <h3 className="font-semibold">Local UAE Focus</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Targeted for Abu Dhabi, Dubai, and UAE businesses.
                </p>
              </div>

              <div className="rounded-3xl border p-6">
                <h3 className="font-semibold">Lead Generation Focus</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Designed to turn visitors into WhatsApp inquiries.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* PROCESS */}
        <section className="border-t py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">How We Work</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1</div>
                <h3 className="mt-2 font-semibold">Consultation</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  We understand your business goals.
                </p>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <h3 className="mt-2 font-semibold">Design & Build</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  We create your modern website.
                </p>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <h3 className="mt-2 font-semibold">Launch & Optimize</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  We help you attract customers.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24">
          <Container>
            <FAQ />
          </Container>
        </section>

        {/* CTA SECTION */}
        <section className="py-24">
          <Container>
            <div className="rounded-3xl border bg-blue-600 p-12 text-center text-white">
              <h2 className="text-3xl font-bold">
                Ready to Grow Your Business Online?
              </h2>

              <p className="mt-4 text-white/80">
                Get a professional website designed to help businesses in Abu Dhabi, Dubai, and across the UAE attract more customers online.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-2xl bg-white px-6 py-3 font-semibold text-blue-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Container>
        </section>

        <Schema
          data={serviceSchema({
            title: "Gulf Digital Solutions - Website Design, Mobile Development & Web Advertising in UAE",

            description:
              "Professional website design, mobile-friendly development, SEO optimization, and web advertising services for businesses in Abu Dhabi, Dubai, and across the UAE.",

            path: "/services",

            areaServed: "Abu Dhabi, Dubai, United Arab Emirates, Philippines, Eastern Samar, Tacloban City, Borongan City, Salcedo, Guiuan, Mercedes",
          })}
        />
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}