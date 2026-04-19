import type { MetadataRoute } from 'next';

import { getSiteBaseUrl, localePath } from '@/lib/site';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteBaseUrl();
  return routing.locales.map((locale) => ({
    url: `${base}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: locale === 'en' ? 1 : 0.9,
  }));
}
