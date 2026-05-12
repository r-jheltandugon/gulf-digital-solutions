import Link from "next/link";
import Container from "../layout/container";
import Button from "../ui/button";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[32px] bg-slate-900 px-8 py-16 text-center text-white md:px-16">
          <p className="font-medium text-blue-400">
            Ready To Grow?
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Let’s Build Your Digital Presence
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            We help local businesses create modern online
            experiences that attract customers and grow revenue.
          </p>

          <div className="mt-10">
            <Link href="/contact">
              <Button>Start Your Project</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}