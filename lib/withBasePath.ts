// lib/paths.ts
export function withBasePath(path: string) {
  const base = "/pulseroom-landing";
  
  // If the path already starts with the base, don't double it
  if (path.startsWith(base)) return path;
  
  // Ensure the path starts with a slash
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  return `${base}${cleanPath}`;
}