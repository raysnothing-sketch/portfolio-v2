import { z } from "zod";

import { aiConfigured } from "@/lib/dsh/ai";
import { getModule, type DshModuleKey } from "@/lib/dsh/modules";
import { gradeModuleTasks, type ModuleAiTask } from "@/lib/dsh/module-ai";

const bodySchema = z.object({
  module: z.enum(["hoeren", "sprechen", "schreiben"]),
  answers: z.record(z.string().max(80), z.string().max(8000)),
});

function tasksFor(moduleKey: DshModuleKey, answers: Record<string, string>): ModuleAiTask[] {
  const exam = getModule(moduleKey);
  const tasks: ModuleAiTask[] = [];

  if (exam.key === "hoeren") {
    for (const question of exam.questions) {
      if (question.kind !== "open") continue;
      const answer = (answers[question.id] ?? "").slice(0, 2500);
      if (!answer.trim()) continue;
      tasks.push({
        id: question.id,
        number: question.number,
        prompt: question.prompt,
        maxPoints: question.points,
        criteria: question.criteria ?? [],
        reference: question.sampleAnswer ?? "",
        answer,
      });
    }
  }

  if (exam.key === "sprechen") {
    for (const task of exam.tasks) {
      const answer = (answers[task.id] ?? "").slice(0, 6000);
      if (!answer.trim()) continue;
      tasks.push({
        id: task.id,
        number: task.number,
        prompt: task.prompt,
        maxPoints: task.criteria.reduce((sum, c) => sum + c.points, 0),
        criteria: task.criteria,
        reference: task.sampleAnswer,
        answer,
      });
    }
  }

  if (exam.key === "schreiben") {
    for (const task of exam.tasks) {
      const answer = (answers[task.id] ?? "").slice(0, 8000);
      if (!answer.trim()) continue;
      tasks.push({
        id: task.id,
        number: task.number,
        prompt: task.prompt,
        maxPoints: task.criteria.reduce((sum, c) => sum + c.points, 0),
        criteria: task.criteria,
        reference: task.sampleOutline,
        answer,
        material: task.material,
      });
    }
  }

  return tasks;
}

export async function POST(request: Request) {
  if (!aiConfigured()) return Response.json({ error: "not_configured" }, { status: 501 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) return Response.json({ error: "invalid_body" }, { status: 400 });

  const tasks = tasksFor(parsed.data.module, parsed.data.answers);
  if (tasks.length === 0) return Response.json({ results: [], summary: undefined });

  try {
    return Response.json(await gradeModuleTasks(tasks));
  } catch (error) {
    console.error("[dsh] module AI evaluation failed", error);
    return Response.json({ error: "ai_failed" }, { status: 502 });
  }
}
