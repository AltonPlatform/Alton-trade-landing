import type { MetadataRoute } from 'next';

import { getSiteBaseUrl, localePath } from '@/lib/site';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteBaseUrl();
  const pages = ['', '/support'] as const;

  return pages.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${base}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? (locale === 'en' ? 1 : 0.9) : 0.7,
    })),
  );
}
