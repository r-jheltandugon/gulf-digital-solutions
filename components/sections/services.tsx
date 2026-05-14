import {
  Globe,
  Search,
  Smartphone,
  MessageCircle,
  PenTool,
  Wrench,
} from "lucide-react";

import Container from "../layout/container";

const services = [
  {
    title: "Business Website Design",
    description:
      "Modern, responsive websites designed to help UAE businesses attract customers and build trust online.",
    icon: Globe,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your Google rankings in Abu Dhabi, Dubai, and across the UAE to get more organic traffic.",
    icon: Search,
  },
  {
    title: "Mobile Optimization",
    description:
      "Fast, mobile-friendly websites that deliver a smooth experience on all devices.",
    icon: Smartphone,
  },
  {
    title: "WhatsApp Lead Integration",
    description:
      "Turn website visitors into real customers with instant WhatsApp inquiry buttons.",
    icon: MessageCircle,
  },
  {
    title: "Branding & UI Design",
    description:
      "Professional branding and modern UI design that builds trust and improves conversions.",
    icon: PenTool,
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing updates, security, and performance optimization for your business website.",
    icon: Wrench,
  },
];

export default function ServicesSection() {
  return (
    <section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-blue-600">
            Our Digital Services in UAE
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Website Design & Web Advertising Solutions
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            Helping businesses in Abu Dhabi, Dubai, and across the UAE grow
            through modern websites, SEO, and digital marketing solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}