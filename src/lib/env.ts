/**
 * Accès centralisé aux variables d'environnement.
 * On évite d'importer `process.env` partout : une seule source de vérité,
 * des messages d'erreur explicites au build.
 */

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Variable d'environnement manquante : ${name}. Copiez .env.example vers .env.local.`,
    );
  }
  return value;
}

export const env = {
  tursoUrl: () => required("TURSO_DATABASE_URL"),
  tursoToken: () => required("TURSO_AUTH_TOKEN"),
  githubToken: () => process.env.GITHUB_TOKEN ?? "",
  githubUser: () => process.env.GITHUB_USERNAME ?? "raysnothing-sketch",
  siteUrl: () =>
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
};
