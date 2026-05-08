"use client";

import { useState } from "react";
import Container from "../layout/container";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) setSuccess(true);
  }

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Tell us about your business and we’ll help you grow online.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <input
              name="name"
              placeholder="Your Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              name="email"
              placeholder="Your Email"
              className="w-full rounded-xl border p-4"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="h-40 w-full rounded-xl border p-4"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 p-4 font-medium text-white"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}