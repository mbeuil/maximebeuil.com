import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#14191e" />
          <meta name="color-scheme" content="dark light" />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `function getThemePreference(){return localStorage.getItem("theme")?localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.body.classList.add(getThemePreference());`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
