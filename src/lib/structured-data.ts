import { siteConfig } from '../data/navigation';
import type { ModelDetail } from '../data/models';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': siteConfig.name,
    'legalName': siteConfig.legalEntity.companyName,
    'taxID': siteConfig.legalEntity.taxNumber,
    'url': siteConfig.siteUrl,
    'logo': `${siteConfig.siteUrl}/assets/img/cabivella-crest-transparent.webp`,
    'email': siteConfig.email,
    'telephone': siteConfig.phoneClean,
    'sameAs': [
      siteConfig.linkedinUrl,
      siteConfig.whatsappUrl
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'GB'
    },
    'founder': {
      '@type': 'Person',
      'name': 'Barış Bağırlı',
      'jobTitle': 'Managing Director & Founder',
      'sameAs': siteConfig.linkedinUrl
    }
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': siteConfig.name,
    'url': siteConfig.siteUrl,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${siteConfig.siteUrl}/collections/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `${siteConfig.siteUrl}${item.url}`
    }))
  };
}

export function getProductSchema(model: ModelDetail, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': model.title,
    'image': `${siteConfig.siteUrl}${model.image}`,
    'description': model.description,
    'brand': {
      '@type': 'Brand',
      'name': siteConfig.name
    },
    'material': model.materials.join(', '),
    'url': canonicalUrl
  };
}
