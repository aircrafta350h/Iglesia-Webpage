import type { Config } from 'tailwindcss';

/**
 * Design Token Map — 65/20/10/5 palette
 *
 * 65 %  Pure White   #FFFFFF  → backgrounds, canvases
 * 20 %  Light Grey   #DEE1E5  → surfaces, containers, separators
 * 10 %  Dark Teal    #004154  → CTAs, active states, focal points
 *  5 %  Off-Black    #1C1C1C  → all text, line art
 */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── 65 % — Pure White backgrounds ───────────────────────────────
        background:                '#ffffff',
        surface:                   '#ffffff',
        'surface-bright':          '#ffffff',
        'surface-container-lowest':'#ffffff',

        // ── 20 % — Light Grey surfaces & containers ─────────────────────
        'surface-variant':           '#dee1e5',
        'surface-container':         '#dee1e5',
        'surface-container-low':     '#eef0f2',
        'surface-container-high':    '#dee1e5',
        'surface-container-highest': '#dee1e5',
        'surface-dim':               '#dee1e5',
        'outline-variant':           '#dee1e5',
        'primary-container':         '#dee1e5',
        'primary-fixed':             '#dee1e5',
        'primary-fixed-dim':         '#cdd0d4',
        'secondary-container':       '#dee1e5',
        'secondary-fixed':           '#dee1e5',
        'secondary-fixed-dim':       '#dee1e5',
        'tertiary-container':        '#dee1e5',
        'tertiary-fixed':            '#dee1e5',
        'tertiary-fixed-dim':        '#dee1e5',
        'inverse-primary':           '#dee1e5',

        // ── 10 % — Dark Teal interactive & focal ────────────────────────
        primary:         '#004154',
        'primary-dim':   '#003040',
        'surface-tint':  '#004154',
        secondary:       '#004154',
        'secondary-dim': '#003040',
        tertiary:        '#004154',
        'tertiary-dim':  '#003040',
        error:           '#004154',
        'error-dim':     '#003040',
        'error-container': '#dee1e5',

        // ── 5 % — Off-Black typography & line art ───────────────────────
        'on-surface':                 '#1c1c1c',
        'on-background':              '#1c1c1c',
        'on-surface-variant':         '#4a4a4a',
        'on-primary':                 '#ffffff',
        'on-primary-container':       '#1c1c1c',
        'on-primary-fixed':           '#1c1c1c',
        'on-primary-fixed-variant':   '#004154',
        'on-secondary':               '#ffffff',
        'on-secondary-container':     '#1c1c1c',
        'on-secondary-fixed':         '#1c1c1c',
        'on-secondary-fixed-variant': '#4a4a4a',
        'on-tertiary':                '#ffffff',
        'on-tertiary-container':      '#1c1c1c',
        'on-tertiary-fixed':          '#1c1c1c',
        'on-tertiary-fixed-variant':  '#4a4a4a',
        'on-error':                   '#ffffff',
        'on-error-container':         '#1c1c1c',
        'inverse-surface':            '#1c1c1c',
        'inverse-on-surface':         '#f0f0f0',

        // ── Borders & outlines ───────────────────────────────────────────
        outline: '#9a9fa8',
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body:     ['Inter', 'sans-serif'],
        label:    ['Inter', 'sans-serif'],
        manrope:  ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg:      '0.5rem',
        xl:      '0.7rem',
        '2xl':   '0.7rem',
        '3xl':   '0.7rem',
        full:    '9999px',
      },
    },
  },
  plugins: [],
};

export default config;
