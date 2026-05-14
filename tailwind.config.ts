import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './messages/**/*.json'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'DM Mono', 'monospace'],
            },
            colors: {
                hero: {
                    DEFAULT: '#0A0A0E',
                    secondary: '#12121A',
                    deep: '#162D4A',
                },

                accent: {
                    DEFAULT: '#5B6FFF',
                    muted: '#A8C4E0',
                    subtle: '#7BAFD4',
                },

                surface: {
                    primary: '#FFFFFF',
                    secondary: '#F7F8FA',
                    card: '#FFFFFF',
                    dark: '#0A0A0E',
                    'dark-secondary': '#12121A',
                    'dark-card': '#16161E',
                },

                border: {
                    DEFAULT: '#E2E8F0',
                    medium: '#CBD5E0',
                    dark: 'rgba(255, 255, 255, 0.08)',
                    'dark-hover': 'rgba(255, 255, 255, 0.15)',
                },

                content: {
                    primary: '#1A1A2E',
                    secondary: '#4A5568',
                    tertiary: '#718096',
                    muted: '#A0AEC0',
                },

                'on-dark': {
                    primary: '#FFFFFF',
                    secondary: 'rgba(255, 255, 255, 0.65)',
                    tertiary: 'rgba(255, 255, 255, 0.40)',
                    muted: 'rgba(255, 255, 255, 0.25)',
                },
            },

            spacing: {
                'nav-h': '60px',
                'section-x': '3rem',
                'section-y': '6rem',
                'hero-y': '7rem',
            },

            borderRadius: {
                card: '12px',
                tag: '20px',
                btn: '6px',
                input: '8px',
                lg: '10px',
            },

            fontSize: {
                'hero-name': ['52px', { lineHeight: '1.1', fontWeight: '500' }],
                'hero-role': ['36px', { lineHeight: '1.1', fontWeight: '400' }],
                'section-title': ['32px', { lineHeight: '1.2', fontWeight: '500' }],
                label: ['11px', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '500' }],
                tag: ['11px', { lineHeight: '1.4' }],
                nav: ['13px', { lineHeight: '1.4', letterSpacing: '0.03em' }],
                body: ['15px', { lineHeight: '1.8' }],
                small: ['12px', { lineHeight: '1.5' }],
            },

            boxShadow: {
                card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                'card-hover': '0 4px 12px rgba(0,0,0,0.08)',
                'card-dark': '0 1px 3px rgba(0,0,0,0.4)',
            },

            backdropBlur: {
                nav: '8px',
            },
        },
    },
    plugins: [],
};

export default config;
