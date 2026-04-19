import { getTranslations } from 'next-intl/server';

import Image from 'next/image';

export async function SolutionSection() {
  const t = await getTranslations('Solution');
  const cards = t.raw('cards') as Array<{ title: string; body: string }>;

  return (
    <section id="solution" className="pb-16 md:pb-24 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto px-2 lg:px-[144px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 md:mb-10 lg:items-start">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.2] text-white fade-up lg:col-span-1">
            {t('title')}
          </h2>
          <p className="text-brand-muted text-base leading-relaxed max-w-[466px] fade-up lg:col-span-2">
            {t('intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-brand-card border border-brand-border rounded-card-md h-[220px] md:h-[240px] relative overflow-hidden p-6 md:p-8 flex flex-col justify-end fade-up">
            <div className="glow-blob w-[284px] h-[284px] -left-[100px] top-1/2 -translate-y-1/2 opacity-40" />
            <Image
              src="/asset/new/solution-platform.svg"
              alt=""
              width={231}
              height={220}
              className="absolute right-4 md:right-8 -top-[47px] w-[180px] md:w-[231px] h-auto pointer-events-none"
            />
            <h3 className="font-display text-xl leading-[1.2] text-white relative z-10">
              {cards[0].title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed relative z-10 mt-2">
              {cards[0].body}
            </p>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-card-md h-[220px] md:h-[240px] relative overflow-hidden p-6 md:p-8 flex flex-col justify-end fade-up">
            <div className="glow-blob w-[284px] h-[284px] -left-[100px] top-1/2 -translate-y-1/2 opacity-40" />
            <div className="absolute right-8 -top-6 w-[180px] h-[180px]">
              <div className="w-full h-full rounded-full border-2 border-[#57637f]" />
              <div className="absolute inset-[15%] rounded-full border-2 border-[#57637f]" />
              <div className="absolute inset-[30%] rounded-full border-2 border-[#57637f]" />
              <div className="absolute inset-[45%] rounded-full bg-[#a9b1bf]" />
            </div>
            <h3 className="font-display text-xl leading-[1.2] text-white relative z-10">
              {cards[1].title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed relative z-10 mt-2">
              {cards[1].body}
            </p>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-card-md h-[220px] md:h-[240px] relative overflow-hidden p-6 md:p-8 flex flex-col justify-end fade-up">
            <div className="glow-blob w-[284px] h-[284px] -left-[100px] top-1/2 -translate-y-1/2 opacity-40" />
            <Image
              src="/asset/new/solution-economy.svg"
              alt=""
              width={182}
              height={140}
              className="absolute right-4 md:right-8 -top-[17px] w-[140px] md:w-[182px] h-auto pointer-events-none"
            />
            <h3 className="font-display text-xl leading-[1.2] text-white relative z-10">
              {cards[2].title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed relative z-10 mt-2">
              {cards[2].body}
            </p>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-card-md h-[220px] md:h-[240px] relative overflow-hidden p-6 md:p-8 flex flex-col justify-end fade-up">
            <div className="glow-blob w-[284px] h-[284px] -left-[100px] top-1/2 -translate-y-1/2 opacity-40" />
            <div className="absolute right-0 top-[86px] w-[100%] h-[16px] flex items-center">
              <div className="w-full h-[2px] border-t-2 border-[#57637f]" />
              <div className="absolute left-[12%] w-4 h-4 rounded-full bg-[#a9b1bf]" />
              <div className="absolute left-[49%] w-4 h-4 rounded-full bg-[#a9b1bf]" />
              <div className="absolute left-[86%] w-4 h-4 rounded-full bg-[#a9b1bf]" />
            </div>
            <h3 className="font-display text-xl leading-[1.2] text-white relative z-10">
              {cards[3].title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed relative z-10 mt-2">
              {cards[3].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
