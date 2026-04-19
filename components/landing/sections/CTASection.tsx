import { getTranslations } from 'next-intl/server';

export async function CTASection() {
  const t = await getTranslations('CTA');

  return (
    <section id="cta" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1152px] mx-auto bg-brand-card border border-brand-border rounded-[32px] md:rounded-card-lg overflow-hidden relative px-6 md:px-12 py-16 md:py-20 lg:py-[82px] text-center flex flex-col items-center">
        <div className="glow-blob w-[290px] h-[290px] opacity-40 -left-[200px] bottom-[-50px] md:bottom-auto md:-left-[210px] md:top-[140px]" />
        <div className="glow-blob w-[290px] h-[290px] opacity-40 -right-[200px] bottom-[-50px] md:bottom-auto md:-right-[210px] md:top-[140px]" />

        <div className="relative z-10 flex flex-col items-center w-full">
          <h2 className="font-display text-[28px] md:text-[48px] leading-[1.2] text-white fade-up max-w-[720px]">
            {t('title')}
          </h2>
          <p className="text-brand-muted text-base leading-[1.6] mt-6 fade-up max-w-[380px]">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-[744px] mt-8 fade-up">
            <a
              href="http://waitlist.altons.trade/"
              className="inline-flex items-center justify-center bg-brand-accent text-white text-lg font-medium px-6 h-14 rounded-lg hover:bg-brand-accent-hover active:bg-brand-accent-active transition-colors duration-200 w-full sm:w-[360px] shrink-0"
            >
              {t('waitlistLong')}
            </a>
            <a
              href="https://bit.ly/altontrader"
              className="inline-flex items-center justify-center bg-[#1b1d2f] border border-brand-border text-white text-lg font-medium px-6 h-14 rounded-lg hover:bg-white/5 transition-colors w-full sm:w-[360px] shrink-0"
            >
              {t('mining')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
