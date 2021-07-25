import * as React from 'react';

export enum Sorts {
  ORDERED = 'ol',
  UNORDERED = 'ul',
}

interface ListProps
  extends Partial<
    React.ReactHTMLElement<HTMLOListElement | HTMLUListElement>['props']
  > {
  type: Sorts;
}

function List({ type, children }: ListProps): JSX.Element {
  switch (type) {
    case Sorts.ORDERED:
      return (
        <ol className="my-5 text-gray-800 list-decimal text-secondary">
          {children}
        </ol>
      );
    case Sorts.UNORDERED:
      return <ul className="my-5 text-primary">{children}</ul>;
  }
}

export default List;
