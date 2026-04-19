import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function FooterSection() {
  const t = await getTranslations('Footer');

  return (
    <footer className="bg-brand-footer border-t border-brand-border py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto px-2 lg:px-[144px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="flex flex-col gap-6 lg:flex-1 lg:min-w-0">
            <Image
              src="/asset/new/logo-footer.svg"
              alt={t('logoAlt')}
              width={200}
              height={101}
              className="h-[80px] md:h-[101px] w-auto self-start"
            />
          </div>

          <div className="flex flex-col gap-4 lg:flex-1 lg:min-w-0 lg:px-4">
            <ul
              className="flex flex-wrap items-center gap-x-10 gap-y-4 list-none p-0 m-0"
              aria-label="Social links"
            >
              <li>
                <a
                  href="https://t.me/alton_trade"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-brand-muted hover:text-white transition-colors inline-flex"
                  aria-label={t('socialAria.telegram')}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@THEALTONOFFICIAL"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-brand-muted hover:text-white transition-colors inline-flex"
                  aria-label={t('socialAria.youtube')}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/TradeAlton"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-brand-muted hover:text-white transition-colors inline-flex"
                  aria-label={t('socialAria.x')}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/alton.trade/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-brand-muted hover:text-white transition-colors inline-flex"
                  aria-label={t('socialAria.instagram')}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/alton-trade"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-brand-muted hover:text-white transition-colors inline-flex"
                  aria-label={t('socialAria.linkedin')}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
            </ul>
            <p className="text-brand-muted text-base leading-relaxed max-w-[371px] lg:mx-auto">
              {t('tagline')}
            </p>
          </div>

          <div className="flex flex-col lg:flex-1 lg:min-w-0 lg:items-end">
            <div className="flex flex-col gap-4 items-start text-left w-max max-w-full">
              <h3 className="font-display text-lg text-white">
                {t('resources')}
              </h3>
              <div className="flex flex-wrap gap-8 md:gap-10">
                <a
                  href="https://alton-trade.gitbook.io/whitepaper"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center gap-2.5 text-brand-muted hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span className="text-base">{t('whitepaper')}</span>
                </a>
                <a
                  href="https://www.crunchbase.com/organization/alton-platform"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center gap-2.5 text-brand-muted hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span className="text-base">{t('crunchbase')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-6">
          <p className="text-brand-muted text-base">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
