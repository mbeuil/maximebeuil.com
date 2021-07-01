import { FormattedMessage } from 'react-intl';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const language = await import(`../lang/${locale}.json`);

  return {
    props: {
      messages: language.default,
    },
  };
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <FormattedMessage
        id="introduction_page.title"
        description="Title message for introduction page"
        defaultMessage="Hello world!"
      />
    </div>
  );
}
