'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Link } from '@/i18n/navigation';

import { LocaleFlag } from './LocaleFlag';

const locales = ['en', 'ru', 'uk'] as const;

type SupportHeaderProps = {
  /** Path for locale switcher links (e.g. `/support`, `/delete-account`). */
  path?: string;
};

export function SupportHeader({ path = '/support' }: SupportHeaderProps) {
  const t = useTranslations('Support');
  const tLang = useTranslations('Lang');
  const locale = useLocale();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const labelForLocale = (l: string) => {
    if (l === 'en') return tLang('en');
    if (l === 'ru') return tLang('ru');
    return tLang('uk');
  };

  const closeLang = useCallback(() => setLangOpen(false), []);

  useEffect(() => {
    if (!langOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!langRef.current?.contains(e.target as Node)) {
        closeLang();
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [langOpen, closeLang]);

  useEffect(() => {
    const header = document.getElementById('header');
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 40) {
        header.classList.add('glass-active');
      } else {
        header.classList.remove('glass-active');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="header" className="fixed top-0 left-0 w-full z-50">
      <div className="px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-2 lg:px-[144px] h-[80px]">
          <Link href="/" className="shrink-0">
            <Image
              src="/asset/new/logo.svg"
              alt=""
              width={132}
              height={44}
              className="h-[44px] w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative" ref={langRef}>
              <button
                type="button"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                aria-label={tLang('switcherAria')}
                className="flex items-center gap-2 text-white text-base hover:text-brand-accent-light transition-colors"
                onClick={() => setLangOpen((v) => !v)}
              >
                <LocaleFlag locale={locale as 'en' | 'ru' | 'uk'} />
                <span className="hidden sm:inline">{labelForLocale(locale)}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 transition-transform ${langOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {langOpen ? (
                <ul
                  role="listbox"
                  className="absolute right-0 mt-2 min-w-[150px] rounded-lg border border-brand-border bg-brand-card py-1 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.24)] z-[60]"
                >
                  {locales.map((l) => (
                    <li key={l} role="option" aria-selected={locale === l}>
                      <Link
                        href={path}
                        locale={l}
                        className={`flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors ${
                          locale === l ? 'bg-white/10 font-semibold' : ''
                        }`}
                        onClick={closeLang}
                      >
                        <LocaleFlag locale={l} />
                        {labelForLocale(l)}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#1b1d2f] border border-brand-border text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              {t('backHome')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
