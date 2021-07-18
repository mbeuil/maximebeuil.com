export interface BlogPost {
  code: string;
  frontmatter: Frontmatter;
}

export interface Information extends Frontmatter {
  slug: string;
}

export interface Frontmatter {
  title: string;
  description: string;
  locale: string;
  alternate: string;
  isPublished: boolean;
  publishedDate: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
}
