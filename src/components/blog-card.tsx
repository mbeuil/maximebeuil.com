import NextLink from 'next/link';
import { useRouter } from 'next/router';

import Anchor from '@/components/anchor';
import { Information, Language } from '@/models';
import { formatDate } from '@/utils';

function BlogCard({
  description,
  publishedDate,
  tags,
  title,
  slug,
}: Information): JSX.Element {
  const { locale } = useRouter();

  const date = formatDate(
    locale === Language.EN ? 'en-US' : 'fr-FR',
    new Date(publishedDate),
  );

  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Anchor className="flex flex-col w-full px-3 py-5 rounded sm:px-8 bg-secondary">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className="text-primary">{description}</p>
        <div className="flex w-full mt-4 text-sm font-fira">
          {tags.map((tag, id) => (
            <p key={id} className="text-secondary">
              #{tag}
            </p>
          ))}
          <p className="ml-auto text-secondary">{date}</p>
        </div>
      </Anchor>
    </NextLink>
  );
}

export default BlogCard;
