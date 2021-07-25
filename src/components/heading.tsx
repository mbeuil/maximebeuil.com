import * as React from 'react';

export enum Headings {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

interface HeadingProps {
  type: Headings;
  children?: React.ReactNode;
}

function Heading({ type = Headings.H1, children }: HeadingProps): JSX.Element {
  switch (type) {
    case Headings.H1:
      return (
        <h1 className="my-5 text-5xl font-bold text-primary">{children}</h1>
      );
    case Headings.H2:
      return (
        <h2 className="my-5 text-4xl font-bold text-primary">{children}</h2>
      );
    case Headings.H3:
      return (
        <h3 className="my-3 text-3xl font-bold text-primary">{children}</h3>
      );
    case Headings.H4:
      return (
        <h4 className="my-3 text-2xl font-bold text-primary">{children}</h4>
      );
    case Headings.H5:
      return (
        <h5 className="my-2 text-xl font-bold text-primary">{children}</h5>
      );
    case Headings.H6:
      return (
        <h6 className="my-2 text-lg font-bold text-primary">{children}</h6>
      );
  }
}

export default Heading;
