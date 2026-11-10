import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Games Exchange',
  description: 'Modern gaming marketplace for top-ups, gift cards, and premium game value.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
