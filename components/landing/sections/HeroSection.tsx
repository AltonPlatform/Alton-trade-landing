import { getTranslations } from 'next-intl/server';

export async function HeroSection() {
  const t = await getTranslations('Hero');
  const tNav = await getTranslations('Nav');

  return (
    <section id="hero" className="relative pt-[120px] md:pt-[136px] px-4 md:px-8">
      <div className="max-w-[1376px] mx-auto bg-brand-card border border-brand-border rounded-[32px] md:rounded-hero overflow-hidden relative min-h-[480px] md:min-h-[600px] lg:min-h-[680px]">
        <div className="glow-blob w-[300px] h-[300px] md:w-[524px] md:h-[524px] right-[-50px] md:right-[50px] bottom-[-100px] md:bottom-[20px] opacity-60" />

        <div className="hidden lg:block">
          <div className="absolute bg-brand-card-dark rounded-card-md w-[271px] h-[255px] right-[250px] top-[-128px] overflow-hidden">
            <video
              src="/asset/video/travel-backpack.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bg-brand-card-dark rounded-card-md w-[271px] h-[325px] right-[250px] top-[141px] overflow-hidden">
            <video
              src="/asset/video/woman.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bg-brand-card-dark rounded-card-md w-[271px] h-[325px] right-[250px] top-[480px] overflow-hidden">
            <video
              src="/asset/video/cream-shirt.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bg-brand-card-dark rounded-card-md w-[271px] h-[357px] right-[-36px] top-[-10px] overflow-hidden">
            <video
              src="/asset/video/woman-with-phone.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bg-brand-card-dark rounded-card-md w-[271px] h-[325px] right-[-36px] top-[361px] overflow-hidden">
            <video
              src="/asset/video/gamer.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 px-6 md:px-16 lg:px-[112px] py-12 md:py-16 flex flex-col gap-6 max-w-full lg:max-w-[70%]">
          <h1 className="font-display text-[32px] md:text-[48px] lg:text-[68px] leading-[1.2] text-white fade-up">
            {t('title')}
          </h1>

          <p className="text-brand-muted text-base md:text-lg leading-relaxed max-w-[466px] fade-up">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 fade-up">
            <a
              href="http://waitlist.altons.trade/"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-accent text-white text-base md:text-lg font-medium capitalize px-6 py-3 rounded-lg hover:bg-brand-accent-hover active:bg-brand-accent-active transition-colors duration-200 w-full sm:w-[270px]"
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
            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center border border-brand-border text-white text-base md:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-white/5 transition-colors w-full sm:w-[270px]"
            >
              {t('exploreEcosystem')}
            </a>
          </div>

          <div className="bg-white/[0.08] rounded-card-md px-6 md:px-8 pt-4 pb-5 max-w-[466px] fade-up">
            <p className="text-white text-xl md:text-[32px] font-inter font-medium leading-relaxed">
              {t('launchDate')}{' '}
              <span className="text-brand-accent-light">{t('launchQuarter')}</span>
              {t('launchYear')}
            </p>
            <p className="text-white/80 text-sm md:text-base font-light mt-2 leading-relaxed">
              {t('waitlistTeaserLine1')}
              <br />
              {t('waitlistTeaserLine2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
