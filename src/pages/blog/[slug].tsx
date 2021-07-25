import * as React from 'react';
import fs from 'fs';
import matter from 'gray-matter';

import { BlogPost } from '@/models';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { getSinglePost, getSourceOfFile, POSTS_PATH } from '@/utils/mdx';
import BlogLayout from '@/components/blog-layout';

function Post(props: BlogPost): JSX.Element {
  return <BlogLayout {...props} />;
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  if (params?.slug) {
    const language = await import(`../../locales/${locale}.json`);
    const post = await getSinglePost(params?.slug as string);

    return {
      props: {
        ...post,
        lngDict: language.default,
      },
    };
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs.readdirSync(POSTS_PATH);

  const paths: GetStaticPathsResult['paths'] = [];
  posts.forEach((fileName) => {
    const source = getSourceOfFile(fileName);
    const slug = fileName.replace(/\.mdx?$/, '');
    const { data } = matter(source);

    if (data.isPublished) {
      paths.push({
        params: {
          slug,
        },
        locale: data.locale,
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export default Post;
