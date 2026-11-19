import { env } from "@/lib/env";

export type GithubRepo = {
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  topics: string[];
  fork: boolean;
  archived: boolean;
  updatedAt: string;
  createdAt: string;
};

type RawRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  updated_at: string;
  created_at: string;
};

/**
 * Récupère les dépôts publics du compte GitHub.
 *
 * Encapsulé dans `use cache` : le résultat rejoint le shell prérendu et n'est
 * revalidé qu'après le profil `hours`, ce qui évite de taper l'API GitHub
 * à chaque requête (et donc d'exploser le rate limit).
 */
export async function getGithubRepos(): Promise<GithubRepo[]> {
  const user = env.githubUser();
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "portfolio-v2",
  };

  const token = env.githubToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&sort=updated&type=owner`,
      { headers },
    );

    if (!response.ok) {
      console.error(`[github] ${response.status} ${response.statusText}`);
      return [];
    }

    const repos = (await response.json()) as RawRepo[];

    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        topics: repo.topics ?? [],
        fork: repo.fork,
        archived: repo.archived,
        updatedAt: repo.updated_at,
        createdAt: repo.created_at,
      }));
  } catch (error) {
    // Le build ne doit jamais casser à cause de l'API GitHub.
    console.error("[github] échec de récupération", error);
    return [];
  }
}
