import * as React from 'react';
import { useI18n } from 'next-localization';

import { Weather } from '@/icons';
import { Theme } from '@/models';

const ThemeButton: React.FC = () => {
  const i18n = useI18n();
  const [theme, setTheme] = React.useState(() => {
    return document.body.classList.item(0) as string;
  });

  React.useEffect(() => {
    if (theme === Theme.DARK) {
      document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    } else {
      document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isDark = theme === Theme.DARK;
  const handleClick = (): void => setTheme(isDark ? Theme.LIGHT : Theme.DARK);

  return (
    <>
      <button
        aria-label={i18n.t('nav.theme')}
        title={i18n.t('nav.theme')}
        className="rounded relative hover:bg-secondary theme-transition-3 inline-block h-10 w-10 leading-10 overflow-hidden"
        onClick={handleClick}>
        <Weather
          theme={Theme.LIGHT}
          className={`text-primary-1 h-6 w-6 m-2 relative block transition transform duration-300 ${
            isDark ? '-translate-y-10' : ''
          }`}
        />
        <Weather
          theme={Theme.DARK}
          className={`text-primary-1 h-6 w-6 m-2 mt-4 relative block transition transform duration-300 ${
            isDark ? '-translate-y-10' : ''
          }`}
        />
      </button>
    </>
  );
};

export default ThemeButton;
