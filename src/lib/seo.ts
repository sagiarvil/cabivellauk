import { siteConfig } from '../data/navigation';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

export function buildMetaTags(props: SEOProps) {
  const canonicalUrl = props.canonicalPath 
    ? `${siteConfig.siteUrl}${props.canonicalPath.startsWith('/') ? props.canonicalPath : `/${props.canonicalPath}`}`
    : siteConfig.siteUrl;

  const imageUrl = props.image?.startsWith('http') 
    ? props.image 
    : `${siteConfig.siteUrl}${props.image || '/assets/img/homepage-hero-approved.webp'}`;

  return {
    title: props.title.includes(siteConfig.name) ? props.title : `${props.title} | ${siteConfig.name}`,
    description: props.description,
    canonicalUrl,
    imageUrl,
    type: props.type || 'website',
    noindex: props.noindex || false,
    locale: 'en_GB',
    siteName: siteConfig.name
  };
}
