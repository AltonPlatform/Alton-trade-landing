import { getTranslations } from 'next-intl/server';

import { FooterSection } from './sections/FooterSection';
import { SupportHeader } from './SupportHeader';

const CONTACT_EMAIL = 'contact@altons.trade';
const TELEGRAM_URL = 'https://t.me/altonHolders';

export async function SupportPage() {
  const t = await getTranslations('Support');

  return (
    <>
      <SupportHeader />
      <main className="min-h-screen pt-[120px] md:pt-[136px] pb-8 md:pb-16 px-4 md:px-8">
        <section className="max-w-[960px] mx-auto">
          <div className="bg-brand-card border border-brand-border rounded-[32px] md:rounded-card-lg overflow-hidden relative px-6 md:px-12 py-12 md:py-16">
            <div className="glow-blob w-[260px] h-[260px] opacity-50 -left-[120px] -top-[80px]" />
            <div className="glow-blob w-[220px] h-[220px] opacity-40 -right-[100px] bottom-[-60px]" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <p className="text-brand-accent-light text-sm font-medium tracking-wide uppercase mb-4">
                {t('eyebrow')}
              </p>
              <h1 className="font-display text-[32px] md:text-[48px] leading-[1.2] text-white max-w-[640px]">
                {t('title')}
              </h1>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed mt-6 max-w-[520px]">
                {t('subtitle')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full mt-10 md:mt-12 text-left">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex flex-col gap-4 bg-brand-card-dark/60 border border-brand-border rounded-card-md p-6 md:p-8 hover:border-brand-accent-light/50 hover:bg-brand-card-dark transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent-light">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="font-display text-xl text-white mb-2">
                      {t('emailTitle')}
                    </h2>
                    <p className="text-brand-muted text-sm leading-relaxed mb-3">
                      {t('emailBody')}
                    </p>
                    <span className="text-brand-accent-light text-base font-medium group-hover:underline break-all">
                      {CONTACT_EMAIL}
                    </span>
                  </div>
                </a>

                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-4 bg-brand-card-dark/60 border border-brand-border rounded-card-md p-6 md:p-8 hover:border-brand-accent-light/50 hover:bg-brand-card-dark transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent-light">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="font-display text-xl text-white mb-2">
                      {t('telegramTitle')}
                    </h2>
                    <p className="text-brand-muted text-sm leading-relaxed mb-3">
                      {t('telegramBody')}
                    </p>
                    <span className="text-brand-accent-light text-base font-medium group-hover:underline">
                      {t('telegramCta')}
                    </span>
                  </div>
                </a>
              </div>

              <p className="text-brand-muted text-sm leading-relaxed mt-10 max-w-[480px]">
                {t('responseNote')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
