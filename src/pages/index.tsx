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

function Home(): JSX.Element {
  const i18n = useI18n();

  return (
    <Container>
      <div className="w-full py-20">
        <p className="font-mono text-blue-1 sm:text-lg">
          {i18n.t('home.greetings')}
        </p>
        <h1 className="mt-4 text-4xl font-bold text-primary sm:text-6xl lg:text-7xl">
          Maxime Beuil
        </h1>
        <h2 className="mt-4 text-3xl font-bold text-secondary sm:text-6xl lg:text-7xl">
          {i18n.t('home.short_description')}
        </h2>
        <p className="max-w-lg mt-10 text-primary sm:text-lg">
          {i18n.t('home.long_description')}
        </p>
      </div>
    </Container>
  );
}

export default Home;
