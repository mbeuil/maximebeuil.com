module.exports = {
  purge: ['./src/**/*.{jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        button: 'var(--button-primary-bg)',
        hover: 'var(--button-primary-bg-hover)',
      },
      textColor: {
        primary: 'var(--color-base)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        blue: 'var(--button-primary-bg)',
        link: 'var(--color-link)',
      },
      borderColor: {
        blue: 'var(--button-primary-bg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
