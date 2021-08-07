import * as React from 'react';
import NextImage from 'next/image';

import { size } from '@/utils';

function Image({
  src = '',
  alt,
}: Partial<React.HTMLProps<HTMLImageElement>>): JSX.Element {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={size.WIDTH}
      height={size.HEIGHT}
      placeholder="empty"
    />
  );
}

export default Image;
