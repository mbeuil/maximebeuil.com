import Head from 'next/head';
import { useRouter } from 'next/router';
import { useI18n } from 'next-localization';

import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';
import { Language, Meta } from '@/models';

interface ContainerProps {
  children: React.ReactNode;
  customMeta?: Meta;
}

function Container({ children, customMeta }: ContainerProps): JSX.Element {
  const router = useRouter();
  const i18n = useI18n();

  const meta = {
    title: i18n.t('meta.title'),
    description: i18n.t('meta.description'),
    image: i18n.t('meta.image.url'),
    imageAlt: i18n.t('meta.image.alt'),
    type: 'website',

    ...customMeta,
  };

  const language = router.locale;
  const otherLanguage = language === Language.EN ? 'fr_FR' : 'en_US';
  const selectedLanguage = language === Language.EN ? 'en_US' : 'fr_FR';
  const path = language === Language.EN ? router.asPath : `/fr${router.asPath}`;

  const isArticle = meta.type === 'article';

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={meta.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="canonical" href={`https://maximebeuil.com${path}`} />
        {/* Localized html tags */}
        <link
          rel="alternate"
          href={`https://maximebeuil.com${
            isArticle && meta.locale !== Language.EN
              ? meta.alternate
              : router.asPath
          }`}
          hrefLang={Language.EN}
        />
        <link
          rel="alternate"
          href={`https://maximebeuil.com/fr${
            isArticle && meta.locale !== Language.FR
              ? meta.alternate
              : router.asPath
          }`}
          hrefLang={Language.FR}
        />
        <link
          rel="alternate"
          href={`https://maximebeuil.com${
            isArticle && meta.locale !== Language.EN
              ? meta.alternate
              : router.asPath
          }`}
          hrefLang="x-default"
        />
        {/* Open Graph tags */}
        <meta property="og:site_name" content="Maxime Beuil" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://maximebeuil.com${path}`} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.imageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:locale" content={selectedLanguage} />
        <meta property="og:locale:alternate" content={otherLanguage} />
        {isArticle && (
          <>
            <meta
              property="article:published_time"
              content={meta.publishedDate}
            />
            {meta.tags?.map((tag) => (
              <meta property="article:tag" key={tag} content={tag} />
            ))}
          </>
        )}
        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Crazy_Fiz" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={meta.imageAlt} />
      </Head>
      <a href="#skip" className="sr-only">
        {i18n.t('a11y.skip_to_content')}
      </a>
      <div className="pointer-events-none shell-noise z-[-1]" />
      <NavBar
        path={isArticle && meta.alternate ? meta.alternate : router.asPath}
      />
      <main
        id="skip"
        className="flex flex-col items-center justify-center w-full max-w-3xl px-5 min-h-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Container;
