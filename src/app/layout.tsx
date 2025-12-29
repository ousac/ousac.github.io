import type { Metadata } from 'next';
import { Inter, League_Spartan } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ousac.ca'),
  title: 'OUSAC 2026 | Ontario Universities Sports Analytics Conference',
  description:
    'Join us for the premier student-run sports analytics conference in Ontario. Featuring keynote speakers from pro sports, research presentations, and the annual Data Challenge.',
  keywords: [
    'Sports Analytics',
    'Conference',
    'Ontario',
    'OUSAC',
    'Data Science',
    'Student Conference',
    'Toronto',
    'Waterloo',
    "Queen's",
    'York',
  ],
  authors: [{ name: 'OUSAC Team' }],
  creator: 'OUSAC',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ousac.ca',
    title: 'OUSAC 2026 | Ontario Universities Sports Analytics Conference',
    description:
      'The central hub for sports analytics research in Ontario. Connecting students with industry leaders.',
    siteName: 'OUSAC 2026',
    images: [
      {
        url: '/img/ousac_logo.png',
        width: 1200,
        height: 630,
        alt: 'OUSAC 2026 Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OUSAC 2026',
    description:
      'The premier student-run sports analytics conference in Ontario.',
    images: ['/img/ousac_logo.png'],
  },
  icons: {
    icon: '/icon.png', // Next.js specific for app router
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${leagueSpartan.variable} flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased`}
      >
        <Navbar />
        <main className="flex-grow pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
