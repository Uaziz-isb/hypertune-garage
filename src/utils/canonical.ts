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

const MONTHS: Record<string, string> = {
  january: '01',
  february: '02',
  march: '03',
  april: '04',
  may: '05',
  june: '06',
  july: '07',
  august: '08',
  september: '09',
  october: '10',
  november: '11',
  december: '12',
};

export function toIsoDate(dateStr: string): string {
  if (!dateStr) return '';
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) return dateStr.slice(0, 10);
  const m = dateStr.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);
  if (m) {
    const mon = MONTHS[m[1].toLowerCase()];
    if (mon) return `${m[3]}-${mon}-${m[2].padStart(2, '0')}`;
  }
  return dateStr;
}

export function toAbsoluteImageUrl(img: string, baseUrl: string = 'https://hypertunegarage.pk'): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  if (!img) return `${cleanBase}/images/hypertune_logo.webp`;
  if (img.startsWith('http://') || img.startsWith('https://')) return img;
  return `${cleanBase}/${img.replace(/^\/+/, '')}`;
}

