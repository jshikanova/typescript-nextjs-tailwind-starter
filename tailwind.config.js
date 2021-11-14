const plugin = require('tailwindcss/plugin');

const textVariants = {
  '.title600': {
    fontSize: 'clamp(64px, calc((68 / (var(--screen) / 100)) * 1vw), 72px)',
    fontWeight: 700,
    lineHeight: 1.6,
  },
  '.title500': {
    fontSize: 'clamp(56px, calc((60 / (var(--screen) / 100)) * 1vw), 64px)',
    fontWeight: 700,
    lineHeight: 1.5,
  },
  '.title400': {
    fontSize: 'clamp(48px, calc((52 / (var(--screen) / 100)) * 1vw), 56px)',
    fontWeight: 700,
    lineHeight: 1.4,
  },
  '.title300': {
    fontSize: 'clamp(40px, calc((44 / (var(--screen) / 100)) * 1vw), 48px)',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  '.title200': {
    fontSize: 'clamp(32px, calc((36 / (var(--screen) / 100)) * 1vw), 40px)',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  '.title100': {
    fontSize: 'clamp(24px, calc((28 / (var(--screen) / 100)) * 1vw), 32px)',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  '.text300': {
    fontSize: 'clamp(16px, calc((19 / (var(--screen) / 100)) * 1vw), 24px)',
    fontWeight: 400,
    lineHeight: 1,
  },
  '.text200': {
    fontSize: 'clamp(14px, calc((15 / (var(--screen) / 100)) * 1vw), 16px)',
    fontWeight: 400,
    lineHeight: 1,
  },
  '.text100': {
    fontSize: 'clamp(12px, calc((13 / (var(--screen) / 100)) * 1vw), 14px)',
    fontWeight: 400,
    lineHeight: 1,
  },
};

module.exports = {
  purge: ['./**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      12: '12px',
      16: '16px',
    },
    colors: {
      'steel-teal': 'var(--steel-teal)',
      'cadet-blue': 'var(--cadet-blue)',
      'morning-blue': 'var(--morning-blue)',
      'powder-blue': 'var(--powder-blue)',
      cultured: 'var(--cultured)',
      apricot: 'var(--apricot)',
      onyx: 'var(--onyx)',
    },
    container: false,
    screens: {
      // bs: { min: '0px', max: '647px' },
      // xs: { min: '648px', max: '767px' },
      // sm: { min: '768px', max: '1023px' },
      // md: { min: '1024px', max: '1439px' },
      // lg: { min: '1440px', max: '1919px' },
      // xl: { min: '1920px', max: '2559px' },
      // xxl: { min: '2560px' },
      xs: { max: '480px' },
      sm: { min: '481px', max: '768px' },
      md: { min: '769px', max: '1024px' },
      lg: { min: '1025px', max: '1200px' },
      xl: { min: '1201px', max: '1440px' },
      xxl: { min: '1441px' },
    },
    spacing: {
      0: '0px',
      '1px': '1px',
      '4px': '4px',
      1: '8px',
      '12px': '12px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
      11: '88px',
      12: '96px',
      13: '104px',
      14: '112px',
      15: '120px',
      16: '128px',
      17: '136px',
      18: '144px',
      19: '152px',
      20: '160px',
      21: '168px',
      22: '176px',
      23: '184px',
      24: '192px',
      25: '200px',
    },
    fontFamily: { DEFAULT: 'var(--default-font)' },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(textVariants, { respectImportant: false });
    }),
  ],
};
