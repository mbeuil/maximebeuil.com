import * as React from 'react';
import type { GetStaticProps } from 'next';
import { useI18n } from 'next-localization';

import Container from '@/components/container';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

  return {
    props: { lngDict },
  };
};

export const Home: React.FC = () => {
  const i18n = useI18n();

  return (
    <Container>
      <div className="">
        <p className="text-blue sm:text-lg font-fira">
          {i18n.t('home.greetings')}
        </p>
        <h1 className="text-primary-1 text-4xl font-bold mt-4 sm:text-6xl lg:text-7xl">
          Maxime Beuil
        </h1>
        <h2 className="text-secondary text-3xl font-bold mt-4 sm:text-6xl lg:text-7xl">
          {i18n.t('home.short_description')}
        </h2>
        <h2 className="text-secondary sm:text-lg mt-10 max-w-lg text-justify">
          {i18n.t('home.long_description')}
        </h2>
      </div>
    </Container>
  );
};

export default Home;
