import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - SK Construction Ltd | Our Completed Projects',
  description: 'View our portfolio of completed construction projects including house builds, driveways, patios, and exterior works. Quality craftsmanship showcased through our project gallery.',
  keywords: 'construction portfolio, completed projects, house building gallery, driveway projects, patio installations, construction photos UK',
  openGraph: {
    title: 'Gallery - SK Construction Ltd',
    description: 'Explore our portfolio showcasing quality construction projects.',
    type: 'website',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
