/**
 * OpenNext copie le standalone de Next.js dans son bundle. Sous Windows sans
 * mode développeur, `symlinkSync` échoue avec EPERM sur les liens pnpm.
 * On remplace donc les liens symboliques du standalone par de vraies copies
 * avant de lancer `opennextjs-cloudflare build --skipBuild`.
 */
import { cpSync, existsSync, lstatSync, readdirSync, readlinkSync, rmSync } from "node:fs";
import path from "node:path";

const root = path.resolve(".next/standalone");

if (!existsSync(root)) {
  console.error("Standalone introuvable – lancez d'abord `next build`.");
  process.exit(1);
}

let replaced = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = lstatSync(full);
    if (!stat.isSymbolicLink()) {
      if (stat.isDirectory()) walk(full);
      continue;
    }

    const target = readlinkSync(full);
    const resolved = path.isAbsolute(target) ? target : path.resolve(path.dirname(full), target);
    if (!resolved.startsWith(root) || !existsSync(resolved)) continue;

    rmSync(full, { recursive: true, force: true });
    cpSync(resolved, full, { recursive: true, dereference: true });
    replaced += 1;
  }
}

walk(root);
console.log(`${replaced} liens symboliques remplacés dans le standalone.`);
