import { getTranslations } from 'next-intl/server';

export async function ProblemsSection() {
  const t = await getTranslations('Problems');
  const cards = t.raw('cards') as Array<{ title: string; body: string }>;

  return (
    <section id="problems" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto px-2 lg:px-[144px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 md:mb-10 lg:items-start">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.2] text-white fade-up lg:col-span-1">
            {t('title')}
          </h2>
          <p className="text-brand-muted text-base leading-relaxed max-w-[400px] lg:max-w-[380px] fade-up lg:col-span-2">
            {t('intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-brand-card border border-brand-border rounded-card-md p-6 relative overflow-hidden fade-up"
            >
              <div className="glow-blob w-[136px] h-[136px] -left-[40px] -top-[20px] opacity-50" />
              <h3 className="font-display text-lg leading-[1.2] text-white relative z-10 mb-3">
                {card.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed relative z-10">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
