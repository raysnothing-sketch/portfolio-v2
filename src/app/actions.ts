"use server";

import { sql } from "drizzle-orm";

import { db } from "@/lib/db";
import { pageViews } from "@/lib/db/schema";

/**
 * Incrémente le compteur de visites de la page d'accueil.
 * Upsert atomique : pas de lecture préalable, donc pas de race condition.
 */
export async function incrementViews(): Promise<number> {
  const rows = await db
    .insert(pageViews)
    .values({ id: "home", count: 1 })
    .onConflictDoUpdate({
      target: pageViews.id,
      set: {
        count: sql`${pageViews.count} + 1`,
        updatedAt: new Date(),
      },
    })
    .returning({ count: pageViews.count });

  return rows[0]?.count ?? 0;
}
