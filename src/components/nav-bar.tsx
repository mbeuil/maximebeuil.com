import * as React from 'react';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import { useI18n } from 'next-localization';

import { Logo } from '@/icons';
import LanguageButton from '@/components/language-button';

const ThemeButton = dynamic(() => import('@/components/theme-button'), {
  ssr: false,
});

const NavBar: React.FC = () => {
  const i18n = useI18n();

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
      <ThemeButton />
      <LanguageButton />
      <button className="btn-blog">blog</button>
    </div>
  );
};

export default NavBar;
