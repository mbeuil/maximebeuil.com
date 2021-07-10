import NextLink from 'next/link';
import { Logo } from '@/icons';
import LanguageButton from '@/components/language-button';

function NavBar() {
  return (
    <div className="absolute max-w-5xl flex flex-row w-full mt-5 items-center gap-3">
      <NextLink href="/">
        <a>
          <Logo />
        </a>
      </NextLink>
      <LanguageButton />
      <button className="ml-auto btn-blog">blog</button>
    </div>
  );
}

export default NavBar;
