"use client";

import { useEffect, useState } from "react";

type CountdownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculate(targetDate: string): CountdownTime {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function useCountdown(targetDate: string) {
  // Keep the first render deterministic on both server and client.
  // The actual time-dependent value is populated immediately after hydration.
  const [time, setTime] = useState<CountdownTime | null>(null);

  useEffect(() => {
    const update = () => setTime(calculate(targetDate));

    update();
    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return time;
}
