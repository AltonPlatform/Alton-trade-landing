'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { Link } from '@/i18n/navigation';

import { LocaleFlag } from './LocaleFlag';

const locales = ['en', 'ru', 'uk'] as const;

export function Header() {
  const t = useTranslations('Nav');
  const tLang = useTranslations('Lang');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
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

  useLayoutEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

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

          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#solution"
              className="text-white text-base hover:text-brand-accent-light transition-colors"
            >
              {t('solution')}
            </a>
            <a
              href="#ecosystem"
              className="text-white text-base hover:text-brand-accent-light transition-colors"
            >
              {t('ecosystem')}
            </a>
            <a
              href="#how-it-works"
              className="text-white text-base hover:text-brand-accent-light transition-colors"
            >
              {t('howItWorks')}
            </a>
            <a
              href="#why-alton"
              className="text-white text-base hover:text-brand-accent-light transition-colors"
            >
              {t('whyAlton')}
            </a>
            <a
              href="#roadmap"
              className="text-white text-base hover:text-brand-accent-light transition-colors"
            >
              {t('roadmap')}
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
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
                <span>{labelForLocale(locale)}</span>
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
                        href="/"
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

            <a
              href="http://waitlist.altons.trade/"
              className="inline-flex items-center justify-center bg-brand-accent text-white text-sm font-medium capitalize px-4 py-2.5 rounded-lg hover:bg-brand-accent-hover active:bg-brand-accent-active transition-colors duration-200"
            >
              {t('joinWaitlist')}
            </a>
          </div>

          <button
            id="burger"
            type="button"
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label={t('menuToggle')}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={`burger-line w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`burger-line w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`burger-line w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden bg-brand-bg/95 backdrop-blur-xl border-t border-brand-border ${mobileOpen ? '' : 'hidden'}`}
      >
        <div className="px-4 md:px-8">
          <div className="max-w-[1440px] mx-auto px-2 flex flex-col items-center gap-6 py-8">
            <a
              href="#solution"
              className="text-white text-lg font-medium mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {t('solution')}
            </a>
            <a
              href="#ecosystem"
              className="text-white text-lg font-medium mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {t('ecosystem')}
            </a>
            <a
              href="#how-it-works"
              className="text-white text-lg font-medium mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {t('howItWorks')}
            </a>
            <a
              href="#why-alton"
              className="text-white text-lg font-medium mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {t('whyAlton')}
            </a>
            <a
              href="#roadmap"
              className="text-white text-lg font-medium mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {t('roadmap')}
            </a>
            <div className="flex flex-wrap justify-center gap-3">
              {locales.map((l) => (
                <Link
                  key={l}
                  href="/"
                  locale={l}
                  className={`inline-flex items-center gap-2 text-white text-base px-3 py-1 rounded-md border border-brand-border ${
                    locale === l ? 'bg-white/10 font-semibold' : ''
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <LocaleFlag locale={l} />
                  {labelForLocale(l)}
                </Link>
              ))}
            </div>
            <a
              href="http://waitlist.altons.trade/"
              className="mt-2 inline-flex items-center justify-center bg-brand-accent text-white text-base font-medium capitalize px-6 py-3 rounded-lg hover:bg-brand-accent-hover active:bg-brand-accent-active transition-colors duration-200 mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {t('joinWaitlist')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
