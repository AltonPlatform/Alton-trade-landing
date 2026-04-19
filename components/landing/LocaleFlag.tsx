type LocaleCode = 'en' | 'ru' | 'uk';

const flagWrap =
  'inline-flex shrink-0 w-[22px] h-[15px] rounded-[2px] overflow-hidden border border-white/30 shadow-sm';

export function LocaleFlag({ locale }: { locale: LocaleCode }) {
  if (locale === 'en') {
    return (
      <span className={flagWrap} aria-hidden title="English">
        <svg viewBox="0 0 60 40" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <rect fill="#012169" width="60" height="40" />
          <path stroke="#FFFFFF" strokeWidth="8" d="M0 0 L60 40 M60 0 L0 40" />
          <path stroke="#C8102E" strokeWidth="5" d="M0 0 L60 40 M60 0 L0 40" />
          <path stroke="#FFFFFF" strokeWidth="12" d="M30 0 V40 M0 20 H60" />
          <path stroke="#C8102E" strokeWidth="8" d="M30 0 V40 M0 20 H60" />
        </svg>
      </span>
    );
  }

  if (locale === 'uk') {
    return (
      <span className={flagWrap} aria-hidden title="Українська">
        <svg viewBox="0 0 60 40" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <rect fill="#0057B7" width="60" height="20" />
          <rect fill="#FFD700" y="20" width="60" height="20" />
        </svg>
      </span>
    );
  }

  return (
    <span className={flagWrap} aria-hidden title="Русский">
      <svg viewBox="0 0 60 40" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#FFFFFF" width="60" height="40" />
      </svg>
    </span>
  );
}
