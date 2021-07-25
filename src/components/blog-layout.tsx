import * as React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { useRouter } from 'next/router';

import BlogTitle from '@/components/blog-title';
import Container from '@/components/container';
import MdxComponents from '@/components/mdx-components';
import { BlogPost, Language, Meta } from '@/models';
import { formatDate } from '@/utils';

function BlogLayout({ code, frontmatter }: BlogPost): JSX.Element {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const { locale } = useRouter();

  const meta: Meta = {
    type: 'article',
    ...frontmatter,
  };

  const date = formatDate(
    locale === Language.EN ? 'en-US' : 'fr-FR',
    new Date(frontmatter.publishedDate),
  );

  return (
    <Container customMeta={meta}>
      <article className="w-full pb-16 pt-28 sm:pt-36">
        <BlogTitle text={frontmatter.title} />
        <div className="flex w-full mt-4 text-sm mb-9 font-fira">
          {frontmatter.tags.map((tag, id) => (
            <p key={id} className="text-secondary">
              #{tag}
            </p>
          ))}
          <p className="ml-auto text-secondary">{date}</p>
        </div>
        <Component components={MdxComponents} />
      </article>
    </Container>
  );
}

export default BlogLayout;
