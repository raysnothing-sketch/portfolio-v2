"use client";

import { useEffect, useState } from "react";

export function useExamTimer(minutes: number) {
  const total = minutes * 60;
  const [timer, setTimer] = useState({ remaining: total, running: false });

  useEffect(() => {
    if (!timer.running) return;
    const interval = window.setInterval(() => {
      setTimer((current) =>
        current.remaining <= 1
          ? { remaining: 0, running: false }
          : { remaining: current.remaining - 1, running: true },
      );
    }, 1000);
    return () => window.clearInterval(interval);
  }, [timer.running]);

  return {
    remaining: timer.remaining,
    running: timer.running,
    total,
    toggle: () =>
      setTimer((current) =>
        current.remaining === 0
          ? { remaining: total, running: true }
          : { remaining: current.remaining, running: !current.running },
      ),
    stop: () => setTimer((current) => ({ ...current, running: false })),
    reset: () => setTimer({ remaining: total, running: false }),
  };
}

export function formatClock(seconds: number) {
  const safe = Math.max(0, seconds);
  return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
}
