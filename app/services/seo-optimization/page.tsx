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
  title: "SEO Optimization Services in Abu Dhabi, Dubai, UAE",
  
  description:
    "Professional SEO optimization services in Abu Dhabi, Dubai, and across the UAE for businesses.",
    
  alternates: {
    canonical: "/services/seo-optimization",
  },
};

export default function SEOOptimizationPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              SEO Optimization Services in UAE
            </h1>

            <div 
              className="relative w-full overflow-hidden rounded-3xl shadow-lg mt-8"
            >
              <Image
                src="/seo.png"
                alt="SEO Optimization Services in Abu Dhabi, Dubai, UAE"
                width={1200}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              Improve your Google rankings and attract more customers in Abu Dhabi, Dubai, and across the UAE with professional SEO strategies that increase visibility and organic traffic.
            </p>
          </div>
        </section>

        {/* WHY SEO MATTERS */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Why SEO Is Important for Your Business
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Most customers search on Google before choosing a service. If your business is not ranking on the first page, you are losing potential clients to competitors.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Our SEO services are designed to help UAE businesses improve visibility, increase website traffic, and generate consistent leads without relying only on paid ads.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              What Our SEO Service Includes
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Keyword research for UAE market</li>
              <li>✔ On-page SEO optimization</li>
              <li>✔ Technical SEO improvements</li>
              <li>✔ Local SEO for Abu Dhabi & Dubai</li>
              <li>✔ Google indexing & sitemap setup</li>
              <li>✔ Performance optimization for ranking</li>
            </ul>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Benefits of SEO for Your Business
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              SEO helps your business appear in front of customers who are already searching for your services. This leads to higher-quality leads, better conversion rates, and long-term organic growth.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Unlike paid ads, SEO continues to bring traffic even after the initial optimization work is done.
            </p>
          </div>
        </section>

        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Schema
          data={serviceSchema({
            title: "SEO Optimization Services in Abu Dhabi, Dubai, UAE",

            description:
              "Professional SEO optimization services in Abu Dhabi, Dubai, and across the UAE for businesses.",

            path: "/services/seo-optimization",

            areaServed: "Abu Dhabi, Dubai, UAE, Philippines, Eastern Samar, Tacloban City, Borongan City, Salcedo, Guiuan, Mercedes",
          })}
        />
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}