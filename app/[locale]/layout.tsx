import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { getSiteBaseUrl, localePath } from '@/lib/site';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const base = getSiteBaseUrl();
  const path = localePath(locale);
  const canonical = `${base}${path}`;
  const t = await getTranslations({ locale, namespace: 'Meta' });

  const ogLocale =
    locale === 'uk' ? 'uk_UA' : locale === 'ru' ? 'ru_RU' : 'en_US';

  return {
    metadataBase: new URL(base),
    title: t('title'),
    description: t('description'),
    authors: [{ name: t('author') }],
    alternates: {
      canonical,
      languages: {
        en: `${base}${localePath('en')}`,
        ru: `${base}${localePath('ru')}`,
        uk: `${base}${localePath('uk')}`,
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('description'),
      url: canonical,
      siteName: t('siteName'),
      locale: ogLocale,
      type: 'website',
      images: [{ url: `${base}/favicon/favicon.svg`, width: 512, height: 512 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
    },
  };
}

export default async function LocaleLayout(props: Props) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>{props.children}</NextIntlClientProvider>
  );
}
