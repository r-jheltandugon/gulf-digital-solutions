import Container from "../layout/container";

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most projects are completed within 1–3 weeks depending on scope.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Every website is fully responsive and mobile optimized.",
  },
  {
    question: "Can customers contact me through WhatsApp?",
    answer:
      "Absolutely. We integrate WhatsApp directly into your website.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-medium text-blue-600">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border p-8"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}