import * as React from 'react';
import type { GetStaticProps } from 'next';
import { useI18n } from 'next-localization';

import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

  return {
    props: { lngDict },
  };
};

export const Home: React.FC = () => {
  const i18n = useI18n();

  return (
    <div className="flex flex-col min-h-screen items-center">
      <NavBar />
      <p className="text-primary-1 m-auto">{i18n.t('introduction.title')}</p>
      <Footer />
    </div>
  );
};

export default Home;
