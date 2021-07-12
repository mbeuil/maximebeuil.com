import Head from 'next/head';
import { useRouter } from 'next/router';
import { useI18n } from 'next-localization';

import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';
import { Language } from '@/models';

const Container: React.FC = (props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const i18n = useI18n();

  const meta = {
    title: i18n.t('seo.title'),
    description: i18n.t('seo.description'),
    ogImage: i18n.t('seo.image.url'),
    ogImageAlt: i18n.t('seo.image.alt'),
    type: 'website',

    ...customMeta,
  };
  const language = router.locale;
  const otherLanguage = language === Language.EN ? 'fr_FR' : 'en_US';
  const selectedLanguage = language === Language.EN ? 'en_US' : 'fr_FR';
  const path = language === Language.EN ? router.asPath : `/fr${router.asPath}`;

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* Open Graph tags */}
        <meta property="og:site_name" content="Maxime Beuil" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://maximebeuil.com${path}`} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:image:alt" content={meta.ogImageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:locale" content={selectedLanguage} />
        <meta property="og:locale:alternate" content={otherLanguage} />
      </Head>
      <NavBar />
      <main
        id="skip"
        className="min-h-screen max-w-5xl px-5 flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
