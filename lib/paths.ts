export function withBasePath(path: string): string {
  if (path.startsWith("http") || path.startsWith("data:")) {
    return path;
  }

  return path.startsWith("/") ? path : `/${path}`;
}