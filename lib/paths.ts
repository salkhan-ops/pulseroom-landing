// lib/paths.ts

export function withBasePath(path: string): string {
  // The prefix defined in your next.config.ts
  const prefix = "/pulseroom-landing";

  // 1. If path is already absolute (http://...), return as is
  if (path.startsWith("http") || path.startsWith("data:")) {
    return path;
  }

  // 2. Ensure the path starts with a slash
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // 3. If the path already has the prefix, don't double it
  if (cleanPath.startsWith(prefix)) {
    return cleanPath;
  }

  // 4. Return the prefixed path
  return `${prefix}${cleanPath}`;
}