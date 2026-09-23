import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Catering | Scrambler's Diner",
  description:
    'Breakfast and event catering from Scrambler\'s Diner in Springfield, Missouri. Free delivery and setup, plus private parties after hours.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
