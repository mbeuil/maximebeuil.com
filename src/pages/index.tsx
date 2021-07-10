import * as React from 'react';
import type { GetStaticProps } from 'next';
import { useI18n } from 'next-localization';

import NavBar from '@/components/nav-bar';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

  return {
    props: { lngDict },
  };
};

export const Home: React.FC = () => {
  const i18n = useI18n();

  return (
    <div className="flex min-h-screen justify-center">
      <NavBar />
      <p className="text-primary self-center">{i18n.t('introduction.title')}</p>
    </div>
  );
};

export default Home;
