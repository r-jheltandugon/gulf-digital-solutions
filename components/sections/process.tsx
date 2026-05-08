import Container from "../layout/container";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business goals and target audience.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a modern and conversion-focused design.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build a fast, responsive, and SEO-friendly website.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "We launch your website and help grow your online presence.",
  },
];

export default function Process() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-blue-600">
            Our Process
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Simple & Professional Workflow
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border p-8 shadow-sm"
            >
              <span className="text-sm font-bold text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-4 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}