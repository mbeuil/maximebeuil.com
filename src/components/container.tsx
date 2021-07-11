import Head from 'next/head';
import { useRouter } from 'next/router';

import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';

const Container: React.FC = (props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: 'Maxime Beuil – Developer.',
    description: `React enthusiast, book lover and Crossfit adept.`,
    type: 'website',
    ...customMeta,
  };

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://maximebeuil.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://maximebeuil.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Maxime Beuil" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Crazy_Fiz" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <NavBar />
      <main
        id="skip"
        className="min-h-screen max-w-5xl px-5 flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
