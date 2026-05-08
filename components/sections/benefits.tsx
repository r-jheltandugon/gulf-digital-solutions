import {
  BadgeCheck,
  Smartphone,
  Zap,
  Globe,
} from "lucide-react";

import Container from "../layout/container";

const benefits = [
  {
    title: "Build Customer Trust",
    description:
      "A professional online presence increases credibility instantly.",
    icon: BadgeCheck,
  },
  {
    title: "Mobile First Experience",
    description:
      "Optimized for phones where most customers browse today.",
    icon: Smartphone,
  },
  {
    title: "Fast Performance",
    description:
      "Speed optimized websites improve user experience and SEO.",
    icon: Zap,
  },
  {
    title: "Google Visibility",
    description:
      "Appear more professionally in Google search results.",
    icon: Globe,
  },
];

export default function Benefits() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-blue-600">
            Why Businesses Choose Us
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Designed To Help You Grow
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border p-8"
              >
                <Icon className="h-10 w-10 text-blue-600" />

                <h3 className="mt-6 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}