import { useRouter } from 'next/router';
import { I18nProvider } from 'next-localization';
import '@/styles/index.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const { lngDict, ...rest } = pageProps;
  const router = useRouter();

  return (
    <I18nProvider lngDict={lngDict} locale={router?.locale as string}>
      <Component {...rest} />
    </I18nProvider>
  );
}
export default MyApp;
