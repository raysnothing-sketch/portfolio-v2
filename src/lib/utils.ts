import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ACCENT_RING: Record<string, string> = {
  violet: "rgba(124, 92, 255, 0.55)",
  cyan: "rgba(34, 211, 238, 0.5)",
  lime: "rgba(182, 243, 107, 0.45)",
};

export const ACCENT_TEXT: Record<string, string> = {
  violet: "text-violet",
  cyan: "text-cyan",
  lime: "text-lime",
};

export function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("fr-FR", { month: "short", year: "numeric" }).format(date);
}
