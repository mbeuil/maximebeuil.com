import * as React from 'react';
import NextLink from 'next/link';

import { Logo } from '@/icons';
import LanguageButton from '@/components/language-button';

const NavBar: React.FC = () => {
  return (
    <div className="absolute max-w-5xl flex flex-row w-full mt-5 items-center gap-3">
      <NextLink href="/" passHref>
        <Logo />
      </NextLink>
      <LanguageButton />
      <button className="ml-auto btn-blog">blog</button>
    </div>
  );
};

export default NavBar;
