"use client";

import { useState } from "react";
import { wedding } from "@/data/wedding";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Wishes() {
  const [wish, setWish] = useState("");

  function sendWish() {
    const phone = wedding.contact.wishesWhatsapp.replace(/\D/g, "");
    const message = wish.trim()
      ? `Dear Silpa & Chandan,\n\n${wish.trim()}\n\nWith love and blessings ❤️`
      : "Dear Silpa & Chandan, wishing you both a lifetime filled with love, happiness and togetherness. Congratulations! ❤️";

    // Using the official WhatsApp Click-to-Chat URL lets the visitor's phone
    // open WhatsApp with the message already prepared. WhatsApp requires the
    // visitor to confirm the final send; a website cannot silently send it.
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  return (
    <section className="section" id="wishes">
      <SectionTitle eyebrow="Leave us a note" title="Wishes & Blessings" />
      <div className="mx-auto max-w-xl text-center">
        <p className="leading-7 text-gray-600">Your blessings and good wishes mean the world to us.</p>
        <textarea
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          rows={4}
          maxLength={500}
          placeholder="Write your wishes for Silpa & Chandan..."
          className="mt-6 w-full resize-none rounded-2xl border border-wedding-gold/30 bg-white p-4 text-left text-wedding-ink outline-none ring-wedding-rose/20 transition focus:ring-4"
        />
        <button
          type="button"
          onClick={sendWish}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
        >
          Send Wishes on WhatsApp
        </button>
        <p className="mt-3 text-xs leading-5 text-gray-500">
          On mobile, WhatsApp will open with your wish ready in the message box. Tap Send to deliver it.
        </p>
      </div>
    </section>
  );
}
