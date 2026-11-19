import type { Criterion } from "@/lib/dsh/modules";
import { normalize } from "@/lib/dsh/scoring";

export type ModuleCriterionResult = {
  id: string;
  label: string;
  achieved: boolean;
};

export type ModuleTaskResult = {
  taskId: string;
  points: number;
  max: number;
  criteria: ModuleCriterionResult[];
  feedback: string;
  source: "local" | "ai";
};

const STOP = new Set([
  "der",
  "die",
  "das",
  "und",
  "oder",
  "aber",
  "den",
  "dem",
  "des",
  "ein",
  "eine",
  "einen",
  "einer",
  "mit",
  "von",
  "vor",
  "sich",
  "ist",
  "sind",
  "war",
  "werden",
  "wird",
  "dass",
  "auch",
  "durch",
  "für",
  "auf",
  "nicht",
  "man",
]);

function tokens(value: string): string[] {
  return normalize(value)
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length > 3 && !STOP.has(word));
}

/** Prix local : recouvrement lexical avec la référence + présence des mots-clés du critère. */
export function scoreText(
  answer: string,
  reference: string,
  criteria: Criterion[],
): { points: number; criteria: ModuleCriterionResult[] } {
  const given = tokens(answer);
  const expected = new Set(tokens(reference));
  const givenSet = new Set(given);
  const overlap =
    expected.size === 0
      ? 0
      : [...expected].filter((word) => [...givenSet].some((token) => token.includes(word) || word.includes(token)))
          .length / expected.size;

  let points = 0;
  const results = criteria.map((criterion) => {
    const keywords = tokens(criterion.label);
    const hit =
      given.length >= 6 &&
      (overlap >= 0.3 || keywords.some((word) => [...givenSet].some((token) => token.includes(word))));
    if (hit) points += criterion.points;
    return { id: criterion.id, label: criterion.label, achieved: hit };
  });

  return { points, criteria: results };
}

export function levelFromPoints(points: number, max: number) {
  const percent = max === 0 ? 0 : Math.round((points / max) * 100);
  if (percent >= 82) return { key: "dsh3" as const, percent };
  if (percent >= 67) return { key: "dsh2" as const, percent };
  if (percent >= 57) return { key: "dsh1" as const, percent };
  return { key: "none" as const, percent };
}
