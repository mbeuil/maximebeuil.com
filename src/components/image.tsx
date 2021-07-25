import * as React from 'react';
import NextImage from 'next/image';

function Image({
  src = '',
  alt,
}: Partial<React.HTMLProps<HTMLImageElement>>): JSX.Element {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={700}
      height={302}
      placeholder="empty"
    />
  );
}

export default Image;
