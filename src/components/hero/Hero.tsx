"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";

const slides = Array.from({ length: 11 }, (_, index) =>
  `/images/gallery/photo-${String(index + 1).padStart(2, "0")}.JPG`
);

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const currentImage = slides[activeSlide];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#241317] text-white">
      <div className="absolute inset-0">
        <Image
          key={currentImage}
          src={currentImage}
          alt="Silpa & Chandan wedding memory"
          fill
          priority={activeSlide === 0}
          sizes="100vw"
          className="hero-slide-image object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#6d3540]/35 to-[#241317]/90" />
      </div>

      <div className="relative z-10 px-6 text-center drop-shadow-2xl">
        <p className="mb-4 font-serif text-lg text-[#e5c58b]">
          {wedding.invitation.mantra}
        </p>
        <p className="mb-6 text-xs uppercase tracking-[.45em]">
          Wedding Invitation
        </p>

        <div className="hero-names">
          <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.48em] text-white/80 md:text-xs">Together with their families</p>
          <h1 className="hero-name">{wedding.couple.bride}</h1>
          <p className="hero-amp">&amp;</p>
          <h1 className="hero-name">{wedding.couple.groom}</h1>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-base italic tracking-wide text-white/90 md:text-lg">
            Daughter of {wedding.bride.father} &amp; {wedding.bride.mother} · Son of {wedding.groom.father} &amp; {wedding.groom.mother}
          </p>
        </div>

        <p className="mt-7 text-lg">We are getting married</p>
        <p className="mt-2 text-xl">{wedding.invitation.dateText} · {wedding.invitation.dayText}</p>
        <a href="#invitation" className="mt-8 inline-block rounded-full border border-white/60 px-7 py-3 text-sm uppercase tracking-widest transition hover:bg-white hover:text-wedding-wine">
          Open Invitation
        </a>
      </div>
    </section>
  );
}
