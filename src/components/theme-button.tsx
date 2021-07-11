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

  const handleClick = (): void =>
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);

  return (
    <button
      aria-label={i18n.t('nav.theme')}
      title={i18n.t('nav.theme')}
      className="px-2 py-1 rounded relative hover:bg-secondary flex flex-row items-center gap-3 theme-transition-3"
      onClick={handleClick}>
      <Weather
        theme={theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}
        className="text-secondary h-6 w-6"
      />
    </button>
  );
};

export default ThemeButton;
