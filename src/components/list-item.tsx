import * as React from 'react';

import { Arrow } from '@/icons';
import { Sorts } from '@/components/list';

function ListItem({
  children,
  ...props
}: Partial<React.ReactHTMLElement<HTMLLIElement>['props']>): JSX.Element {
  const listRef = React.useRef<HTMLLIElement>(null);
  const [type, setType] = React.useState<string>('');

  React.useEffect(() => {
    if (listRef.current && listRef.current.parentElement)
      setType(listRef?.current?.parentElement.nodeName.toLowerCase());
  }, [listRef]);

  if (type === Sorts.UNORDERED)
    return (
      <li
        ref={listRef}
        className="flex flex-row items-baseline h-8 text-base leading-6 sm:text-lg"
        {...props}>
        <span className="pr-2 translate-y-1 sm:pr-3 min-w-40" aria-hidden>
          <Arrow className="w-5 text-blue-1" />
        </span>
        {children}
      </li>
    );
  return (
    <li
      ref={listRef}
      className="h-8 font-mono text-base list-decimal list-inside transform sm:text-lg text-blue-1"
      {...props}>
      <span className="font-sans text-primary">{children}</span>
    </li>
  );
}

export default ListItem;
