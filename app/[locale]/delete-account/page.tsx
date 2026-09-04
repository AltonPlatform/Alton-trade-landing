import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { DeleteAccountPage } from '@/components/landing/DeleteAccountPage';
import { getSiteBaseUrl, localePath } from '@/lib/site';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const base = getSiteBaseUrl();
  const path = localePath(locale, '/delete-account');
  const canonical = `${base}${path}`;
  const t = await getTranslations({ locale, namespace: 'DeleteAccount' });

  const ogLocale =
    locale === 'uk' ? 'uk_UA' : locale === 'ru' ? 'ru_RU' : 'en_US';

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical,
      languages: {
        en: `${base}${localePath('en', '/delete-account')}`,
        ru: `${base}${localePath('ru', '/delete-account')}`,
        uk: `${base}${localePath('uk', '/delete-account')}`,
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

  return <DeleteAccountPage />;
}
