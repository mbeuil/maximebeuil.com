import Image from 'next/image';
import { useI18n } from 'next-localization';
import { GetStaticProps } from 'next';

import Container from '@/components/container';
import test from '../../public/images/mb-working.png';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

  return {
    props: { lngDict },
  };
};

function Blog(): JSX.Element {
  const i18n = useI18n();

  const meta = {
    title: 'Blog - Maxime Beuil',
    description: i18n.t('blog.meta_description'),
  };

  return (
    <Container customMeta={meta}>
      <div className="">
        <div className="flex">
          <div className="block w-8 h-px my-auto bg-separator-secondary" />
          <h1 className="mx-5 text-4xl font-bold sm:text-6xl text-primary-1 lg:text-7xl">
            Blog
          </h1>
          <div className="block w-full h-px my-auto bg-separator-secondary" />
        </div>
        <Image
          alt={'Sketch of Maxime Beuil working on his computer'}
          src={test}
          width={700}
          height={302}
          priority
          placeholder="empty"
        />
      </div>
    </Container>
  );
}

export default Blog;
