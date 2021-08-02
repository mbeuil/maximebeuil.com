import { Language } from './language';

export interface Meta {
  title?: string;
  description?: string;
  locale?: Language;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedDate?: string;
  tags?: string[];
  alternate?: string;
  isPublished?: boolean;
}
