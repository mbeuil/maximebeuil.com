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
      <p className="text-primary-1 ">{i18n.t('introduction.title')}</p>
    </Container>
  );
};

export default Home;
