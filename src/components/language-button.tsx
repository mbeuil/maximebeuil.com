import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useI18n } from 'next-localization';

import { useClickAwayListener } from '@/hooks';
import { Arrow, Flags } from '@/icons';
import { Language } from '@/models';

const LanguageButton: React.FC = () => {
  const { locale, asPath } = useRouter();
  const i18n = useI18n();
  const [visible, setVisible] = React.useState(false);
  const languageButtonRef = useClickAwayListener<HTMLDivElement>(() =>
    setVisible(false),
  );

  const handleClick = (): void => setVisible(!visible);

  const selectedLanguage = locale === Language.FR ? Language.FR : Language.EN;
  const otherLanguage = locale === Language.FR ? Language.EN : Language.FR;
  const to = locale === Language.FR ? asPath : `/fr${asPath}`;

  return (
    <div ref={languageButtonRef} className="relative">
      <button
        aria-haspopup="listbox"
        aria-expanded={visible}
        aria-label={i18n.t('nav.language_selected')}
        title={i18n.t('nav.language_selected')}
        className="px-4 py-1 rounded relative hover:bg-secondary flex flex-row items-center gap-3"
        onClick={handleClick}>
        <Flags
          language={selectedLanguage}
          className="w-7 h-7 filter grayscale"
        />
        <Arrow
          className={`w-4 h-4 text-primary-1 transition transform duration-200 ${
            visible ? 'rotate-180' : ''
          }`}
        />
      </button>
      {visible && (
        <ul
          id="exp_elem_list"
          tabIndex={-1}
          role="listbox"
          aria-label={i18n.t('nav.language_list')}
          className="bg-secondary absolute py-2 rounded top-12 right-0 w-36">
          <li aria-selected role="option">
            <NextLink href={to} locale={otherLanguage} passHref>
              <button
                aria-label={i18n.t('nav.language_goto')}
                title={i18n.t('nav.language_goto')}
                className="hover:bg-tertiary flex flex-row h-8 px-4 items-center gap-3 w-full">
                <Flags language={otherLanguage} className="w-7 h-7" />
                <span className="text-secondary text-lg">
                  {locale === Language.FR ? 'english' : 'français'}
                </span>
              </button>
            </NextLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageButton;
