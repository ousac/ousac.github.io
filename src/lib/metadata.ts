import type { Metadata } from 'next';
import { CURRENT_CONFERENCE } from '@/lib/constants';

export const SITE_URL = 'https://www.ousac.ca';

export const OG_IMAGE = {
  url: '/img/og-image.png',
  width: 1200,
  height: 630,
  alt: `OUSAC ${CURRENT_CONFERENCE.year} — Ontario Universities Sports Analytics Conference`,
};

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

/**
 * Builds page metadata with matching Open Graph / Twitter tags.
 * Page-level `openGraph` replaces the root one entirely, so the image is always included here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | OUSAC`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      siteName: 'OUSAC',
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
