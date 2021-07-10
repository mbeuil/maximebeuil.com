const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        quaternary: 'var(--color-bg-quaternary)',
        button: 'var(--button-primary-bg)',
        hover: 'var(--button-primary-bg-hover)',
      },
      textColor: {
        primary: {
          1: 'var(--color-base-1)',
          2: 'var(--color-base-2)',
        },
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        blue: 'var(--button-primary-bg)',
        link: 'var(--color-link)',
        background: 'var(--color-bg-primary)',
      },
      borderColor: {
        blue: 'var(--button-primary-bg)',
      },
      stroke: ['hover', 'focus'],
      svgStroke: ['focus'],
      gridTemplateRows: {
        page: 'auto 1fr',
      },
      margin: {
        '-38': '-38px',
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
