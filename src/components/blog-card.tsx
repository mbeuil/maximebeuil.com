import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import Anchor from '@/components/anchor';
import { Information, Language } from '@/models';
import { formatDate } from '@/utils';
import { useWidth } from '@/hooks';

interface CardTitleProps {
  number: number;
  title: string;
  isHover: boolean;
}

function CardTitle({ number, title, isHover }: CardTitleProps): JSX.Element {
  return (
    <div className="flex items-center gap-1">
      <span
        aria-hidden
        className={`pt-1 font-mono text-2xl font-thin sm:text-3xl ${
          isHover ? 'text-blue-2' : 'text-blue-1'
        }`}>
        {number + '.'}
      </span>
      <h3 className="text-2xl font-bold sm:text-3xl text-primary">{title}</h3>
    </div>
  );
}

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
  const { width } = useWidth();
  const [isHover, setIsHover] = React.useState(false);

  const date = formatDate(
    locale === Language.EN ? 'en-US' : 'fr-FR',
    new Date(publishedDate),
  );

  const number = index + 1;

  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Anchor
        className="flex flex-row items-center w-full gap-2 mt-2 border-b border-secondary"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
        {width >= 950 && (
          <span
            aria-hidden
            className={`py-4 font-mono font-thin text-8xl ${
              isHover ? 'text-blue-2' : 'text-blue-1'
            }`}>
            {number}
          </span>
        )}
        <div className="flex flex-col w-full py-4">
          {width >= 950 ? (
            <h3 className="text-2xl font-bold sm:text-3xl text-primary">
              {title}
            </h3>
          ) : (
            <CardTitle number={number} title={title} isHover={isHover} />
          )}
          <div className="bottom-0 flex w-full mb-1 font-mono text-sm">
            {tags.map((tag, id) => (
              <p key={id} className="text-secondary">
                #{tag}
              </p>
            ))}
            <p className="ml-auto text-secondary">{date}</p>
          </div>
          <p className="text-primary sm:text-lg">{description}</p>
        </div>
      </Anchor>
    </NextLink>
  );
}

export default BlogCard;
