export function getSiteBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://altons.trade'
  );
}

/** Публичные URL: `en` → `/`, `ru` → `/ru`, `uk` → `/uk` */
export function localePath(locale: string, path: string = ''): string {
  if (locale === 'en') {
    return path || '/';
  }
  return `/${locale}${path}`;
}
