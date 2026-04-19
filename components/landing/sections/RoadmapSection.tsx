import { getTranslations } from 'next-intl/server';

type Phase = {
  key: string;
  label: string;
  items: Array<{ title: string; body: string }>;
};

function PhaseIcon({ phaseKey }: { phaseKey: string }) {
  if (phaseKey === 'completed') {
    return (
      <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-brand-green-bg border border-[rgba(8,255,122,0.24)] flex items-center justify-center relative z-10 roadmap-icon mx-auto lg:mx-0">
        <svg
          className="w-8 h-8 text-[#08FF7A]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    );
  }
  if (phaseKey === 'near-term') {
    return (
      <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-brand-yellow-bg border border-[rgba(243,225,24,0.24)] flex items-center justify-center relative z-10 roadmap-icon mx-auto lg:mx-0">
        <svg
          className="w-8 h-8 text-[#F3E118]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 22h14" />
          <path d="M5 2h14" />
          <path d="M17 22v-4.172a2 2 0 00-.586-1.414L12 12l-4.414 4.414A2 2 0 007 17.828V22" />
          <path d="M7 2v4.172a2 2 0 00.586 1.414L12 12l4.414-4.414A2 2 0 0017 6.172V2" />
        </svg>
      </div>
    );
  }
  if (phaseKey === 'mainnet') {
    return (
      <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-brand-card border border-brand-border flex items-center justify-center relative z-10 roadmap-icon mx-auto lg:mx-0">
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      </div>
    );
  }
  return (
    <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-brand-card border border-brand-border flex items-center justify-center relative z-10 roadmap-icon mx-auto lg:mx-0">
      <svg
        className="w-8 h-8 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 3l1.912 5.813a2 2 0 001.272 1.272L21 12l-5.816 1.915a2 2 0 00-1.272 1.272L12 21l-1.912-5.813a2 2 0 00-1.272-1.272L3 12l5.816-1.915a2 2 0 001.272-1.272L12 3z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    </div>
  );
}

export async function RoadmapSection() {
  const t = await getTranslations('Roadmap');
  const phases = t.raw('phases') as Phase[];

  return (
    <section
      id="roadmap"
      className="bg-brand-bg py-16 md:py-24 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-2 lg:px-[144px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-12 md:mb-16 lg:items-start">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.2] text-white fade-up lg:col-span-1">
            {t('title')}
          </h2>
        </div>

        <div className="relative" id="roadmap-timeline">
          <div className="hidden lg:block absolute top-0 bottom-0 w-1 left-[calc(240px+32px+38px)] xl:left-[calc(280px+32px+38px)]">
            <div className="w-full h-full bg-brand-card rounded-full" />
            <div
              id="seg-green"
              className="roadmap-seg absolute left-0 w-full rounded-t-full bg-[#08FF7A]"
              style={{ top: 0, height: 0 }}
            />
            <div
              id="seg-yellow"
              className="roadmap-seg absolute left-0 w-full bg-[#F3E118]"
              style={{ top: 0, height: 0 }}
            />
            <div
              id="seg-gray"
              className="roadmap-seg absolute left-0 w-full rounded-b-full bg-[#334155]"
              style={{ top: 0, height: 0 }}
            />
          </div>

          {phases.map((phase, pi) => (
            <div
              key={phase.key}
              className={`roadmap-phase relative ${pi < phases.length - 1 ? 'mb-12 md:mb-16' : ''}`}
              data-phase={phase.key}
            >
              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[240px_80px_1fr] xl:grid-cols-[280px_80px_1fr] lg:gap-x-8 lg:items-start">
                <h3 className="font-display text-xl md:text-2xl text-white lg:text-right lg:pt-5 roadmap-label">
                  {phase.label}
                </h3>
                <PhaseIcon phaseKey={phase.key} />
                <div className="flex flex-col gap-6 lg:pt-1 roadmap-content">
                  {phase.items.map((item, ii) => (
                    <div key={ii}>
                      <h4 className="font-display text-lg text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-brand-muted text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
