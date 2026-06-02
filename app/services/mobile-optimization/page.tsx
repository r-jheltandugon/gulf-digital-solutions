import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import CallButton from "@/components/ui/call-button";
import Image from "next/image";

import Schema from "@/components/seo/schema";
import { serviceSchema } from "@/lib/schema";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Optimization Services in Abu Dhabi, Dubai, UAE",
  
  description:
    "Professional mobile optimization services in Abu Dhabi, Dubai, and across the UAE for businesses.",
    
  alternates: {
    canonical: "/services/mobile-optimization",
  },
};

export default function MobileOptimizationPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Mobile Optimization Services in UAE
            </h1>

            <div 
              className="relative w-full overflow-hidden rounded-3xl shadow-lg mt-8"
            >
              <Image
                src="/mobile-optimization.png"
                alt="Mobile Optimization Services in Abu Dhabi, Dubai, UAE"
                width={1200}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              We build fully responsive and mobile-friendly websites for businesses in Abu Dhabi, Dubai, and across the UAE to ensure perfect performance on all devices.
            </p>
          </div>
        </section>

        {/* WHY MOBILE MATTERS */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Why Mobile Optimization Is Important
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Most users in the UAE browse websites using mobile phones. If your website is not optimized for mobile devices, you will lose potential customers immediately.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              A mobile-friendly website improves user experience, increases engagement, and helps your business rank higher on Google search results.
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              What Our Mobile Optimization Includes
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Fully responsive website design for all screen sizes</li>
              <li>✔ Mobile-first UI/UX optimization</li>
              <li>✔ Fast loading performance on mobile networks</li>
              <li>✔ Touch-friendly navigation and layout</li>
              <li>✔ Optimized images and assets for speed</li>
              <li>✔ Google mobile usability compliance</li>
            </ul>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Benefits for Your Business
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              A mobile-optimized website increases conversions by making it easier for users to browse, contact you, and take action directly from their phones.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              In competitive markets like Dubai and Abu Dhabi, mobile performance is a key ranking factor for Google.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24">
          <CTA />
        </div>
        <Schema
          data={serviceSchema({
            title: "Mobile Optimization Services in Abu Dhabi, Dubai, UAE",

            description:
              "Professional mobile optimization services in Abu Dhabi, Dubai, and across the UAE for businesses looking to improve their website performance on mobile devices.",

            path: "/services/mobile-optimization",

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