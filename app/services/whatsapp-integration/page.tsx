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
  title: "WhatsApp Integration Services in Abu Dhabi, Dubai, UAE",
  
  description:
    "Website WhatsApp integration services in Abu Dhabi, Dubai, and across the UAE for businesses.",
    
  alternates: {
    canonical: "/services/whatsapp-integration",
  },
};

export default function WhatsAppIntegrationPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              WhatsApp Integration for Business Websites in UAE
            </h1>

            <div 
              className="relative w-full overflow-hidden rounded-3xl shadow-lg mt-8"
            >
              <Image
                src="/whatsApp-integration.png"
                alt="WhatsApp Integration for Business Websites in UAE"
                width={1200}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              Turn your website visitors into real customers with instant WhatsApp integration for businesses in Abu Dhabi, Dubai, and across the UAE.
            </p>
          </div>
        </section>

        {/* WHY IMPORTANT */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Why WhatsApp Integration Matters
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Most customers in the UAE prefer WhatsApp for communication. If your website does not offer instant messaging, you are losing potential leads every day.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Adding WhatsApp directly to your website makes it easy for visitors to contact you instantly without filling long forms or waiting for email replies.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              What We Implement
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Floating WhatsApp chat button</li>
              <li>✔ Click-to-chat instant messaging</li>
              <li>✔ Pre-filled customer inquiry messages</li>
              <li>✔ Mobile-optimized WhatsApp experience</li>
              <li>✔ Lead tracking integration (optional)</li>
              <li>✔ Custom button design matching your brand</li>
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
              WhatsApp integration increases your conversion rate by making communication instant and frictionless. Instead of losing visitors, you convert them into real conversations and sales opportunities.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              This is especially powerful for service businesses in Abu Dhabi and Dubai where customers prefer fast mobile communication.
            </p>
          </div>
        </section>

        {/* USE CASES */}
        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Best For These Businesses
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Cleaning services</li>
              <li>✔ Real estate agencies</li>
              <li>✔ Restaurants & food delivery</li>
              <li>✔ Construction companies</li>
              <li>✔ Freelancers & consultants</li>
              <li>✔ Any service-based business</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24">
          <CTA />
        </div>
        <Schema
          data={serviceSchema({
            title: "WhatsApp Integration Services in Abu Dhabi, Dubai, UAE",

            description:
              "Professional WhatsApp integration services in Abu Dhabi, Dubai, and across the UAE for businesses.",

            path: "/services/whatsapp-integration",

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