import NextLink from 'next/link';
import { useRouter } from 'next/router';

import Anchor from '@/components/anchor';
import { Information, Language } from '@/models';
import { formatDate } from '@/utils';

interface BlogCardProps extends Information {
  index: number;
}

function BlogCard({
  index,
  description,
  publishedDate,
  tags,
  title,
  slug,
}: BlogCardProps): JSX.Element {
  const { locale } = useRouter();

  const date = formatDate(
    locale === Language.EN ? 'en-US' : 'fr-FR',
    new Date(publishedDate),
  );

  const number = index + 1;
  const articlesNumber =
    number < 10 ? `0${number.toString()}` : number.toString();

  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Anchor className="flex flex-row items-center w-full pb-3 border-b border-secondary">
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <span
              aria-hidden
              className="mr-1 font-mono text-2xl font-thin text-blue-1">
              {articlesNumber}.
            </span>
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
          </div>
          <div className="bottom-0 flex w-full mb-1 font-mono text-sm">
            {tags.map((tag, id) => (
              <p key={id} className="text-secondary">
                #{tag}
              </p>
            ))}
            <p className="ml-auto text-secondary">{date}</p>
          </div>
          <p className="text-primary">{description}</p>
        </div>
      </Anchor>
    </NextLink>
  );
}

export default BlogCard;
