import * as React from 'react';
import NextLink from 'next/link';
import { useI18n } from 'next-localization';

import { Logo } from '@/icons';
import LanguageButton from '@/components/language-button';
import ThemeButton from '@/components/theme-button';

const NavBar: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const i18n = useI18n();

  React.useEffect(() => setMounted(true), []);

  return (
    <div className="absolute max-w-5xl flex flex-row w-full mt-5 items-center gap-3 px-5">
      <NextLink href="/" passHref>
        <button
          aria-label={i18n.t('nav.logo')}
          title={i18n.t('nav.logo')}
          className="text-primary-1 hover:text-primary-2 mr-auto">
          <Logo />
        </button>
      </NextLink>
      {mounted && <ThemeButton />}
      <LanguageButton />
      <button className="btn-blog">blog</button>
    </div>
  );
};

export default NavBar;
