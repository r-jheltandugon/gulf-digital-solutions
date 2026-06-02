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
  title: "Website Design Services in Abu Dhabi, Dubai, UAE",
  
  description:
    "Professional website design services in Abu Dhabi, Dubai, and across the UAE for businesses.",
    
  alternates: {
    canonical: "/services/website-design",
  },
};

export default function WebsiteDesignPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <section>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Website Design Services in UAE
            </h1>

            <div 
              className="relative w-full overflow-hidden rounded-3xl shadow-lg mt-8"
            >
              <Image
                src="/web-design.png"
                alt="Website Design Services in UAE"
                width={1200}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              We create modern, fast, and high-converting business websites for companies in Abu Dhabi, Dubai, and across the UAE. Our websites are designed to attract customers and generate real business leads.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Why Your Business Needs a Professional Website
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              In today’s digital world, your website is your first impression. A poorly designed website can make you lose customers, while a professional website builds trust and increases conversions.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              We specialize in building websites that are optimized for performance, SEO, and user experience, helping UAE businesses stand out in a competitive market.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              What You Get
            </h2>

            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>✔ Modern responsive design for all devices</li>
              <li>✔ Fast loading performance</li>
              <li>✔ SEO optimized structure</li>
              <li>✔ WhatsApp integration for leads</li>
              <li>✔ Custom UI tailored to your business</li>
              <li>✔ Secure and scalable architecture</li>
            </ul>
          </div>
        </section>

        <section className="mt-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Who This Service Is For
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              This service is perfect for small and medium businesses in Abu Dhabi and Dubai that want to build a strong online presence and attract more customers through Google search and online marketing.
            </p>
          </div>
        </section>

        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Schema
          data={serviceSchema({
            title: "Website Design Services",

            description:
              "Professional website design services in Abu Dhabi, Dubai, and across the UAE for businesses.",

            path: "/services/website-design",

            areaServed: "Abu Dhabi, Dubai, UAE, Philippines, Eastern Samar, Tacloban City, Borongan City, Guian, Mercedes, Salcedo, General MacArthur",
          })}
        />
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}