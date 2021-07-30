import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    const setInitialTheme = `
    function getThemePreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.classList.add(getThemePreference());
  `;

    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/FiraCode-VarFont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/apple-touch-icon.png"
            sizes="180x180"
          />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#14191e"
          />
          <meta name="theme-color" content="#0d1219" />
          <meta name="color-scheme" content="dark light" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
