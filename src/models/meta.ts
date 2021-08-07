export interface Meta {
  title?: string;
  description?: string;
  locale?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedDate?: string;
  tags?: string[];
  alternate?: string;
  isPublished?: boolean;
}
