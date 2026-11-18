"use client";

import { useEffect, useState } from "react";

import { incrementViews } from "@/app/actions";

/** Compteur de visites persistant (Turso). */
export function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

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

  return <span className="tabular-nums">{count === null ? "—" : `${count} vues`}</span>;
}
