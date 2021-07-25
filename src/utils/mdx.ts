import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import unwrapImages from 'remark-unwrap-images';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const highlight = require('rehype-highlight');

import { BlogPost, Frontmatter, Information } from '@/models';

export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const getSourceOfFile = (fileName: string): string =>
  fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf8');

export function getAllPosts(locale?: string): Information[] {
  const files = fs.readdirSync(POSTS_PATH);

  return files
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, '');
      const { data } = matter(source);

      return {
        ...(data as Frontmatter),
        slug,
      };
    })
    .filter((blog) => blog.isPublished)
    .filter((blog) => blog.locale === locale)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)),
    );
}

export async function getSinglePost(slug: string): Promise<BlogPost> {
  const source = getSourceOfFile(slug + '.mdx');
  const result = await bundleMDX(source, {
    xdmOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), highlight];
      options.remarkPlugins = [...(options.remarkPlugins ?? []), unwrapImages];
      return options;
    },
  });

  return result as BlogPost;
}
