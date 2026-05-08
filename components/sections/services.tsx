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
    title: "Business Websites",
    description:
      "Professional websites designed to convert visitors into customers.",
    icon: Globe,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your visibility on Google and attract more local customers.",
    icon: Search,
  },
  {
    title: "Mobile Optimization",
    description:
      "Fast and responsive experiences across all devices.",
    icon: Smartphone,
  },
  {
    title: "WhatsApp Integration",
    description:
      "Generate direct inquiries from your website instantly.",
    icon: MessageCircle,
  },
  {
    title: "Branding & Design",
    description:
      "Modern and trustworthy branding for your business.",
    icon: PenTool,
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, and performing well.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-blue-600">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Helping Businesses Grow Online
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We create modern digital experiences that help
            businesses build trust, increase visibility, and
            attract more customers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
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