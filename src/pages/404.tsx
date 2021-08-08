import NextImage from 'next/image';
import { useI18n } from 'next-localization';
import { GetStaticProps } from 'next';

import image from '../../public/images/404.webp';
import Container from '@/components/container';
import BlogTitle from '@/components/blog-title';
import { size } from '@/utils';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

  return {
    props: { lngDict },
  };
};

function Custom404(): JSX.Element {
  const i18n = useI18n();

  const meta = {
    title: '404 - Maxime Beuil',
    description: i18n.t('blog.meta_description'),
  };

  return (
    <Container customMeta={meta}>
      <div className="w-full py-20">
        <BlogTitle>{i18n.t('custom404.title')}</BlogTitle>
        <NextImage
          alt={i18n.t('custom404.image_alt')}
          src={image}
          width={size.WIDTH}
          height={size.HEIGHT}
          priority
          placeholder="empty"
        />
        <p className="mt-10 sm:mt-14 text-secondary sm:text-lg">
          {i18n.t('custom404.text')}
        </p>
      </div>
    </Container>
  );
}

export default Custom404;
