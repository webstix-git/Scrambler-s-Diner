import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Testimonials | Scrambler's Diner",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
