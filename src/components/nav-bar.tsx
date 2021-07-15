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
    <div className="absolute flex flex-row items-center w-full max-w-5xl gap-2 px-5 mt-5 sm:gap-3">
      <NextLink href="/" passHref>
        <button
          aria-label={i18n.t('nav.logo')}
          title={i18n.t('nav.logo')}
          className="mr-auto text-primary-1 hover:text-primary-2">
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
