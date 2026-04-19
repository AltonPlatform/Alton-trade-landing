import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function WhyAltonSection() {
  const t = await getTranslations('WhyAlton');
  const tNav = await getTranslations('Nav');
  const features = t.raw('features') as Array<{ title: string; body: string }>;

  const titleLines = (title: string) =>
    title.split('\n').map((line, idx, arr) => (
      <span key={idx}>
        {line}
        {idx < arr.length - 1 ? <br /> : null}
      </span>
    ));

  return (
    <section
      id="why-alton"
      className="bg-brand-card py-16 md:py-24 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-2 lg:px-[144px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-12 md:mb-16 lg:items-start">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.2] text-white fade-up lg:col-span-1">
            {t('title')}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 lg:col-span-2">
            <p className="text-brand-muted text-base leading-relaxed max-w-[312px] fade-up">
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

        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full max-w-[368px] lg:-rotate-6 z-10 mb-6 lg:mb-0 fade-up">
            <div className="bg-brand-bg border border-brand-border rounded-card-lg shadow-[0px_4px_16px_0px_rgba(0,0,0,0.24)] overflow-hidden h-[400px] md:h-[444px] relative">
              <h3 className="font-display text-xl md:text-2xl leading-[1.2] text-white text-center mt-10 w-[320px] mx-auto">
                {features[0].title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed text-center mt-3 max-w-[320px] mx-auto">
                {features[0].body}
              </p>
              <div className="absolute bottom-[15px] left-[15px] w-[calc(100%-30px)] h-[136px] bg-[#1c2537] rounded-card-md z-0" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[219px] w-[144px] h-[144px] rounded-full bg-[#1c2537] blur-[40px] z-[1]" />
              <Image
                src="/asset/new/star-filled.svg"
                alt=""
                width={25}
                height={24}
                className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+0px)] w-[25px] h-[24px] z-[2]"
              />
              <div className="absolute left-[57px] top-[260px] w-[252px] h-[91px] z-[2]">
                <Image
                  src="/asset/new/star-outline.svg"
                  alt=""
                  width={25}
                  height={24}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[calc(50%-29px)] w-[25px] h-[24px]"
                />
                <Image
                  src="/asset/new/star-outline.svg"
                  alt=""
                  width={25}
                  height={24}
                  className="absolute left-[calc(50%-38px)] top-[calc(50%-22px)] -translate-x-1/2 -translate-y-1/2 w-[25px] h-[24px] -rotate-[15deg]"
                />
                <Image
                  src="/asset/new/star-outline.svg"
                  alt=""
                  width={27}
                  height={26}
                  className="absolute left-[calc(50%-74px)] top-[calc(50%-3px)] -translate-x-1/2 -translate-y-1/2 w-[27px] h-[26px] -rotate-[30deg]"
                />
                <Image
                  src="/asset/new/star-outline.svg"
                  alt=""
                  width={28}
                  height={27}
                  className="absolute left-[calc(50%-103px)] top-[calc(50%+23px)] -translate-x-1/2 -translate-y-1/2 w-[28px] h-[27px] -rotate-[45deg]"
                />
                <Image
                  src="/asset/new/star-outline.svg"
                  alt=""
                  width={25}
                  height={24}
                  className="absolute left-[calc(50%+38px)] top-[calc(50%-22px)] -translate-x-1/2 -translate-y-1/2 w-[25px] h-[24px] rotate-[15deg]"
                />
                <Image
                  src="/asset/new/star-outline.svg"
                  alt=""
                  width={27}
                  height={26}
                  className="absolute left-[calc(50%+74px)] top-[calc(50%-3px)] -translate-x-1/2 -translate-y-1/2 w-[27px] h-[26px] rotate-[30deg]"
                />
                <Image
                  src="/asset/new/star-outline.svg"
                  alt=""
                  width={28}
                  height={27}
                  className="absolute left-[calc(50%+103px)] top-[calc(50%+23px)] -translate-x-1/2 -translate-y-1/2 w-[28px] h-[27px] rotate-[45deg]"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-[368px] z-20 lg:-translate-y-3 mb-6 lg:mb-0 fade-up">
            <div className="bg-brand-bg border border-brand-border rounded-card-lg shadow-[0px_4px_16px_0px_rgba(0,0,0,0.24)] overflow-hidden h-[400px] md:h-[444px] relative">
              <h3 className="font-display text-xl md:text-2xl leading-[1.2] text-white text-center mt-10 w-[320px] mx-auto">
                {titleLines(features[1].title)}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed text-center mt-3 max-w-[320px] mx-auto">
                {features[1].body}
              </p>
              <div className="absolute bottom-[15px] left-[15px] w-[calc(100%-30px)] h-[136px] bg-[#1c2537] rounded-card-md z-0" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[206px] w-[158px] h-[158px] rounded-full bg-[#1c2537] blur-[40px] -rotate-6 z-[1]" />
              <div className="absolute left-[calc(13.49%)] right-[calc(33.74%)] top-[calc(50%+67px)] -translate-y-1/2 aspect-square z-[2]">
                <div className="-rotate-[15deg] w-[159px] h-[159px] mx-auto">
                  <div className="w-full h-full rounded-full border-2 border-white" />
                </div>
              </div>
              <div className="absolute left-[calc(33.55%)] right-[calc(13.68%)] top-[calc(50%+93px)] -translate-y-1/2 aspect-square z-[2]">
                <div className="-rotate-[15deg] w-[159px] h-[159px] mx-auto">
                  <div className="w-full h-full rounded-full border-2 border-[#a9b1bf]" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[368px] lg:rotate-6 z-10 fade-up">
            <div className="bg-brand-bg border border-brand-border rounded-card-lg shadow-[0px_4px_16px_0px_rgba(0,0,0,0.24)] overflow-hidden h-[400px] md:h-[444px] relative">
              <h3 className="font-display text-xl md:text-2xl leading-[1.2] text-white text-center mt-10 w-[320px] mx-auto">
                {features[2].title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed text-center mt-3 max-w-[320px] mx-auto">
                {features[2].body}
              </p>
              <div className="absolute bottom-[15px] left-[15px] w-[calc(100%-30px)] h-[136px] bg-[#1c2537] rounded-card-md z-0" />
              <div className="absolute left-[91px] top-[206px] w-[170px] h-[170px] -rotate-12 z-[1]">
                <div className="w-[144px] h-[144px] rounded-full bg-[#1c2537] blur-[40px]" />
              </div>
              <Image
                src="/asset/new/chart-line2.svg"
                alt=""
                width={189}
                height={161}
                className="absolute left-[68px] top-[209px] w-[189px] h-[161px] z-[2]"
              />
              <Image
                src="/asset/new/chart-line1.svg"
                alt=""
                width={189}
                height={161}
                className="absolute left-[110px] top-[209px] w-[189px] h-[161px] z-[3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
