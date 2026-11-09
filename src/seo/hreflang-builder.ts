export interface HreflangEntry {
  readonly lang: string;
  readonly url: string;
}

export const SUPPORTED_LOCALES = ['en-GB', 'de', 'fr', 'nl'] as const;

export function buildHreflangTags(route: string, domain = 'cabivella.co.uk'): HreflangEntry[] {
  const origin = `https://${domain}`;
  const cleanRoute = route.endsWith('/') ? route : `${route}/`;

  // Base English UK is the canonical and x-default
  const entries: HreflangEntry[] = [
    { lang: 'en-GB', url: `${origin}${cleanRoute}` },
    { lang: 'x-default', url: `${origin}${cleanRoute}` }
  ];

  // Map known localized trade hubs
  if (cleanRoute === '/' || cleanRoute === '/trade/' || cleanRoute === '/trade/europe/') {
    entries.push(
      { lang: 'de', url: `${origin}/de/grosshandel-einbaumoebel/` },
      { lang: 'fr', url: `${origin}/fr/fabricant-meubles-sur-mesure-grossiste/` },
      { lang: 'nl', url: `${origin}/nl/maatwerk-kasten-groothandel/` }
    );
  }

  return entries;
}
