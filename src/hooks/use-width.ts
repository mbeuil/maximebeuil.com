import * as React from 'react';

import { BREAKPOINT } from '@/utils';

const getWidth = (): number =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export const useWidth = (): { width: number } => {
  const [width, setWidth] = React.useState(BREAKPOINT);

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };

    setWidth(getWidth());

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return { width };
};
