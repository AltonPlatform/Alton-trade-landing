import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1440px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          bg: '#101828',
          card: '#1B2537',
          'card-dark': '#2B374F',
          border: '#334155',
          glow: '#313C4F',
          accent: '#7621E6',
          'accent-light': '#BB86FF',
          'accent-hover': '#5511AF',
          'accent-active': '#471093',
          muted: '#989BA2',
          footer: '#0F1116',
          'green-bg': '#0F2A2F',
          'green-border': 'rgba(8,255,122,0.24)',
          'yellow-bg': '#272C26',
          'yellow-border': 'rgba(243,225,24,0.24)',
          'timeline-green': '#0D5D41',
          'timeline-yellow': '#585723',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'card-sm': '16px',
        'card-md': '24px',
        'card-lg': '40px',
        hero: '64px',
      },
    },
  },
  plugins: [],
};

export default config;
