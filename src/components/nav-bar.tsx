import * as React from 'react';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import { useI18n } from 'next-localization';

import Anchor from '@/components/anchor';
import LanguageButton from '@/components/language-button';
import { Logo } from '@/icons';

const ThemeButton = dynamic(() => import('@/components/theme-button'), {
  ssr: false,
});

interface NavBarProps {
  path: string;
}

function NavBar({ path }: NavBarProps): JSX.Element {
  const i18n = useI18n();

  return (
    <nav className="fixed z-10 flex flex-row items-center w-full max-w-5xl gap-2 px-5 pt-3 pb-3 sm:pt-5 sm:gap-3 backdrop-filter backdrop-blur-xl">
      <NextLink href="/" passHref>
        <Anchor
          aria-label={i18n.t('nav.logo')}
          title={i18n.t('nav.logo')}
          className="mr-auto text-primary hover:text-primaryHover">
          <Logo />
        </Anchor>
      </NextLink>
      <ThemeButton />
      <LanguageButton path={path} />
      <NextLink href="/blog" passHref>
        <Anchor className="btn-blog">blog</Anchor>
      </NextLink>
    </nav>
  );
}

export default NavBar;
