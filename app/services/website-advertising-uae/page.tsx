import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import CallButton from "@/components/ui/call-button";
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
    "Professional web advertising services across the UAE for businesses.",
    
  alternates: {
    canonical: "/services/website-advertising-uae",
  },
};

export default function WebAdvertisingPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Web Advertising Services in UAE
            </h1>

            <div 
              className="relative w-full overflow-hidden rounded-3xl shadow-lg mt-8"
            >
              <Image
                src="/uae-web-advertising.png"
                alt="Web Advertising Services in UAE"
                width={1200}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              We help businesses in Abu Dhabi, Dubai, and across the UAE attract more customers through strategic web advertising and high-converting online campaigns.
            </p>
          </div>
        </section>

        {/* WHY WEB ADVERTISING */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Why Web Advertising Matters
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              In today’s competitive UAE market, having a website is not enough. You need targeted advertising that brings real visitors who are ready to buy your services.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Web advertising helps your business appear in front of the right audience at the right time — increasing leads, calls, and WhatsApp inquiries.
            </p>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              What Our Web Advertising Includes
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Targeted online advertising strategy</li>
              <li>✔ Landing page optimization for conversions</li>
              <li>✔ SEO + paid traffic integration</li>
              <li>✔ WhatsApp lead generation campaigns</li>
              <li>✔ Local UAE audience targeting</li>
              <li>✔ Performance tracking and optimization</li>
            </ul>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Business Benefits
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Web advertising is the fastest way to grow your business online. Instead of waiting for organic traffic, you immediately reach customers who are actively searching for your services.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              This is especially powerful for service-based businesses in Dubai and Abu Dhabi where competition is high and visibility is everything.
            </p>
          </div>
        </section>

        {/* WHO IS IT FOR */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Who Needs This Service
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Cleaning companies</li>
              <li>✔ Real estate agencies</li>
              <li>✔ Construction businesses</li>
              <li>✔ Restaurants & cafes</li>
              <li>✔ Clinics & professional services</li>
              <li>✔ Startups and SMEs in UAE</li>
            </ul>
          </div>
        </section>

        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Schema
          data={serviceSchema({
            title: "Web Advertising UAE",

            description:
              "Professional web advertising services in the UAE for businesses looking to increase leads and visibility.",

            path: "/services/website-advertising-uae",

            areaServed: "Abu Dhabi, Dubai, UAE",
          })}
        />
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}