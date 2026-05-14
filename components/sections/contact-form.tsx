"use client";

import { useState } from "react";
import Container from "../layout/container";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;

    const formData = {
      company: (
        form.elements.namedItem("company") as HTMLInputElement
      ).value,

      name: (
        form.elements.namedItem("name") as HTMLInputElement
      ).value.trim(),

      email: (
        form.elements.namedItem("email") as HTMLInputElement
      ).value.trim(),

      message: (
        form.elements.namedItem(
          "message"
        ) as HTMLTextAreaElement
      ).value.trim(),
    };

    // Frontend validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (formData.message.length < 10) {
      setError(
        "Message should be at least 10 characters."
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      setSuccess(true);
      form.reset();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Tell us about your business and we’ll help
            you grow online.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full rounded-xl border p-4
                outline-none transition
                focus:border-blue-500
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full rounded-xl border p-4
                outline-none transition
                focus:border-blue-500
              "
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              minLength={10}
              className="
                h-40 w-full rounded-xl border p-4
                outline-none transition
                focus:border-blue-500
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full rounded-xl bg-blue-600 p-4
                font-medium text-white transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600">
                Message sent successfully!
              </p>
            )}

            {error && (
              <p className="text-red-600">
                {error}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}