"use client";

import { Phone } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export default function CallButton() {
  const handleClick = () => {
    sendGAEvent("event", "phone_call_click", {
      button_location: "floating_button",
    });
  };

  return (
    <a
      href="tel:+971525381161"
      aria-label="Call Us"
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-110"
    >
      <Phone size={26} />
    </a>
  );
}