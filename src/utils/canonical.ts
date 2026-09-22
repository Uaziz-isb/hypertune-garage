export function normalizeCanonicalUrl(inputPathOrUrl: string, baseUrl: string = 'https://hypertunegarage.pk'): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  let path = inputPathOrUrl || '/';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    try {
      const u = new URL(path);
      path = u.pathname;
    } catch {
      path = path.replace(/^https?:\/\/[^/]+/, '');
    }
  }

  path = path.split('?')[0].split('#')[0];
  const trimmed = path.replace(/^\/+|\/+$/g, '');

  if (!trimmed) {
    return `${cleanBase}/`;
  }

  return `${cleanBase}/${trimmed}/`;
}
