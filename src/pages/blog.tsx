import Image from 'next/image';
import { useI18n } from 'next-localization';
import { GetStaticProps } from 'next';

import image from '../../public/images/mb-working.webp';
import Container from '@/components/container';
import BlogCard from '@/components/blog-card';
import BlogTitle from '@/components/blog-title';
import { Information } from '@/models';
import { size } from '@/utils';
import { getAllPosts } from '@/utils/mdx';

interface BlogProps {
  posts: Information[];
}

export default function Blog({ posts }: BlogProps): JSX.Element {
  const i18n = useI18n();

  const meta = {
    title: 'Blog - Maxime Beuil',
    description: i18n.t('blog.meta_description'),
  };

  return (
    <Container customMeta={meta}>
      <div className="w-full py-20">
        <BlogTitle>Blog</BlogTitle>
        <Image
          alt={i18n.t('blog.image_alt')}
          src={image}
          width={size.WIDTH}
          height={size.HEIGHT}
          priority
          placeholder="empty"
        />
        <h2 className="sr-only">{i18n.t('blog.sub_header')}</h2>
        <ul className="flex flex-col gap-5 mt-5 sm:mt-10">
          {!posts.length && (
            <p className="self-center text-secondary sm:text-lg">
              {i18n.t('blog.empty_page')}
            </p>
          )}
          {posts.map((post, index) => (
            <li key={post.title} className="list-none">
              <BlogCard index={index} key={post.title} {...post} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);
  const posts = getAllPosts(locale);

  return {
    props: { lngDict, posts },
  };
};
