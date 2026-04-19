import { setRequestLocale } from 'next-intl/server';

import { LandingPage } from '@/components/landing/LandingPage';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <LandingPage />;
}
