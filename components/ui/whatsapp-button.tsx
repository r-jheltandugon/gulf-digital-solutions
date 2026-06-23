"use client";

import { MessageCircle } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export default function WhatsAppButton() {
  const handleClick = () => {
    sendGAEvent("event", "whatsapp_click", {
      button_location: "floating_button",
    });
  };

  return (
    <a
      href="https://wa.me/971525381161"
      target="_blank"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110"
    >
      <MessageCircle />
    </a>
  );
}