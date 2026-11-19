/**
 * Correction locale, déterministe et explicable.
 *
 * Elle sert deux objectifs :
 *  - donner un score immédiat, même sans clé d'API ;
 *  - produire un diagnostic par critère que le correcteur IA peut ensuite
 *    affiner sans repartir de zéro.
 *
 * Les règles restent volontairement lisibles : pas de magie, un étudiant doit
 * pouvoir comprendre pourquoi un point est accordé ou refusé.
 */

import { toLevel } from "@/lib/dsh";
import type {
  DshCriterion,
  DshLevel,
  DshOpenQuestion,
  DshScore,
  DshSimulation,
  DshStructureTask,
  DshVocabQuestion,
  DshTrueFalseQuestion,
} from "@/lib/dsh/types";

export type DshAnswers = Record<string, string>;

export type CriterionResult = {
  id: string;
  label: string;
  achieved: boolean;
};

export type ItemResult = {
  id: string;
  points: number;
  max: number;
  achieved: boolean;
  expected: string;
  given: string;
};

export type QuestionResult = {
  id: string;
  points: number;
  max: number;
  source: "auto" | "local" | "ai";
  met: CriterionResult[];
  feedback?: string;
  /** Part du texte recopiée mot pour mot (0–1). */
  copy?: number;
  items?: ItemResult[];
};

export type DshEvaluation = {
  results: Record<string, QuestionResult>;
  leseverstehen: DshScore;
  strukturen: DshScore;
  total: DshLevel;
};

export function emptyAnswers(simulation: DshSimulation): DshAnswers {
  const answers: DshAnswers = {};
  for (const question of simulation.leseverstehen) {
    if (question.kind === "vocab") {
      for (const item of question.items) answers[item.id] = "";
    } else if (question.kind === "truefalse") {
      for (const statement of question.statements) answers[statement.id] = "";
    } else {
      answers[question.id] = "";
    }
  }
  for (const task of simulation.strukturen) answers[task.id] = "";
  return answers;
}

export function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[₂]/g, "2")
    .replace(/ß/g, "ss")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function bigrams(value: string): Set<string> {
  const set = new Set<string>();
  const compact = value.replace(/\s+/g, " ");
  if (compact.length < 2) return set;
  for (let index = 0; index < compact.length - 1; index += 1) {
    set.add(compact.slice(index, index + 2));
  }
  return set;
}

/** Coefficient de Sørensen–Dice, insensible à la casse et à la ponctuation. */
export function similarity(a: string, b: string): number {
  const left = bigrams(normalize(a));
  const right = bigrams(normalize(b));
  if (left.size === 0 || right.size === 0) return 0;
  let shared = 0;
  for (const gram of left) {
    if (right.has(gram)) shared += 1;
  }
  return (2 * shared) / (left.size + right.size);
}

export function copyRatio(answer: string, text: string): number {
  const words = normalize(answer).split(" ").filter(Boolean);
  if (words.length < 7) return 0;
  const source = normalize(text).split(" ").filter(Boolean);
  const shingles = new Set<string>();
  for (let index = 0; index <= source.length - 5; index += 1) {
    shingles.add(source.slice(index, index + 5).join(" "));
  }
  let total = 0;
  let hits = 0;
  for (let index = 0; index <= words.length - 5; index += 1) {
    total += 1;
    if (shingles.has(words.slice(index, index + 5).join(" "))) hits += 1;
  }
  return total === 0 ? 0 : hits / total;
}

const ARTICLES = new Set(["der", "die", "das"]);

function nounOf(value: string): string {
  const words = normalize(value).split(" ").filter(Boolean);
  if (words.length > 1 && ARTICLES.has(words[0])) return words.slice(1).join(" ");
  return words.join(" ");
}

