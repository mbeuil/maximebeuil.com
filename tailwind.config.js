/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
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
      minHeight: {
        main: 'calc(100vh - 40px)',
      },
      margin: {
        footer: 'calc(100% - 80px)',
      },
      backgroundImage: {
        noise: "url('/images/noise.jpg')",
      },
      animation: {
        noise: 'grain 8s steps(10) infinite',
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
