import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { BlogPost, Meta } from '@/models';
import Container from '@/components/container';
import MdxComponents from './mdx-components';
import BlogTitle from './blog-title';

function BlogLayout({ code, frontmatter }: BlogPost): JSX.Element {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const meta: Meta = {
    type: 'article',
    ...frontmatter,
  };

  return (
    <Container customMeta={meta}>
      <article className="w-full pb-16 pt-28 sm:pt-36">
        <BlogTitle text={frontmatter.title} />
        <Component components={MdxComponents} />
      </article>
    </Container>
  );
}

export default BlogLayout;
