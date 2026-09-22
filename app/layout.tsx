import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
