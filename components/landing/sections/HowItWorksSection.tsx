import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function HowItWorksSection() {
  const t = await getTranslations('HowItWorks');
  const users = t.raw('users') as Array<{ title: string; body: string }>;
  const creators = t.raw('creators') as Array<{ title: string; body: string }>;

  const userImages = [
    '/asset/new/hiw-users-1.svg',
    '/asset/new/hiw-users-2.svg',
    '/asset/new/hiw-users-3.svg',
    '/asset/new/hiw-users-4.svg',
  ];
  const creatorImages = [
    '/asset/new/hiw-creators-1.svg',
    '/asset/new/hiw-creators-2.svg',
    '/asset/new/hiw-creators-3.svg',
    '/asset/new/hiw-creators-4.svg',
  ];

  const stepKeys = ['one', 'two', 'three', 'four'] as const;

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto px-2 lg:px-[144px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 md:mb-10 lg:items-center">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.2] text-white fade-up lg:col-span-1">
            {t('title')}
          </h2>
          <div className="lg:col-span-2 flex flex-wrap items-center gap-4">
            <div className="bg-brand-card rounded-xl p-0.5 flex shrink-0 fade-up">
              <button
                type="button"
                className="tab-btn tab-active px-6 py-2 rounded-lg text-base font-semibold transition-all duration-300"
                data-tab="users"
              >
                {t('forUsers')}
              </button>
              <button
                type="button"
                className="tab-btn bg-brand-card text-white px-6 py-2 rounded-lg text-base font-normal transition-all duration-300"
                data-tab="creators"
              >
                {t('forCreators')}
              </button>
            </div>
          </div>
        </div>

        <div className="tab-panel" id="panel-users">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 items-start">
              {users.map((step, i) => (
                <div
                  key={i}
                  className="bg-brand-card border border-brand-border rounded-card-sm px-[15px] pt-[23px] pb-[15px] h-[280px] md:h-[320px] overflow-hidden relative flex flex-col fade-up"
                >
                  <p className="text-brand-muted text-sm mb-1">
                    {t(`steps.${stepKeys[i]}`)}
                  </p>
                  <h3 className="font-display text-lg leading-[1.2] text-white">
                    {step.title}
                  </h3>
                  <div className="flex-1 relative my-3 min-h-[120px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[136px] h-[136px] rounded-full bg-brand-glow/40 blur-[20px]" />
                    </div>
                    <Image
                      src={userImages[i]}
                      alt=""
                      width={280}
                      height={200}
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none p-2"
                    />
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed max-w-[250px]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex absolute inset-0 z-10 pointer-events-none items-center justify-between px-[calc(25%-22px)]">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-brand-glow rounded-full w-10 h-10 flex items-center justify-center shrink-0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tab-panel hidden" id="panel-creators">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 items-start">
              {creators.map((step, i) => (
                <div
                  key={i}
                  className="bg-brand-card border border-brand-border rounded-card-sm px-[15px] pt-[23px] pb-[15px] h-[280px] md:h-[320px] overflow-hidden relative flex flex-col fade-up"
                >
                  <p className="text-brand-muted text-sm mb-1">
                    {t(`steps.${stepKeys[i]}`)}
                  </p>
                  <h3 className="font-display text-lg leading-[1.2] text-white">
                    {step.title}
                  </h3>
                  <div className="flex-1 relative my-3 min-h-[120px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[136px] h-[136px] rounded-full bg-brand-glow/40 blur-[20px]" />
                    </div>
                    <Image
                      src={creatorImages[i]}
                      alt=""
                      width={280}
                      height={200}
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none p-2"
                    />
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed max-w-[250px]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex absolute inset-0 z-10 pointer-events-none items-center justify-between px-[calc(25%-22px)]">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-brand-glow rounded-full w-10 h-10 flex items-center justify-center shrink-0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
