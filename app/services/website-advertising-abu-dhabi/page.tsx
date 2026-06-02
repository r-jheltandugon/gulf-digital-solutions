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
  title: "Web Advertising Services in Abu Dhabi",
  
  description:
    "Professional web advertising services in Abu Dhabi for UAE businesses.",
    
  alternates: {
    canonical: "/services/website-advertising-abu-dhabi",
  },

  openGraph: {
    title: "Web Advertising Services in Abu Dhabi",
    description:
      "Professional web advertising services in Abu Dhabi for businesses in the UAE.",
    url: "/services/website-advertising-abu-dhabi",
    siteName: "Gulf Digital Solutions",
    type: "website",
  },
};

export default function WebsiteAdvertisingAbuDhabiPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Web Advertising Services in Abu Dhabi
            </h1>

            <div 
              className="relative w-full overflow-hidden rounded-3xl shadow-lg mt-8"
            >
              <Image
                src="/abu-dhabi-web-advertising.png"
                alt="Web Advertising Services in Abu Dhabi"
                width={1200}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              We help businesses in Abu Dhabi attract more customers through targeted web advertising strategies designed to increase leads, calls, and WhatsApp inquiries.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Grow Your Business in Abu Dhabi with Digital Advertising
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Abu Dhabi is a strong and competitive business hub in the UAE, with many companies investing in digital transformation and online visibility.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Without proper web advertising, your business risks being invisible to potential customers searching online for your services.
            </p>
          </div>
        </section>

        {/* STRATEGY */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Our Web Advertising Strategy
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Targeted Abu Dhabi audience campaigns</li>
              <li>✔ High-converting landing page optimization</li>
              <li>✔ SEO and paid traffic integration</li>
              <li>✔ WhatsApp and call lead generation</li>
              <li>✔ Conversion tracking and performance analysis</li>
              <li>✔ Mobile-first advertising approach</li>
            </ul>
          </div>
        </section>

        {/* WHY ABU DHABI */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Why Abu Dhabi Businesses Need Advertising
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Many businesses in Abu Dhabi rely on referrals and traditional marketing. However, digital advertising provides faster and more measurable results.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              With the right strategy, your business can consistently attract new customers every day.
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

              <Link href="/services/website-advertising-dubai">
                → Web Advertising Dubai
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
            title: "Web Advertising Abu Dhabi",

            description:
              "Professional web advertising services in Abu Dhabi for businesses looking to increase leads and visibility.",

            path: "/services/website-advertising-abu-dhabi",

            areaServed: "Abu Dhabi",
          })}
        />
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}