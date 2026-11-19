import { aiModelName, callProvider } from "@/lib/dsh/ai";
import type { Criterion } from "@/lib/dsh/modules";

/**
 * Correcteur IA générique pour Hörverstehen / Sprechen / Schreiben.
 * Les données restent côté serveur : le client envoie seulement ses réponses.
 */

export type ModuleAiTask = {
  id: string;
  number: string;
  prompt: string;
  maxPoints: number;
  criteria: Criterion[];
  reference: string;
  answer: string;
  material?: string[];
};

export type ModuleAiResult = {
  id: string;
  points: number;
  criteria: { id: string; achieved: boolean; comment?: string }[];
  feedback: string;
  rewrite?: string;
};

const SYSTEM = `Du bist erfahrene DSH-Prüferin an einer deutschen Universität. Du bewertest freie Antworten in den Prüfungsteilen Hörverstehen, Sprechen (Transkript) und Schreiben.

Regeln:
- Bewerte ausschließlich anhand der angegebenen Kriterien und der Referenzlösung.
- Vergib Teilpunkte in 0,5-Schritten. Sei streng, aber fair.
- Berücksichtige bei Sprechen, dass ein Transkript keine Aussprache zeigt: bewerte Inhalt, Struktur und Sprache, nicht die Fluenz.
- Gib konkrete, lernförderliche Rückmeldung auf Deutsch in maximal drei Sätzen.
- "rewrite" ist eine verbesserte Fassung der Antwort, die die volle Punktzahl erreicht.

Antworte ausschließlich mit gültigem JSON:
{"results":[{"id":"...","points":2.5,"criteria":[{"id":"...","achieved":true,"comment":"..."}],"feedback":"...","rewrite":"..."}],"summary":"..."}`;

export async function gradeModuleTasks(tasks: ModuleAiTask[]) {
  const model = aiModelName();
  const payload = JSON.stringify({ aufgaben: tasks }, null, 1);
  const messages = [
    { role: "system" as const, content: SYSTEM },
    {
      role: "user" as const,
      content: `Bewerte die folgenden Antworten.\\n\\n${payload}`,
    },
  ];

  let response = await callProvider(messages, true);
  if (!response.ok && response.status === 400) response = await callProvider(messages, false);
  if (!response.ok) throw new Error(`AI provider ${response.status}`);

  const body = (await response.json()) as { choices?: { message?: { content?: string } }[] };
  const content = body.choices?.[0]?.message?.content ?? "";
  if (!content) throw new Error("AI response empty");

  let parsed: { results?: unknown; summary?: unknown };
  try {
    parsed = JSON.parse(content) as typeof parsed;
  } catch {
    const start = content.indexOf("{");
    const end = content.lastIndexOf("}");
    if (start === -1 || end === -1) throw new Error("AI response is not JSON");
    parsed = JSON.parse(content.slice(start, end + 1)) as typeof parsed;
  }

  const byId = new Map(tasks.map((task) => [task.id, task]));
  const results: ModuleAiResult[] = [];
  for (const entry of Array.isArray(parsed.results) ? parsed.results : []) {
    if (!entry || typeof entry !== "object") continue;
    const item = entry as Record<string, unknown>;
    const id = typeof item.id === "string" ? item.id : "";
    const task = byId.get(id);
    if (!task) continue;

    const rawPoints = typeof item.points === "number" ? item.points : 0;
    results.push({
      id,
      points: Math.max(0, Math.min(task.maxPoints, Math.round(rawPoints * 2) / 2)),
      criteria: Array.isArray(item.criteria)
        ? item.criteria
            .filter((c): c is Record<string, unknown> => !!c && typeof c === "object")
            .map((c) => ({
              id: typeof c.id === "string" ? c.id : "",
              achieved: c.achieved === true,
              comment: typeof c.comment === "string" ? c.comment : undefined,
            }))
            .filter((c) => c.id.length > 0)
        : [],
      feedback: typeof item.feedback === "string" ? item.feedback : "",
      rewrite: typeof item.rewrite === "string" ? item.rewrite : undefined,
    });
  }

  if (results.length === 0) throw new Error("AI response contained no usable results");
  return {
    results,
    summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
    model,
  };
}
