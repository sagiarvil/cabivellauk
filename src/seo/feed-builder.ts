import type { SeoPageRecord } from './registry.types';

export function buildRssFeed(pages: SeoPageRecord[], domain = 'cabivella.co.uk'): string {
  const origin = `https://${domain}`;
  const now = new Date().toUTCString();

  const items = pages
    .filter(p => p.indexDirective === 'index, follow')
    .map(p => `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${origin}${p.route}</link>
      <guid isPermaLink="true">${origin}${p.route}</guid>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${p.metaDescription}]]></description>
      <content:encoded><![CDATA[${p.heroAnswerEngine}]]></content:encoded>
    </item>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Cabivella UK — Architectural Cabinetry &amp; Bespoke Joinery</title>
    <link>${origin}/</link>
    <atom:link href="${origin}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Official syndication feed for Cabivella UK made-to-measure cabinetry, kitchens, bathrooms, pantry and architectural storage suites.</description>
    <language>en-gb</language>
    <lastBuildDate>${now}</lastBuildDate>
${items}
  </channel>
</rss>`;
}

export function buildAtomFeed(pages: SeoPageRecord[], domain = 'cabivella.co.uk'): string {
  const origin = `https://${domain}`;
  const now = new Date().toISOString();

  const entries = pages
    .filter(p => p.indexDirective === 'index, follow')
    .map(p => `  <entry>
    <title>${p.title}</title>
    <link href="${origin}${p.route}" />
    <id>${origin}${p.route}</id>
    <updated>${new Date(p.modifiedAt).toISOString()}</updated>
    <published>${new Date(p.publishedAt).toISOString()}</published>
    <summary>${p.metaDescription}</summary>
    <content type="html"><![CDATA[${p.heroAnswerEngine}]]></content>
  </entry>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Cabivella UK — Master Syndication Feed</title>
  <id>${origin}/</id>
  <link href="${origin}/" />
  <link href="${origin}/atom.xml" rel="self" type="application/atom+xml" />
  <updated>${now}</updated>
  <subtitle>Bespoke British architectural cabinetry and joinery specifications.</subtitle>
${entries}
</feed>`;
}

export function buildJsonFeed(pages: SeoPageRecord[], domain = 'cabivella.co.uk'): string {
  const origin = `https://${domain}`;

  const items = pages
    .filter(p => p.indexDirective === 'index, follow')
    .map(p => ({
      id: `${origin}${p.route}`,
      url: `${origin}${p.route}`,
      title: p.title,
      content_text: p.heroAnswerEngine,
      summary: p.metaDescription,
      date_published: new Date(p.publishedAt).toISOString(),
      date_modified: new Date(p.modifiedAt).toISOString()
    }));

  return JSON.stringify(
    {
      version: 'https://jsonfeed.org/version/1.1',
      title: 'Cabivella UK — RAG-Optimized Feed',
      home_page_url: `${origin}/`,
      feed_url: `${origin}/feed.json`,
      description: 'Directory of architectural cabinetry specifications and made-to-measure collections.',
      items
    },
    null,
    2
  );
}

export function buildMobileFeed(pages: SeoPageRecord[], domain = 'cabivella.co.uk'): string {
  const origin = `https://${domain}`;
  const now = new Date().toUTCString();

  const items = pages
    .filter(p => p.indexDirective === 'index, follow')
    .map(p => `    <item>
      <title><![CDATA[${p.h1}]]></title>
      <link>${origin}${p.route}</link>
      <guid>${origin}${p.route}#mobile</guid>
      <description><![CDATA[${p.heroAnswerEngine}]]></description>
      <category>${p.role}</category>
    </item>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Cabivella UK — Mobile &amp; Voice Rapid Feed</title>
    <link>${origin}/mobile/</link>
    <description>Fast mobile and on-device ingestion endpoint for voice queries and AI search.</description>
    <language>en-gb</language>
    <lastBuildDate>${now}</lastBuildDate>
${items}
  </channel>
</rss>`;
}
