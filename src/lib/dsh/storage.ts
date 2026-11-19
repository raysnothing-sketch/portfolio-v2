"use client";

import type { DshAnswers } from "@/lib/dsh/scoring";
import type { DshLevelKey } from "@/lib/dsh/types";

/**
 * Persistance locale, sans compte ni serveur.
 * Tout est encapsulé dans un try/catch : navigation privée, quota plein ou
 * JSON corrompu ne doivent jamais casser la session d'entraînement.
 */

const PROGRESS_KEY = "dsh:progress:v1";
const DRILL_KEY = "dsh:drills:v1";
const MODULE_KEY = "dsh:modules:v1";

export type StoredAttempt = {
  simulationId: string;
  at: string;
  points: number;
  max: number;
  percent: number;
  level: DshLevelKey;
};

export type Progress = {
  attempts: StoredAttempt[];
  answers: Record<string, DshAnswers>;
};

export type DrillStats = {
  answered: number;
  correct: number;
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota oder privater Modus – Training läuft weiter */
  }
}

function emptyProgress(): Progress {
  return { attempts: [], answers: {} };
}

export function loadProgress(): Progress {
  const stored = read<Partial<Progress>>(PROGRESS_KEY, emptyProgress());
  return {
    attempts: Array.isArray(stored.attempts) ? stored.attempts : [],
    answers: stored.answers && typeof stored.answers === "object" ? stored.answers : {},
  };
}

export function loadAnswers(simulationId: string): DshAnswers | null {
  return loadProgress().answers[simulationId] ?? null;
}

export function saveAnswers(simulationId: string, answers: DshAnswers): void {
  const progress = loadProgress();
  progress.answers[simulationId] = answers;
  write(PROGRESS_KEY, progress);
}

export function recordAttempt(attempt: StoredAttempt): void {
  const progress = loadProgress();
  progress.attempts = [attempt, ...progress.attempts].slice(0, 40);
  write(PROGRESS_KEY, progress);
}

export function clearAttempts(): void {
  const progress = loadProgress();
  progress.attempts = [];
  write(PROGRESS_KEY, progress);
}

export function loadDrillStats(): DrillStats {
  return read<DrillStats>(DRILL_KEY, { answered: 0, correct: 0 });
}

export function saveDrillStats(stats: DrillStats): void {
  write(DRILL_KEY, stats);
}

/* --- Modules Hörverstehen / Sprechen / Schreiben ------------------------ */

export type ModuleAttempt = {
  moduleId: string;
  at: string;
  points: number;
  max: number;
  percent: number;
  level: DshLevelKey;
};

export type ModuleProgress = {
  answers: Record<string, Record<string, string>>;
  attempts: ModuleAttempt[];
};

function emptyModuleProgress(): ModuleProgress {
  return { answers: {}, attempts: [] };
}

export function loadModuleProgress(): ModuleProgress {
  const stored = read<Partial<ModuleProgress>>(MODULE_KEY, emptyModuleProgress());
  return {
    answers:
      stored.answers && typeof stored.answers === "object" ? stored.answers : {},
    attempts: Array.isArray(stored.attempts) ? stored.attempts : [],
  };
}

export function loadModuleAnswers(moduleId: string): Record<string, string> | null {
  return loadModuleProgress().answers[moduleId] ?? null;
}

export function saveModuleAnswers(moduleId: string, answers: Record<string, string>): void {
  const progress = loadModuleProgress();
  progress.answers[moduleId] = answers;
  write(MODULE_KEY, progress);
}

export function recordModuleAttempt(attempt: ModuleAttempt): void {
  const progress = loadModuleProgress();
  progress.attempts = [attempt, ...progress.attempts].slice(0, 40);
  write(MODULE_KEY, progress);
}

export function loadModuleAttempts(moduleId?: string): ModuleAttempt[] {
  const attempts = loadModuleProgress().attempts;
  return moduleId ? attempts.filter((attempt) => attempt.moduleId === moduleId) : attempts;
}
