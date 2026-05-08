import Container from "../layout/container";

const testimonials = [
  {
    name: "Ahmed",
    business: "Restaurant Owner",
    quote:
      "The website made our business look far more professional online.",
  },
  {
    name: "Sarah",
    business: "Beauty Salon",
    quote:
      "We started receiving more WhatsApp inquiries after launch.",
  },
  {
    name: "Michael",
    business: "Cleaning Service",
    quote:
      "Fast, modern, and exactly what our business needed.",
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
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border p-8"
            >
              <p className="leading-7 text-slate-600">
                "{testimonial.quote}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {testimonial.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}