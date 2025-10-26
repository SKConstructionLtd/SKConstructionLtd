import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - SK Construction Ltd | Building, Driveways & Patios',
  description: 'Comprehensive construction services including house building, site preparation, groundwork, foundations, roofing, MEP works, driveways, patios, and complete property construction.',
  keywords: 'construction services, house building, driveways, patios, groundwork, foundations, roofing, MEP works, building services UK',
  openGraph: {
    title: 'Services - SK Construction Ltd',
    description: 'Professional construction services from ground preparation to final handover.',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
