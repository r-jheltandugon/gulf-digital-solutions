import Image from "next/image";
import Container from "../layout/container";

const testimonials = [
  {
    name: "Ahmed",
    business: "Restaurant Business in Abu Dhabi",
    quote:
      "The website made our business look far more professional online.",
    image: "/testimonials/ahmed.png",
  },
  {
    name: "Sarah",
    business: "Beauty Salon in Dubai",
    quote:
      "We started receiving more WhatsApp inquiries after launch.",
    image: "/testimonials/sarah.png",
  },
  {
    name: "Michael",
    business: "Cleaning Company in UAE",
    quote:
      "Fast, modern, and exactly what our business needed.",
    image: "/testimonials/michael.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Trusted By Local Businesses
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Real feedback from businesses we helped grow online.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="512px"
                    quality={90}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.business}
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-7 text-slate-600 dark:text-slate-300">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}