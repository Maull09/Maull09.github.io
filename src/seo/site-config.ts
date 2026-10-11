export type SiteConfig = { url: string | null; indexable: boolean };

export function getSiteConfig(env: NodeJS.ProcessEnv): SiteConfig {
  const value = env.SITE_URL?.trim();
  let url: string | null = null;

  if (env.SITE_INDEXABLE && !["true", "false"].includes(env.SITE_INDEXABLE)) {
    throw new Error("SITE_INDEXABLE must be true or false.");
  }

  if (value) {
    let parsed: URL;
    try {
      parsed = new URL(value);
    } catch {
      throw new Error("SITE_URL must be a valid HTTPS origin.");
    }
    if (
      parsed.protocol !== "https:" || parsed.username || parsed.password ||
      parsed.pathname !== "/" || parsed.search || parsed.hash ||
      ["localhost", "127.0.0.1", "[::1]"].includes(parsed.hostname)
    ) {
      throw new Error("SITE_URL must be a public HTTPS origin without credentials, a path, query, or fragment.");
    }
    url = parsed.origin;
  }

  if (env.SITE_INDEXABLE === "true" && !url) {
    throw new Error("Set SITE_URL before enabling SITE_INDEXABLE.");
  }

  return {
    url,
    indexable: env.NODE_ENV === "production" && env.SITE_INDEXABLE === "true" && url !== null,
  };
}

export const siteConfig = getSiteConfig(process.env);
