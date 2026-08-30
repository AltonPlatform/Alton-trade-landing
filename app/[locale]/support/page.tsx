import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { SupportPage } from '@/components/landing/SupportPage';
import { getSiteBaseUrl, localePath } from '@/lib/site';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const base = getSiteBaseUrl();
  const path = localePath(locale, '/support');
  const canonical = `${base}${path}`;
  const t = await getTranslations({ locale, namespace: 'Support' });

  const ogLocale =
    locale === 'uk' ? 'uk_UA' : locale === 'ru' ? 'ru_RU' : 'en_US';

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical,
      languages: {
        en: `${base}${localePath('en', '/support')}`,
        ru: `${base}${localePath('ru', '/support')}`,
        uk: `${base}${localePath('uk', '/support')}`,
      },
    },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: canonical,
      locale: ogLocale,
      type: 'website',
    },
  };
}

export default async function Page(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <SupportPage />;
}
