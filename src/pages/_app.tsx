import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const { messages, ...rest } = pageProps;
  const router = useRouter();

  return (
    <IntlProvider messages={messages} locale={router?.locale as string}>
      <Component {...rest} />
    </IntlProvider>
  );
}
export default MyApp;
