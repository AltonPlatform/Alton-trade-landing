import type { ReactNode } from 'react';
import { Inter, Orbitron, Play } from 'next/font/google';
import { getLocale } from 'next-intl/server';

import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  weight: '900',
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const play = Play({
  weight: '700',
  subsets: ['latin', 'cyrillic'],
  variable: '--font-play',
});

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const htmlLang = locale;
  const displayFont = locale === 'en' ? 'orbitron' : 'play';

  return (
    <html
      lang={htmlLang}
      data-display-font={displayFont}
      className={`${inter.variable} ${orbitron.variable} ${play.variable}`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} bg-brand-bg antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
