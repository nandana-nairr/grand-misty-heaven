import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base palette
        cream: '#FAF7F2',
        sand: '#F3EDE2',
        canvas: '#FAF7F2',
        ink: '#1A160F',
        graphite: '#3D3527',
        mute: '#8C7B65',
        warm: '#E8E0D2',
        forest: '#2D3E33',
        charcoal: '#1A1A1A',

        // Stone scale
        stone: {
          100: '#EDE6DA',
          200: '#DDD2BE',
          300: '#B8AC94',
        },

        // Gold/Brass
        gold: '#B8895A',
        'gold-deep': '#9A7248',
        brass: '#B89968',
        'brass-light': '#D4B886',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-2': '0.08em',
        'wide-3': '0.12em',
        'tight-2': '-0.02em',
      },
      boxShadow: {
        lift: '0 20px 60px rgba(0,0,0,0.10)',
        soft: '0 8px 24px rgba(0,0,0,0.10)',
        gold: '0 8px 24px rgba(184,137,90,0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'ken-burns': 'kenBurns 24s ease-in-out infinite alternate',
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
