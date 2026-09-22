import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
import './globals.css';
import './responsive.css';
import './fix-1024.css';
import ResponsiveNav from './ResponsiveNav';

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-libre-franklin',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Scrambler's Diner",
    template: "%s | Scrambler's Diner",
  },
  description:
    'Family-owned breakfast and lunch diner in Springfield, Missouri since 1997.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={libreFranklin.variable}>
      <body className={libreFranklin.className}>
        {children}
        <ResponsiveNav />
      </body>
    </html>
  );
}
