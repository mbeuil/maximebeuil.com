import fs from 'fs';
import globby from 'globby';
import matter from 'gray-matter';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');

  const locales = ['en', 'fr'];
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'src/pages/*.tsx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx',
  ]);
  const posts = await globby(['posts/*.mdx']);

  const mapPages = pages.map((page: string) => {
    const path = page.replace('src/pages', '').replace('.tsx', '');
    const route = path === '/index' ? '' : path;

    return locales
      .map((locale) => {
        const isLocaleFrench = locale === 'fr' ? '/fr' : '';
        const url = `https://maximebeuil.com${isLocaleFrench}${route}`;
        const alternateLocal = locale === 'fr' ? 'en' : 'fr';
        const alternateLanguage = locale === 'fr' ? '' : '/fr';
        const alternatUrl = `https://maximebeuil.com${alternateLanguage}${route}`;

        return `
        <url>
            <loc>${url}</loc>
            <xhtml:link rel="alternate" hreflang="${locale}" href="${url}" />
            <xhtml:link rel="alternate" hreflang="${alternateLocal}" href="${alternatUrl}" />
        </url>
        `;
      })
      .join('');
  });

  const mapPosts = posts.map((post: string) => {
    const path = post.replace('posts', '/blog').replace('.mdx', '');
    const source = fs.readFileSync(post, 'utf8');
    const { data } = matter(source);

    const isLocaleFrench = data.locale === 'fr' ? '/fr' : '';
    const url = `https://maximebeuil.com${isLocaleFrench}${path}`;
    const alternateLocal = data.locale === 'fr' ? 'en' : 'fr';
    const alternateLanguage = data.locale === 'fr' ? '' : '/fr';
    const alternatUrl = `https://maximebeuil.com${alternateLanguage}${data.alternate}`;

    return `
        <url>
            <loc>${url}</loc>
            <xhtml:link rel="alternate" hreflang="${data.locale}" href="${url}" />
            <xhtml:link rel="alternate" hreflang="${alternateLocal}" href="${alternatUrl}" />
        </url>
        `;
  });

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${mapPages.join('')}
    ${mapPosts.join('')}
    </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap.replace(/\n/g, ''), {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