export function gradeVocabItem(
  given: string,
  answer: string,
  accepted: string[] = [],
): { points: number; achieved: boolean } {
  const cleaned = normalize(given);
  if (!cleaned) return { points: 0, achieved: false };

  const targets = [answer, ...accepted].map(normalize);
  if (targets.includes(cleaned)) return { points: 1, achieved: true };

  if (targets.some((target) => ` ${cleaned} `.includes(` ${target} `))) {
    return { points: 1, achieved: true };
  }

  const noun = nounOf(given);
  const article = normalize(given).split(" ")[0];
  const sameNoun = targets.some((target) => nounOf(target) === noun);
  if (sameNoun && ARTICLES.has(article)) return { points: 1, achieved: true };
  if (sameNoun) return { points: 0.5, achieved: false };

  const close = targets.some((target) => similarity(given, target) >= 0.86);
  return close ? { points: 0.5, achieved: false } : { points: 0, achieved: false };
}

export function criterionMet(criterion: DshCriterion, answer: string): boolean {
  const normalized = normalize(answer);
  if (!normalized) return false;

  if (criterion.numeric) {
    const numbers = (normalized.match(/\d+(?: \d+)?|\d+/g) ?? []).map((raw) =>
      Number.parseFloat(raw.replace(/\s+/g, "")),
    );
    const [min, max] = criterion.numeric;
    if (numbers.some((value) => value >= min && value <= max)) return true;
  }

  if (criterion.keywords) {
    return criterion.keywords.some((keyword) => normalized.includes(normalize(keyword)));
  }

  return false;
}

function gradeCriteria(
  criteria: DshCriterion[],
  answer: string,
  maxPoints: number,
): { met: CriterionResult[]; points: number } {
  const met = criteria.map((criterion) => ({
    id: criterion.id,
    label: criterion.label,
    achieved: criterionMet(criterion, answer),
  }));
  const achieved = met.filter((criterion) => criterion.achieved).length;
  const ratio = criteria.length === 0 ? 0 : achieved / criteria.length;
  return { met, points: Math.round(maxPoints * ratio * 2) / 2 };
}

function gradeVocab(question: DshVocabQuestion, answers: DshAnswers): QuestionResult {
  const items = question.items.map((item) => {
    const given = answers[item.id] ?? "";
    const { points } = gradeVocabItem(given, item.answer, item.accepted);
    return {
      id: item.id,
      points,
      max: 1,
      achieved: points === 1,
      expected: item.answer,
      given,
    };
  });

  const points = items.reduce((sum, item) => sum + item.points, 0);
  return {
    id: question.id,
    points,
    max: question.items.length,
    source: "auto",
    met: items.map((item) => ({
      id: item.id,
      label: item.expected,
      achieved: item.achieved,
    })),
    items,
  };
}

const TRUE_VALUES = new Set(["true", "richtig", "korrekt", "ja", "x", "1"]);const FALSE_VALUES = new Set(["false", "falsch", "nicht korrekt", "nein", "0"]);

function parseBoolean(value: string): boolean | null {
  const normalized = normalize(value);
  if (TRUE_VALUES.has(normalized)) return true;
  if (FALSE_VALUES.has(normalized)) return false;
  return null;
}

function gradeTrueFalse(
  question: DshTrueFalseQuestion,
  answers: DshAnswers,
): QuestionResult {
  const perStatement = question.points / question.statements.length;
  const items = question.statements.map((statement) => {
    const given = answers[statement.id] ?? "";
    const parsed = parseBoolean(given);
    const correct = parsed !== null && parsed === statement.correct;
    return {
      id: statement.id,
      points: correct ? perStatement : 0,
      max: perStatement,
      achieved: correct,
      expected: statement.correct ? "richtig" : "nicht korrekt",
      given,
    };
  });

  return {
    id: question.id,
    points: items.reduce((sum, item) => sum + item.points, 0),
    max: question.points,
    source: "auto",
    met: question.statements.map((statement, index) => ({
      id: statement.id,
      label: statement.justification,
      achieved: items[index].achieved,
    })),
    items,
  };
}

