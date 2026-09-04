import { getTranslations } from 'next-intl/server';

import { FooterSection } from './sections/FooterSection';
import { SupportHeader } from './SupportHeader';

const SUPPORT_EMAIL = 'contact@altons.trade';

export async function DeleteAccountPage() {
  const t = await getTranslations('DeleteAccount');
  const howSteps = (t.raw('howSteps') as string[]).map((step) =>
    step.replaceAll('{email}', SUPPORT_EMAIL),
  );
  const deleteItems = t.raw('deleteItems') as string[];
  const retainItems = t.raw('retainItems') as string[];
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(t('emailSubject'))}`;

  return (
    <>
      <SupportHeader path="/delete-account" />
      <main className="min-h-screen pt-[120px] md:pt-[136px] pb-8 md:pb-16 px-4 md:px-8">
        <section className="max-w-[960px] mx-auto">
          <div className="bg-brand-card border border-brand-border rounded-[32px] md:rounded-card-lg overflow-hidden relative px-6 md:px-12 py-12 md:py-16">
            <div className="glow-blob w-[260px] h-[260px] opacity-50 -left-[120px] -top-[80px]" />
            <div className="glow-blob w-[220px] h-[220px] opacity-40 -right-[100px] bottom-[-60px]" />

            <div className="relative z-10 flex flex-col">
              <div className="text-center flex flex-col items-center">
                <p className="text-brand-accent-light text-sm font-medium tracking-wide uppercase mb-4">
                  {t('eyebrow')}
                </p>
                <h1 className="font-display text-[32px] md:text-[48px] leading-[1.2] text-white max-w-[640px]">
                  {t('title')}
                </h1>
                <p className="text-brand-muted text-base md:text-lg leading-relaxed mt-6 max-w-[560px]">
                  {t('subtitle')}
                </p>
              </div>

              <dl className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-brand-card-dark/60 border border-brand-border rounded-card-md p-6">
                  <dt className="text-brand-muted text-sm mb-2">{t('appLabel')}</dt>
                  <dd className="font-display text-xl text-white">{t('appName')}</dd>
                </div>
                <div className="bg-brand-card-dark/60 border border-brand-border rounded-card-md p-6">
                  <dt className="text-brand-muted text-sm mb-2">
                    {t('developerLabel')}
                  </dt>
                  <dd className="font-display text-xl text-white">
                    {t('developerName')}
                  </dd>
                </div>
              </dl>

              <div className="mt-10 md:mt-12 space-y-10 md:space-y-12">
                <section>
                  <h2 className="font-display text-2xl text-white mb-5">
                    {t('howTitle')}
                  </h2>
                  <ol className="list-decimal list-outside pl-5 space-y-4 text-brand-muted text-base leading-relaxed">
                    {howSteps.map((step) => (
                      <li key={step} className="pl-1">
                        {step}
                      </li>
                    ))}
                  </ol>
                  <a
                    href={mailto}
                    className="inline-flex items-center justify-center mt-8 bg-brand-accent text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-brand-accent-hover active:bg-brand-accent-active transition-colors duration-200"
                  >
                    {t('emailCta')}
                  </a>
                  <p className="mt-3 text-brand-accent-light text-sm break-all">
                    {SUPPORT_EMAIL}
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-white mb-5">
                    {t('deleteTitle')}
                  </h2>
                  <ul className="list-disc list-outside pl-5 space-y-3 text-brand-muted text-base leading-relaxed">
                    {deleteItems.map((item) => (
                      <li key={item} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-white mb-5">
                    {t('retainTitle')}
                  </h2>
                  <ul className="list-disc list-outside pl-5 space-y-3 text-brand-muted text-base leading-relaxed">
                    {retainItems.map((item) => (
                      <li key={item} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-white mb-4">
                    {t('timelineTitle')}
                  </h2>
                  <p className="text-brand-muted text-base leading-relaxed">
                    {t('timelineBody')}
                  </p>
                </section>
              </div>

              <p className="text-brand-muted text-sm leading-relaxed mt-10 md:mt-12 max-w-[560px]">
                {t('privacyNote', { email: SUPPORT_EMAIL })}
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
