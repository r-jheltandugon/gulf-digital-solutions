import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

import Link from "next/link";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import CallButton from "@/components/ui/call-button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio - Gulf Digital Solutions",
  
  description:
    "Explore our portfolio of website design and digital advertising projects for businesses in Abu Dhabi, Dubai, and across the UAE.",
    
  alternates: {
    canonical: "/portfolio",
  },
};

const projects = [
  {
    title: "Business Website Design",
    description:
      "Modern website design built for UAE businesses to increase trust and generate WhatsApp inquiries.",
    link: "/services/website-design",
    tag: "Website Design",
  },
  {
    title: "SEO Optimization Project",
    description:
      "Search engine optimization strategy that improves Google rankings for local UAE businesses.",
    link: "/services/seo-optimization",
    tag: "SEO UAE",
  },
  {
    title: "Web Advertising Campaign",
    description:
      "Targeted advertising system designed to generate high-quality leads in Dubai and Abu Dhabi.",
    link: "/services/website-advertising",
    tag: "Web Advertising",
  },
  {
    title: "Mobile Optimization System",
    description:
      "Fully responsive mobile-first website experience for better conversions across all devices.",
    link: "/services/mobile-optimization",
    tag: "Mobile UX",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          {/* HERO */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Our Work
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              We build high-performing websites and digital systems for businesses in the UAE that focus on real results: leads, calls, and conversions.
            </p>
          </div>

          {/* INTRO */}
          <div className="mt-16 mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold">
              Real Digital Results for Real Businesses
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
              Our portfolio is not just design — it represents strategic systems built to help businesses grow online in competitive UAE markets like Dubai and Abu Dhabi.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                className="group rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800"
              >
                <p className="text-xs font-medium text-blue-600">
                  {project.tag}
                </p>

                <h3 className="mt-3 text-xl font-semibold group-hover:text-blue-600 transition">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <p className="mt-5 text-sm font-medium text-blue-600">
                  View Related Service →
                </p>
              </Link>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="mt-24 rounded-3xl bg-slate-900 p-10 text-center text-white">
            <h2 className="text-2xl font-bold">
              Want a similar result for your business?
            </h2>

            <p className="mt-4 text-slate-300">
              Let’s build a website that actually brings you customers, not just traffic.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}