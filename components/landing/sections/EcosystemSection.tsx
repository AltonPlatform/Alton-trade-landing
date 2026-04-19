import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function EcosystemSection() {
  const t = await getTranslations('Ecosystem');
  const tNav = await getTranslations('Nav');
  const socialBullets = t.raw('socialBullets') as string[];
  const web3Bullets = t.raw('web3Bullets') as string[];
  const traderBullets = t.raw('traderBullets') as string[];

  return (
    <section id="ecosystem" className="bg-brand-card py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto px-2 lg:px-[144px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 md:mb-10 lg:items-start">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.2] text-white fade-up lg:col-span-1">
            {t('title')}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 lg:col-span-2">
            <p className="text-brand-muted text-base leading-relaxed max-w-[466px] lg:max-w-none fade-up">
              {t('intro')}
            </p>
            <a
              href="http://waitlist.altons.trade/"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-accent text-white text-base md:text-lg font-medium capitalize px-6 py-3 rounded-lg hover:bg-brand-accent-hover active:bg-brand-accent-active transition-colors duration-200 shrink-0 w-full sm:w-[270px] fade-up"
            >
              {tNav('joinWaitlist')}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative mb-6 fade-up lg:[clip-path:inset(-200px_-200px_0_-200px_round_24px)]">
          <div className="bg-brand-card-dark border border-brand-border rounded-card-md overflow-hidden lg:overflow-visible relative">
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] sm:grid-rows-[auto_1fr] lg:grid-cols-[619fr_533fr] lg:min-h-[320px] items-stretch min-w-0">
              <div className="relative z-10 order-1 sm:order-none sm:col-start-1 sm:row-start-1 min-w-0 px-4 pt-4 pb-2 sm:p-6 sm:pb-3 md:px-8 md:pt-8 md:pb-3 lg:pt-[122px] lg:pb-0 lg:pr-4 xl:pr-6 max-sm:pt-4">
                <h3 className="font-display text-xl md:text-2xl lg:text-[32px] leading-[1.2] text-white max-w-[420px]">
                  {t('socialTitle')}
                </h3>
              </div>
              <div className="relative z-0 order-2 sm:order-none sm:col-start-2 sm:row-start-1 sm:row-span-2 lg:row-span-2 flex items-center justify-center max-sm:min-h-[200px] max-sm:w-full max-sm:py-3 sm:min-h-0 sm:h-full md:min-h-[280px] lg:min-h-0 lg:h-auto lg:block lg:leading-none overflow-hidden lg:overflow-visible min-w-0 self-stretch">
                <Image
                  src="/asset/new/ipad-mockup.png"
                  alt={t('ipadAlt')}
                  width={740}
                  height={662}
                  className="block pointer-events-none max-sm:relative max-sm:right-auto max-sm:top-auto max-sm:bottom-auto max-sm:mx-auto max-sm:w-full max-sm:max-w-none h-auto object-contain animate-float-slow sm:absolute sm:right-[-20px] sm:top-[-10px] sm:w-[280px] sm:max-w-none md:max-w-[440px] lg:w-[662px] lg:max-w-[740px] lg:top-auto lg:bottom-px ecosystem-ipad-mockup-right lg:-mb-[120px] md:mr-[-40px] md:w-[440px]"
                  priority
                />
              </div>
              <div className="relative z-10 order-3 sm:order-none sm:col-start-1 sm:row-start-2 min-w-0 px-4 pb-4 sm:p-6 sm:pt-0 md:px-8 md:pb-8 flex flex-col justify-start lg:pt-2 lg:pr-4 xl:pr-6 lg:pb-8">
                <p className="text-brand-muted text-xs sm:text-sm md:text-base leading-[1.6] mb-2 sm:mb-4 max-w-[555px]">
                  {t('socialLead')}
                </p>
                <ul className="text-brand-muted text-xs sm:text-sm md:text-base leading-[1.6] list-disc pl-4 sm:pl-6 space-y-0.5 sm:space-y-1 max-w-[242px]">
                  {socialBullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 md:gap-6">
          <div className="flex flex-col lg:relative lg:h-[320px] overflow-hidden rounded-card-md bg-brand-card-dark border border-brand-border fade-up">
            <h3 className="shrink-0 px-4 pt-4 pb-2 sm:px-6 sm:pt-6 sm:pb-2 md:px-8 md:pt-8 font-display text-xl leading-[1.2] text-white lg:hidden">
              {t('web3Title')}
            </h3>
            <div className="relative flex items-center justify-center min-h-[200px] w-full py-2 sm:min-h-[200px] sm:py-2 overflow-hidden pointer-events-none lg:absolute lg:left-[162px] lg:top-[-1px] lg:w-[504px] lg:h-[378px] lg:min-h-0 lg:p-0 lg:block">
              <Image
                src="/asset/new/iphone-web3.png"
                alt={t('web3Alt')}
                width={504}
                height={378}
                className="w-full max-h-[min(240px,52vw)] sm:max-h-[min(240px,45vw)] h-auto object-contain animate-float lg:w-full lg:h-full lg:max-h-none"
              />
            </div>
            <div className="relative z-20 px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:mt-auto lg:px-8 lg:pb-8 lg:pt-0 lg:max-w-[416px]">
              <h3 className="hidden lg:block font-display text-xl leading-[1.2] text-white lg:mb-2">
                {t('web3Title')}
              </h3>
              <p className="text-brand-muted text-[11px] sm:text-xs md:text-sm lg:text-sm leading-relaxed max-w-[238px] mb-2 sm:mb-3 lg:mb-4">
                {t('web3Lead')}
              </p>
              <ul className="text-brand-muted text-[11px] sm:text-xs md:text-sm lg:text-sm leading-relaxed list-disc pl-3 sm:pl-5 lg:pl-[21px] space-y-0.5">
                {web3Bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:relative lg:h-[320px] overflow-hidden rounded-card-md bg-brand-card-dark border border-brand-border fade-up">
            <h3 className="shrink-0 px-4 pt-4 pb-2 sm:px-6 sm:pt-6 sm:pb-2 md:px-8 md:pt-8 font-display text-xl leading-[1.2] text-white lg:hidden">
              {t('traderTitle')}
            </h3>
            <div className="relative flex items-center justify-center min-h-[200px] w-full py-2 sm:min-h-[200px] sm:py-2 overflow-hidden pointer-events-none lg:absolute lg:inset-0 lg:min-h-0 lg:p-0 lg:block">
              <div className="max-sm:w-full max-sm:mx-auto sm:max-[1199px]:w-full sm:max-[1199px]:mx-auto flex justify-center items-center lg:absolute lg:left-[min(119px,18%)] lg:top-[-106px] lg:h-[min(577px,160%)] lg:w-[min(679px,130%)] lg:max-w-none lg:rotate-[-15deg] lg:origin-center">
                <Image
                  src="/asset/new/iphone-trader.png"
                  alt={t('traderAlt')}
                  width={585}
                  height={441}
                  className="w-full max-h-[min(240px,52vw)] sm:max-h-[min(240px,45vw)] h-auto object-contain animate-float-slow lg:w-[585px] lg:max-h-[441px] lg:max-w-none lg:mb-0"
                />
              </div>
            </div>
            <div className="relative z-20 px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:mt-auto lg:px-8 lg:pb-8 lg:pt-0">
              <h3 className="hidden lg:block font-display text-xl leading-[1.2] text-white lg:mb-2">
                {t('traderTitle')}
              </h3>
              <p className="text-brand-muted text-[11px] sm:text-xs md:text-sm lg:text-sm leading-relaxed max-w-[188px] mb-2 sm:mb-3 lg:mb-4">
                {t('traderLead')}
              </p>
              <ul className="text-brand-muted text-[11px] sm:text-xs md:text-sm lg:text-sm leading-relaxed list-disc pl-3 sm:pl-5 lg:pl-[21px] space-y-0.5">
                {traderBullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