function gradeStructureTask(task: DshStructureTask, given: string): QuestionResult {
  if (task.criteria && task.criteria.length > 0) {
    const { met, points } = gradeCriteria(task.criteria, given, task.points);
    return {
      id: task.id,
      points,
      max: task.points,
      source: "local",
      met,
      feedback: task.explanation,
    };
  }

  const quality = compareRewrite(given, task.solutions ?? []);
  const points = quality >= 1 ? task.points : quality >= 0.7 ? task.points / 2 : 0;
  return {
    id: task.id,
    points,
    max: task.points,
    source: "local",
    met: [],
    feedback: task.explanation,
  };
}

/**
 * Qualité d'une reformulation : 1 = réponse acceptée, 0,7–0,99 = forme proche,
 * 0 = à retravailler. Utilisée par la simulation et par l'entraîneur.
 */
export function compareRewrite(given: string, solutions: string[]): number {
  const normalized = normalize(given);
  if (!normalized || solutions.length === 0) return 0;

  const exact = solutions.some((solution) => {
    const target = normalize(solution);
    return normalized === target || normalized.includes(target);
  });
  if (exact) return 1;

  const best = Math.max(...solutions.map((solution) => similarity(given, solution)));
  if (best >= 0.9) return 1;
  return best;
}

const COPY_THRESHOLD = 0.4;

function gradeOpenQuestion(
  question: DshOpenQuestion,
  given: string,
  text: string,
): QuestionResult {
  const { met, points } = gradeCriteria(question.criteria, given, question.points);
  const copy = copyRatio(given, text);
  const penalized = copy >= COPY_THRESHOLD ? Math.round(points * 0.75 * 2) / 2 : points;

  return {
    id: question.id,
    points: penalized,
    max: question.points,
    source: "local",
    met,
    copy,
    feedback:
      copy >= COPY_THRESHOLD
        ? "Passages recopiés du texte : le barème DSH prévoit un retrait de points. Reformulez avec vos propres mots."
        : undefined,
  };
}

function textOf(simulation: DshSimulation): string {
  return simulation.text.lines.map((line) => line.t).join(" ");
}

export function summarize(simulation: DshSimulation, results: Record<string, QuestionResult>) {
  const sum = (ids: string[]) =>
    Math.round(ids.reduce((total, id) => total + (results[id]?.points ?? 0), 0) * 10) / 10;

  const leseverstehen = sum(simulation.leseverstehen.map((question) => question.id));
  const strukturen = sum(simulation.strukturen.map((task) => task.id));

  return {
    leseverstehen: { points: leseverstehen, max: 30 },
    strukturen: { points: strukturen, max: 15 },
    total: toLevel({ points: leseverstehen + strukturen, max: 45 }),
  };
}

export function evaluateSimulation(
  simulation: DshSimulation,
  answers: DshAnswers,
): DshEvaluation {
  const results: Record<string, QuestionResult> = {};
  const text = textOf(simulation);

  for (const question of simulation.leseverstehen) {
    results[question.id] =
      question.kind === "vocab"
        ? gradeVocab(question, answers)
        : question.kind === "truefalse"
          ? gradeTrueFalse(question, answers)
          : gradeOpenQuestion(question, answers[question.id] ?? "", text);
  }

  for (const task of simulation.strukturen) {
    results[task.id] = gradeStructureTask(task, answers[task.id] ?? "");
  }

  return { results, ...summarize(simulation, results) };
}

/** Les questions ouvertes qui gagnent à être relues par le correcteur IA. */
export function openQuestionIds(simulation: DshSimulation): string[] {
  return [
    ...simulation.leseverstehen
      .filter((question) => question.kind === "open")
      .map((question) => question.id),
    ...simulation.strukturen.filter((task) => task.criteria).map((task) => task.id),
  ];
}

export function hasAnswer(answers: DshAnswers): boolean {
  return Object.values(answers).some((value) => value.trim().length > 0);
}

export function countAnswered(answers: DshAnswers): number {
  return Object.values(answers).filter((value) => value.trim().length > 0).length;
}
