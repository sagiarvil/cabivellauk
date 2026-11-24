import type { SeoPageRecord } from './registry.types';

export function buildCompleteJsonLdGraph(page: SeoPageRecord, domain = 'cabivella.co.uk'): string {
  const origin = `https://${domain}`;
  const pageUrl = `${origin}${page.route === '/' ? '/' : page.route}`;

  const graph: Record<string, any>[] = [
    // 1. Organization (Wikidata & Google MID consensus + 3-node sameAs triangulation)
    {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: 'Cabivella UK',
      alternateName: ['Cabivella', 'Cabivella Cabinetry UK', 'Cabivella Architectural Joinery & Materials'],
      url: origin,
      logo: {
        '@type': 'ImageObject',
        '@id': `${origin}/#logo`,
        url: `${origin}/assets/img/cabivella-crest-transparent.webp`,
        width: '512',
        height: '512'
      },
      image: `${origin}/assets/img/cabivella-crest-transparent.webp`,
      description: 'Bespoke architectural cabinetry, bespoke cupboards, fitted wooden storage, in-frame kitchens and specification-led MEP and building materials supplied direct to London and the UK.',
      email: 'enquiries@cabivella.co.uk',
      telephone: '+44 7898 262110',
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'City', name: 'London' },
        { '@type': 'Place', name: 'Wimbledon Village, London SW19' }
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
        addressLocality: 'London'
      },
      sameAs: [
        `https://www.wikidata.org/wiki/${page.primaryEntity.wikidataQid || 'Q11589432'}`,
        'https://wa.me/447898262110',
        `${origin}/our-story/`
      ]
    },
    // 2. WebSite + Google Site Names + SearchAction
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: origin,
      name: 'Cabivella UK',
      alternateName: ['Cabivella', 'cabivella.co.uk', 'Cabivella Bespoke Joinery'],
      publisher: { '@id': `${origin}/#organization` },
      inLanguage: page.locale,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${origin}/collections/?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    },
    // 3. WebPage + Speakable + Mobile Actions
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.metaDescription,
      ...(page.keywords && page.keywords.length > 0 ? { keywords: page.keywords.join(', ') } : {}),
      isPartOf: { '@id': `${origin}/#website` },
      about: { '@id': page.primaryEntity.id },
      datePublished: page.publishedAt,
      dateModified: page.modifiedAt,
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      inLanguage: page.locale,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: [...page.mobile.speakableSelectors]
      },
      potentialAction: {
        '@type': page.mobile.primaryAction === 'call' ? 'CommunicateAction' : 'ViewAction',
        target: page.mobile.primaryAction === 'call' ? 'tel:+447898262110' : pageUrl
      }
    },
    // 4. BreadcrumbList (SERP Hierarchy)
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: page.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.item.startsWith('http') ? b.item : `${origin}${b.item}`
      }))
    }
  ];

  // 5. Primary Product / Service Entity Node (when page is not root Organization)
  if (page.primaryEntity.type === 'Product' || page.primaryEntity.type === 'Service') {
    graph.push({
      '@type': page.primaryEntity.type,
      '@id': page.primaryEntity.id,
      name: page.primaryEntity.name,
      description: page.heroAnswerEngine,
      url: pageUrl,
      ...(page.primaryEntity.type === 'Product'
        ? { brand: { '@type': 'Brand', name: 'Cabivella UK' }, manufacturer: { '@id': `${origin}/#organization` } }
        : { provider: { '@id': `${origin}/#organization` }, areaServed: 'United Kingdom' })
    });
  }

  // 6. FAQPage Node for AEO / Google Rich Snippets / LLM Grounding
  if (page.faqs && page.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: page.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
