import Image from 'next/image';
import { useI18n } from 'next-localization';
import { GetStaticProps } from 'next';

import Container from '@/components/container';
import { Information } from '@/models';
import { getAllPosts } from '@/utils/mdx';
import test from '../../public/images/mb-working.png';
import BlogCard from '@/components/blog-card';
import BlogTitle from '@/components/blog-title';

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
      <div className="pb-16 pt-28 sm:pt-36">
        <BlogTitle text="Blog" />
        <Image
          alt={'Sketch of Maxime Beuil working on his computer'}
          src={test}
          width={700}
          height={302}
          priority
          placeholder="empty"
        />
        <h2 className="sr-only">{i18n.t('blog.sub_header')}</h2>
        <div className="flex flex-col gap-5 mt-5 sm:mt-10">
          {!posts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
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
