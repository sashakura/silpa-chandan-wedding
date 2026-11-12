"use client";

import { useEffect, useState, type ReactNode } from "react";
import { wedding } from "@/data/wedding";

function playPoppers() {
  if (typeof window.AudioContext === "undefined") return;

  const audioContext = new window.AudioContext();
  const startTime = audioContext.currentTime;
  const duration = 0.2;
  const buffer = audioContext.createBuffer(
    1,
    Math.floor(audioContext.sampleRate * duration),
    audioContext.sampleRate
  );
  const channel = buffer.getChannelData(0);

  for (let index = 0; index < channel.length; index += 1) {
    channel[index] = Math.random() * 2 - 1;
  }

  [0, 0.035].forEach((offset) => {
    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const volume = audioContext.createGain();
    const burstTime = startTime + offset;

    source.buffer = buffer;
    filter.type = "bandpass";
    filter.frequency.value = 1600;
    filter.Q.value = 0.7;
    volume.gain.setValueAtTime(0.0001, burstTime);
    volume.gain.exponentialRampToValueAtTime(0.35, burstTime + 0.008);
    volume.gain.exponentialRampToValueAtTime(0.0001, burstTime + duration);

    source.connect(filter);
    filter.connect(volume);
    volume.connect(audioContext.destination);
    source.start(burstTime);
    source.stop(burstTime + duration);
  });
}

export default function InvitationOpening({
  children
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (!isOpening) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setIsOpen(true), reducedMotion ? 50 : 1050);

    return () => window.clearTimeout(timer);
  }, [isOpening]);

  if (isOpen) return children;

  return (
    <main className="invitation-opening flex min-h-screen items-center justify-center px-5 py-10">
      {isOpening && (
        <div className="invitation-poppers" aria-hidden="true">
          {[0, 1].map((side) => (
            <div
              key={side}
              className={`popper-burst ${side === 0 ? "popper-burst--left" : "popper-burst--right"}`}
            >
              {Array.from({ length: 8 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
          ))}
        </div>
      )}
      <section
        aria-labelledby="invitation-opening-title"
        className="w-full max-w-md rounded-[1.4rem] border border-wedding-gold/50 bg-white px-6 py-12 text-center shadow-[0_24px_70px_rgba(51,39,42,0.16)] sm:px-10 sm:py-14"
      >
        <p
          id="invitation-opening-title"
          className="text-xs font-medium uppercase tracking-[0.3em] text-wedding-gold"
        >
          Wedding Invitation
        </p>

        <h1 className="mt-7 font-serif text-3xl font-semibold uppercase leading-tight tracking-wide text-wedding-wine sm:text-4xl">
          {wedding.bride.fullName}
        </h1>
        <p className="my-4 font-serif text-3xl leading-none text-wedding-gold" aria-hidden="true">
          ♥
        </p>
        <h2 className="font-serif text-3xl font-semibold uppercase leading-tight tracking-wide text-wedding-wine sm:text-4xl">
          {wedding.groom.fullName}
        </h2>

        <p className="mt-6 text-sm tracking-wide text-gray-600">
          {wedding.invitation.dayText} · {wedding.invitation.dateText}
        </p>

        <button
          type="button"
          onClick={() => {
            if (isOpening) return;
            playPoppers();
            setIsOpening(true);
          }}
          disabled={isOpening}
          aria-busy={isOpening}
          className="mt-8 w-full rounded-full bg-wedding-wine px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-wedding-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wedding-gold disabled:cursor-wait"
        >
          ♫ &nbsp; Tap to open invitation
        </button>
      </section>
    </main>
  );
}
