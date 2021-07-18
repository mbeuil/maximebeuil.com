import Link from 'next/link';
import { useState } from 'react';

import { Information } from '@/models';

function BlogCard({
  description,
  publishedDate,
  tags,
  title,
  slug,
}: Information): JSX.Element {
  const [isHover, setIsHover] = useState(false);
  const handleHover = (): void => setIsHover(!isHover);
  return (
    <Link href={`/blog/${slug}`} passHref>
      <button
        className="flex flex-col w-full px-3 py-5 rounded sm:px-8 bg-secondary"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
        <h4 className="text-2xl font-bold text-primary">{title}</h4>
        <p className="text-justify text-primary">{description}</p>
        <div className="flex w-full mt-4 text-sm font-fira">
          {tags.map((tag, id) => (
            <p key={id} className="text-secondary">
              #{tag}
            </p>
          ))}
          <p className="ml-auto text-secondary">{publishedDate}</p>
        </div>
      </button>
    </Link>
  );
}

export default BlogCard;
