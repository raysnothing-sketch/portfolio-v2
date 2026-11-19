/**
 * Modèle de contenu d'une simulation DSH.
 *
 * Tout est typé et sérialisable : le même objet alimente l'interface, la
 * correction locale et le prompt envoyé au correcteur IA. Aucune question
 * n'est codée en dur dans les composants.
 */

import type { DshTextLine } from "@/lib/dsh/texts";

export type DshPart = "leseverstehen" | "strukturen";

export type DshSkill =
  | "wortschatz"
  | "verstehen"
  | "transfer"
  | "grafik"
  | "korrekt";

/** Critère d'attribution des points, repris du Lösungsschlüssel. */
export type DshCriterion = {
  id: string;
  label: string;
  /** Formulations alternatives : une seule occurrence suffit. */
  keywords?: string[];
  /** Plage numérique acceptée (rendements, pourcentages, températures…). */
  numeric?: [number, number];
};

export type DshChart =
  | {
      kind: "bars";
      caption: string;
      unit?: string;
      bars: { label: string; value: number | null }[];
    }
  | {
      kind: "curve";
      caption: string;
      xLabel: string;
      yLabel: string;
      points: { label: string; value: number | null }[];
    };

export type DshVocabItem = {
  id: string;
  /** Définition du texte ou référence à une illustration. */
  prompt: string;
  /** Réponse attendue, article inclus pour les noms. */
  answer: string;
  accepted?: string[];
  /** Illustration affichée à la place d'une définition. */
  illustration?: "electrolyseur" | "neuronales-netz";
  example?: boolean;
};

export type DshOpenQuestion = {
  kind: "open";
  id: string;
  number: string;
  skill: DshSkill;
  prompt: string;
  points: number;
  criteria: DshCriterion[];
  sampleAnswer: string;
  chart?: DshChart;
  /** Consigne de longueur indicative, en mots. */
  minWords?: number;
};

export type DshVocabQuestion = {
  kind: "vocab";
  id: string;
  number: string;
  prompt: string;
  points: number;
  items: DshVocabItem[];
};

export type DshStatement = {
  id: string;
  text: string;
  correct: boolean;
  justification: string;
};

export type DshTrueFalseQuestion = {
  kind: "truefalse";
  id: string;
  number: string;
  prompt: string;
  points: number;
  example: { text: string; correct: boolean; justification: string };
  statements: DshStatement[];
};

export type DshQuestion = DshVocabQuestion | DshOpenQuestion | DshTrueFalseQuestion;

export type DshStructureType =
  | "partizipialattribut"
  | "passiversatz"
  | "nominalisierung"
  | "konnektor"
  | "konjunktiv"
  | "bezug";

export type DshStructureTask = {
  id: string;
  label: string;
  points: number;
  type: DshStructureType;
  instruction: string;
  /** Phrase complète de départ, avec la partie soulignée. */
  prompt: string;
  highlight?: string;
  /** Gabarit : la réponse se place entre `before` et `after`. */
  template?: { before: string; after: string };
  /** Réponses acceptées (comparaison normalisée + similarité). */
  solutions?: string[];
  /** Pour les tâches d'explication : critères au lieu de solutions. */
  criteria?: DshCriterion[];
  explanation: string;
  modelAnswer: string;
};

export type DshSimulation = {
  id: string;
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  topic: string;
  minutes: number;
  text: { lines: DshTextLine[]; wordCount: number };
  leseverstehen: DshQuestion[];
  strukturen: DshStructureTask[];
  source: string;
};

export type DshScore = {
  points: number;
  max: number;
};

export type DshLevelKey = "none" | "dsh1" | "dsh2" | "dsh3";

export type DshLevel = DshScore & {
  percent: number;
  level: DshLevelKey;
};
