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
  title: "Website Maintenance Services in Abu Dhabi, Dubai, UAE",
  
  description:
    "Professional website maintenance services in Abu Dhabi, Dubai, and across the UAE for businesses.",
    
  alternates: {
    canonical: "/services/maintenance",
  },
};

export default function WebsiteMaintenancePage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Website Maintenance Services in UAE
            </h1>

            <div 
              className="relative w-full overflow-hidden rounded-3xl shadow-lg mt-8"
            >
              <Image
                src="/web-maintenance.png"
                alt="Website Maintenance Services in Abu Dhabi, Dubai, UAE"
                width={1200}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              We provide reliable website maintenance and support for businesses in Abu Dhabi, Dubai, and across the UAE to keep your website fast, secure, and always up to date.
            </p>
          </div>
        </section>

        {/* WHY MAINTENANCE MATTERS */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Why Website Maintenance Is Important
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              A website is not a one-time project. Without regular maintenance, it can become slow, outdated, or even vulnerable to security issues.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Businesses in the UAE rely heavily on their websites to generate leads, so keeping everything updated is essential for performance and trust.
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              What Our Maintenance Service Includes
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Regular website updates and improvements</li>
              <li>✔ Bug fixes and performance optimization</li>
              <li>✔ Security monitoring and protection</li>
              <li>✔ Content updates (text, images, pages)</li>
              <li>✔ Speed optimization for better UX</li>
              <li>✔ Backup and recovery support</li>
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
              A well-maintained website builds trust with your customers and improves your Google rankings over time.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              It also ensures your site continues to convert visitors into leads without technical issues affecting your business.
            </p>
          </div>
        </section>

        {/* WHO NEEDS THIS */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Who Needs Website Maintenance
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Businesses with existing websites</li>
              <li>✔ Companies updating content regularly</li>
              <li>✔ E-commerce stores</li>
              <li>✔ Service-based businesses</li>
              <li>✔ Startups scaling their platform</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24">
          <CTA />
        </div>
        <Schema
          data={serviceSchema({
            title: "Web Maintenance Services in Abu Dhabi, Dubai, UAE",

            description:
              "Professional web maintenance services in Abu Dhabi, Dubai, and across the UAE for businesses looking to keep their websites up-to-date and secure.",

            path: "/services/maintenance",

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