import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "@/lib/env";
import * as schema from "./schema";

/**
 * Client libSQL unique par processus.
 * Le client est sans état : on le garde en singleton pour éviter
 * de recréer une connexion à chaque requête.
 */
const globalForDb = globalThis as unknown as {
  libsql?: ReturnType<typeof createClient>;
};

const client =
  globalForDb.libsql ??
  createClient({
    url: env.tursoUrl(),
    authToken: env.tursoToken(),
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.libsql = client;
}

export const db = drizzle(client, { schema });
export { schema };
