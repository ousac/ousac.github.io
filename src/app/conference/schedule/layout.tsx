import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

// Page is a client component, so metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: 'Schedule',
  description:
    'The full Ontario Universities Sports Analytics Conference schedule: keynotes, panels and student research presentations.',
  path: '/conference/schedule',
});

export default function ScheduleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
