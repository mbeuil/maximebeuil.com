import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useI18n } from 'next-localization';

import { useClickAwayListener } from '@/hooks';
import { Arrow, Flags } from '@/icons';
import { Language } from '@/models';

interface LanguageButtonProps {
  path: string;
}

function LanguageButton({ path }: LanguageButtonProps): JSX.Element {
  const { locale } = useRouter();
  const i18n = useI18n();
  const [visible, setVisible] = React.useState(false);
  const languageButtonRef = useClickAwayListener<HTMLDivElement>(() =>
    setVisible(false),
  );

  const handleClick = (): void => setVisible(!visible);

  const selectedLanguage = locale === Language.FR ? Language.FR : Language.EN;
  const otherLanguage = locale === Language.FR ? Language.EN : Language.FR;
  const to = locale === Language.FR ? path : `/fr${path}`;

  return (
    <div ref={languageButtonRef} className="relative">
      <button
        aria-haspopup="listbox"
        aria-expanded={visible}
        aria-label={i18n.t('nav.language_selected')}
        title={i18n.t('nav.language_selected')}
        className="relative flex flex-row items-center gap-3 px-4 py-1 rounded hover:bg-secondary"
        onClick={handleClick}>
        <Flags
          language={selectedLanguage}
          className="w-7 h-7 filter grayscale"
        />
        <Arrow
          className={`w-4 h-4 text-primary transition transform duration-200 ${
            visible ? 'rotate-180' : ''
          }`}
        />
      </button>
      {visible && (
        <ul
          role="listbox"
          aria-label={i18n.t('nav.language_list')}
          className="absolute right-0 py-2 rounded bg-secondary top-12 w-36">
          <li aria-selected role="option">
            <NextLink href={to} locale={otherLanguage} passHref>
              <button
                aria-label={i18n.t('nav.language_goto')}
                title={i18n.t('nav.language_goto')}
                className="flex flex-row items-center w-full h-8 gap-3 px-4 hover:bg-tertiary">
                <Flags language={otherLanguage} className="w-7 h-7" />
                <span className="text-lg text-secondary">
                  {locale === Language.FR ? 'english' : 'français'}
                </span>
              </button>
            </NextLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageButton;
