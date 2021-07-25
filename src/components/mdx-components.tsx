/* eslint-disable react/display-name */
import * as React from 'react';
import type { ComponentMap } from 'mdx-bundler/dist/client';

import Heading, { Headings } from '@/components/heading';
import Image from '@/components/image';
import List, { Sorts } from '@/components/list';
import ListItem from '@/components/list-item';
import PostLink from '@/components/post-link';

const MdxComponents: ComponentMap = {
  h1: (props) => <Heading type={Headings.H1} {...props} />,
  h2: (props) => <Heading type={Headings.H2} {...props} />,
  h3: (props) => <Heading type={Headings.H3} {...props} />,
  h4: (props) => <Heading type={Headings.H4} {...props} />,
  h5: (props) => <Heading type={Headings.H5} {...props} />,
  h6: (props) => <Heading type={Headings.H6} {...props} />,
  p: (props) => (
    <p className="my-2 text-base sm:text-lg text-primary" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="pl-3 mt-6 mb-12 quote" {...props} />
  ),
  ul: (props) => <List type={Sorts.UNORDERED} {...props} />,
  ol: (props) => <List type={Sorts.ORDERED} {...props} />,
  li: ListItem,
  pre: (props) => <pre className="text-sm sm:text-lg out" {...props} />,
  img: Image,
  a: PostLink,
  hr: (props) => <hr className="border-secondary" {...props} />,
};

export default MdxComponents;
