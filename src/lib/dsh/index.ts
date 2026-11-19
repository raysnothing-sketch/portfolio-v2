import { sim01 } from "@/lib/dsh/sim-01";
import { sim02 } from "@/lib/dsh/sim-02";
import { sim03 } from "@/lib/dsh/sim-03";
import { sim04 } from "@/lib/dsh/sim-04";
import { sim05 } from "@/lib/dsh/sim-05";
import { sim06 } from "@/lib/dsh/sim-06";
import { sim07 } from "@/lib/dsh/sim-07";
import { sim08 } from "@/lib/dsh/sim-08";
import { sim09 } from "@/lib/dsh/sim-09";
import { sim10 } from "@/lib/dsh/sim-10";
import { sim11 } from "@/lib/dsh/sim-11";
import { sim12 } from "@/lib/dsh/sim-12";
import { sim13 } from "@/lib/dsh/sim-13";
import { sim14 } from "@/lib/dsh/sim-14";
import { sim15 } from "@/lib/dsh/sim-15";
import { sim16 } from "@/lib/dsh/sim-16";
import { sim17 } from "@/lib/dsh/sim-17";
import { sim18 } from "@/lib/dsh/sim-18";
import { sim19 } from "@/lib/dsh/sim-19";
import { sim20 } from "@/lib/dsh/sim-20";
import type { DshLevel, DshLevelKey, DshScore, DshSimulation } from "@/lib/dsh/types";

export const simulations: DshSimulation[] = [
  sim01, sim02, sim03, sim04, sim05,
  sim06, sim07, sim08, sim09, sim10,
  sim11, sim12, sim13, sim14, sim15,
  sim16, sim17, sim18, sim19, sim20,
];

export function getSimulation(slug: string): DshSimulation | undefined {
  return simulations.find((simulation) => simulation.slug === slug);
}

export function simulationHref(locale: string, slug: string): string {
  return `/${locale}/dsh/simulation/${slug}`;
}

/** Barème officiel : 30 points de compréhension + 15 points de structures. */
export const LESETEXT_POINTS = 30;
export const STRUKTUREN_POINTS = 15;
export const TOTAL_POINTS = LESETEXT_POINTS + STRUKTUREN_POINTS;

export const POINTS_PER_SIMULATION = simulations.map((simulation) => ({
  leseverstehen: simulation.leseverstehen.reduce((sum, question) => sum + question.points, 0),
  strukturen: simulation.strukturen.reduce((sum, task) => sum + task.points, 0),
}));

const LEVEL_THRESHOLDS: { key: DshLevelKey; percent: number }[] = [
  { key: "dsh3", percent: 82 },
  { key: "dsh2", percent: 67 },
  { key: "dsh1", percent: 57 },
];

export function toLevel(score: DshScore): DshLevel {
  const percent = score.max === 0 ? 0 : (score.points / score.max) * 100;
  const rounded = Math.round(percent * 10) / 10;
  const match = LEVEL_THRESHOLDS.find((threshold) => percent >= threshold.percent);
  return {
    points: Math.round(score.points * 10) / 10,
    max: score.max,
    percent: rounded,
    level: match?.key ?? "none",
  };
}

export function levelTone(level: DshLevelKey): { text: string; ring: string; chip: string } {
  switch (level) {
    case "dsh3":
      return {
        text: "text-lime",
        ring: "rgba(76, 109, 67, 0.75)",
        chip: "border-lime/40 bg-lime/10 text-lime",
      };
    case "dsh2":
      return {
        text: "text-cyan",
        ring: "rgba(28, 92, 112, 0.75)",
        chip: "border-cyan/40 bg-cyan/10 text-cyan",
      };
    case "dsh1":
      return {
        text: "text-violet",
        ring: "rgba(160, 58, 40, 0.75)",
        chip: "border-violet/40 bg-violet/10 text-violet",
      };
    default:
      return {
        text: "text-mute",
        ring: "rgba(109, 102, 89, 0.45)",
        chip: "border-line bg-ink-card text-mute",
      };
  }
}
