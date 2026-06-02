import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import CallButton from "@/components/ui/call-button";
import Link from "next/link";
import FAQ from "@/components/sections/faq";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import Image from "next/image";

import Schema from "@/components/seo/schema";
import { serviceSchema } from "@/lib/schema";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Advertising Services in Abu Dhabi, Dubai, UAE",
  
  description:
    "Professional web advertising services in Abu Dhabi, Dubai, and across the UAE for businesses.",
    
  alternates: {
    canonical: "/services/website-advertising-dubai",
  },
};

export default function WebsiteAdvertisingDubaiPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Web Advertising Services in Dubai
            </h1>

            <div 
              className="relative w-full overflow-hidden rounded-3xl shadow-lg mt-8"
            >
              <Image
                src="/dubai-web-advertising.png"
                alt="Web Advertising Services in Dubai"
                width={1200}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              We help businesses in Dubai grow faster with targeted web advertising strategies that generate leads, calls, and WhatsApp inquiries.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Grow Your Business in Dubai with Online Advertising
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Dubai is one of the most competitive business markets in the UAE. Simply having a website is not enough — you need strategic advertising that puts your business in front of the right customers.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Our web advertising solutions are designed to attract high-quality leads who are actively searching for your services in Dubai.
            </p>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Our Web Advertising Strategy
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Targeted Dubai audience campaigns</li>
              <li>✔ High-converting landing page strategy</li>
              <li>✔ SEO + traffic integration system</li>
              <li>✔ WhatsApp lead generation setup</li>
              <li>✔ Conversion tracking and optimization</li>
              <li>✔ Mobile-first advertising structure</li>
            </ul>
          </div>
        </section>

        {/* WHY DUBAI */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Why Dubai Businesses Need Advertising
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              In Dubai, competition is extremely high across all industries. Businesses that invest in digital advertising consistently outperform those relying only on organic traffic.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              A strong advertising strategy ensures your business stays visible and consistently generates new leads.
            </p>
          </div>
        </section>

        {/* INTERNAL SEO LINKS */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Related Services
            </h2>

            <div className="mt-6 flex flex-col gap-3 text-blue-600">
              <Link href="/services/website-advertising">
                → Web Advertising UAE
              </Link>

              <Link href="/services/website-advertising-abu-dhabi">
                → Web Advertising Abu Dhabi
              </Link>

              <Link href="/services/seo-optimization">
                → SEO Optimization Services
              </Link>
            </div>
          </div>
        </section>

        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Schema
          data={serviceSchema({
            title: "Web Advertising Dubai",

            description:
              "Professional web advertising services in Dubai for businesses looking to increase leads and visibility.",

            path: "/services/website-advertising-dubai",

            areaServed: "Dubai",
          })}
        />
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}