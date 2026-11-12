"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { wedding } from "@/data/wedding";

export default function Countdown() {
  const time = useCountdown(wedding.weddingDate);
  const items = [
    ["Days", time?.days], ["Hours", time?.hours], ["Minutes", time?.minutes], ["Seconds", time?.seconds]
  ];
  return (
    <section className="section bg-white text-center">
      <p className="mb-5 text-xs uppercase tracking-[.35em] text-wedding-rose">Counting the moments</p>
      <div className="mx-auto grid max-w-3xl grid-cols-4 gap-3">
        {items.map(([label, value]) => (
          <div key={String(label)} className="rounded-2xl bg-wedding-cream p-5">
            <div className="font-serif text-4xl md:text-6xl">{value === undefined ? "—" : String(value).padStart(2, "0")}</div>
            <div className="mt-2 text-[10px] uppercase tracking-widest">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}