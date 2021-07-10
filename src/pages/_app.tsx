import * as React from 'react';
import { useRouter } from 'next/router';
import { I18nProvider } from 'next-localization';

import type { AppProps } from 'next/app';
import '@/styles/index.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { lngDict, ...rest } = pageProps;
  const router = useRouter();

  return (
    <I18nProvider lngDict={lngDict} locale={router?.locale as string}>
      <Component {...rest} />
    </I18nProvider>
  );
};
export default MyApp;
