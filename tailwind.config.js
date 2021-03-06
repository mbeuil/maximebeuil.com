const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Code"', 'monospace'],
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        quaternary: 'var(--color-bg-quaternary)',
        button: 'var(--button-primary)',
        hover: 'var(--button-secondary)',
        separator: {
          primary: 'var(--border-primary)',
          secondary: 'var(--border-secondary)',
        },
      },
      textColor: {
        primary: 'var(--color-base-1)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        primaryHover: 'var(--color-base-2)',
        blue: {
          1: 'var(--button-primary)',
          2: 'var(--button-secondary)',
          3: 'var(--button-tertiary)',
        },
        link: 'var(--button-tertiary)',
        background: 'var(--color-bg-primary)',
      },
      borderColor: {
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
        blue: 'var(--button-primary)',
      },
      stroke: ['hover', 'focus'],
      svgStroke: ['focus'],
      gridTemplateRows: {
        page: 'auto 1fr',
      },
      margin: {
        footer: 'calc(100% - 80px)',
      },
      padding: {
        1: '6px',
      },
      width: {
        home: '1000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'tb',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
