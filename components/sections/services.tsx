import Link from "next/link";

import {
  Globe,
  Search,
  Smartphone,
  MessageCircle,
  Megaphone,
  MapPin,
  Building2,
  Wrench,
} from "lucide-react";

import Container from "../layout/container";

const services = [
  {
    title: "Website Design",
    description:
      "Modern and responsive business websites designed to help UAE companies attract customers and build trust online.",
    icon: Globe,
    href: "/services/website-design",
  },

  {
    title: "Web Advertising UAE",
    description:
      "Professional web advertising solutions across the UAE designed to increase leads, visibility, and customer inquiries.",
    icon: Megaphone,
    href: "/services/website-advertising-uae",
  },

  {
    title: "Web Advertising Abu Dhabi",
    description:
      "Targeted advertising strategies for businesses in Abu Dhabi looking to grow online and attract more customers.",
    icon: MapPin,
    href: "/services/website-advertising-abu-dhabi",
  },

  {
    title: "Web Advertising Dubai",
    description:
      "Digital advertising services for Dubai businesses focused on visibility, lead generation, and business growth.",
    icon: Building2,
    href: "/services/website-advertising-dubai",
  },

  {
    title: "SEO Optimization",
    description:
      "Improve Google rankings and increase organic traffic with SEO strategies built for businesses in UAE.",
    icon: Search,
    href: "/services/seo-optimization",
  },

  {
    title: "Mobile Optimization",
    description:
      "Fast and mobile-friendly websites optimized for smartphones, tablets, and modern devices.",
    icon: Smartphone,
    href: "/services/mobile-optimization",
  },

  {
    title: "WhatsApp Integration",
    description:
      "Convert website visitors into real customers using direct WhatsApp inquiry and communication integration.",
    icon: MessageCircle,
    href: "/services/whatsapp-integration",
  },

  {
    title: "Website Maintenance",
    description:
      "Ongoing website updates, performance optimization, security improvements, and technical support.",
    icon: Wrench,
    href: "/services/maintenance",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-medium text-blue-600">
            Our Digital Services in UAE
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Website Design & Web Advertising Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Gulf Digital Solutions helps businesses in Abu Dhabi, Dubai,
            and across the UAE grow through professional website design,
            SEO optimization, mobile-friendly development, and digital
            advertising strategies that generate real customer inquiries.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-200">
                  <Icon className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>

                <p className="mt-6 font-medium text-blue-600">
                  Learn More →
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}