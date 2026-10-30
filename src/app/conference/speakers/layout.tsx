import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

// Page is a client component, so metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: 'Speakers',
  description:
    'Keynote and featured speakers from pro sports teams, industry and academia at the Ontario Universities Sports Analytics Conference.',
  path: '/conference/speakers',
});

export default function SpeakersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
