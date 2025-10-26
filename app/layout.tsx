import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SK Construction Ltd - Professional Building Services',
  description: 'Professional construction services from ground preparation to final handover. Specializing in house building, driveways, patios, and complete property construction.',
  keywords: 'construction, building, house building, driveways, patios, groundwork, UK construction',
  authors: [{ name: 'SK Construction Ltd' }],
  openGraph: {
    title: 'SK Construction Ltd - Professional Building Services',
    description: 'Professional construction services from ground preparation to final handover.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
