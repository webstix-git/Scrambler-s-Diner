import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gallery | Scrambler's Diner",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
