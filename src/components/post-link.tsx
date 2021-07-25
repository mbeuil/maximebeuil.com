import * as React from 'react';
import NextLink from 'next/link';

import Anchor from '@/components/anchor';

function PostLink({
  href,
  children,
}: Partial<React.HTMLProps<HTMLAnchorElement>>): JSX.Element {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (href && isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Anchor className="text-blue-1 hover:text-blue-2">{children}</Anchor>
      </NextLink>
    );
  }

  return (
    <a
      className="text-blue-1 hover:text-blue-2"
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default PostLink;
