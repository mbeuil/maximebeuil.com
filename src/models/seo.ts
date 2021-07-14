export interface Seo {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  type: 'website' | 'article';
  publishedDate: string;
  tags: string[];
}
