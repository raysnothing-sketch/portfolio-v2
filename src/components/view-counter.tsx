"use client";

import { useEffect, useState } from "react";

import { incrementViews } from "@/app/actions";

/** Compteur de visites persistant (Turso). Une visite par session. */
export function ViewCounter({ label }: { label: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

    try {
      if (sessionStorage.getItem("pv-session")) {
        return () => {
          active = false;
        };
      }
      sessionStorage.setItem("pv-session", "1");
    } catch {
      // Navigation privée : on continue sans persistance.
    }

    incrementViews()
      .then((value) => {
        if (active) setCount(value);
      })
      .catch(() => {
        if (active) setCount(null);
      });

    return () => {
      active = false;
    };
  }, []);

  if (count === null) return null;

  return (
    <span className="tabular-nums">
      {count.toLocaleString("de-DE")} {label}
    </span>
  );
}
