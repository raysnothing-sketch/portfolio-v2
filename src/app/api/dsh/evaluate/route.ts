import { z } from "zod";

import { getSimulation } from "@/lib/dsh";
import { aiConfigured, gradeWithAi } from "@/lib/dsh/ai";

const bodySchema = z.object({
  slug: z.string().min(1).max(120),
  answers: z.record(z.string().max(80), z.string().max(2500)),
});

export async function POST(request: Request) {
  if (!aiConfigured()) {
    return Response.json({ error: "not_configured" }, { status: 501 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  const simulation = getSimulation(parsed.data.slug);
  if (!simulation) {
    return Response.json({ error: "unknown_simulation" }, { status: 404 });
  }

  try {
    const evaluation = await gradeWithAi(simulation, parsed.data.answers);
    return Response.json(evaluation);
  } catch (error) {
    console.error("[dsh] AI evaluation failed", error);
    return Response.json({ error: "ai_failed" }, { status: 502 });
  }
}
