"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const startMusic = async () => {
      if (!audio.current || playing) return;
      try {
        await audio.current.play();
        setPlaying(true);
      } catch {}
    };

    window.addEventListener("pointerdown", startMusic, { once: true });
    window.addEventListener("keydown", startMusic, { once: true });
    return () => {
      window.removeEventListener("pointerdown", startMusic);
      window.removeEventListener("keydown", startMusic);
    };
  }, [playing]);

  async function toggle() {
    if (!audio.current) return;
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      try {
        await audio.current.play();
        setPlaying(true);
      } catch {}
    }
  }

  return (
    <>
      <audio ref={audio} loop preload="metadata" src="/audio/wedding-music.mp3" />
      <button onClick={toggle} aria-label="Toggle music" className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-wedding-wine text-white shadow-lg">
        {playing ? "❚❚" : "♫"}
      </button>
    </>
  );
}