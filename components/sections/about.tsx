import Container from "@/components/layout/container";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Search,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Professional Online Presence",
    description:
      "Modern websites that improve business credibility and help attract more customers.",
    icon: Globe,
  },
  {
    title: "Mobile First Experience",
    description:
      "Optimized for mobile users to ensure fast and seamless browsing.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimized",
    description:
      "Structured to help businesses appear on Google search results.",
    icon: Search,
  },
  {
    title: "WhatsApp Integration",
    description:
      "Increase customer inquiries through direct communication.",
    icon: MessageCircle,
  },
];

export function AboutHero() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm font-medium text-blue-600">
            About Gulf Digital Solutions
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Helping Businesses Grow Through Digital Presence
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Gulf Digital Solutions helps local businesses increase visibility,
            improve credibility, attract more customers, and generate more
            WhatsApp inquiries through modern digital solutions.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="rounded-2xl border px-8 py-4 font-semibold transition hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Mission() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Mission
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Helping Local Businesses Succeed Online
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              We believe every business deserves a strong digital presence.
              Our mission is to help businesses grow online through fast,
              modern, and conversion-focused websites.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              We focus on real business growth — not just beautiful designs.
              Every website is built to increase visibility, trust, and
              customer inquiries.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[2rem] bg-blue-600 px-8 py-20 text-center md:px-16">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Ready to Grow Your Business Online?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Let’s build a modern digital presence that helps your business
            attract more customers and increase inquiries.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
            >
              Start Growing My Business
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}