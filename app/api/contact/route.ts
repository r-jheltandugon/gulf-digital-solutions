import { Resend } from "resend";
import { ratelimit } from "@/lib/rate-limit";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    let body;

    try {
      body = await req.json();
    } catch {
      return Response.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const company = body.company;

    // 1. Honeypot (FIRST LINE OF DEFENSE)
    if (company) {
      return Response.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. IP extraction (safe)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "anonymous";

    // 3. Rate limiting
    const { success } =
      await ratelimit.limit(ip);

    if (!success) {
      return Response.json(
        {
          error:
            "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    // 4. Validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return Response.json(
        {
          error:
            "Message must be at least 10 characters.",
        },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return Response.json(
        {
          error:
            "Message exceeds maximum length.",
        },
        { status: 400 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      throw new Error(
        "CONTACT_EMAIL is missing."
      );
    }

    // 5. Sanitize
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    // 6. Send email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Message from ${safeName}`,
      replyTo: safeEmail,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error:
          "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}