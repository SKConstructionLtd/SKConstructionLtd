import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - SK Construction Ltd | Expert Building Services',
  description: 'Learn about SK Construction Ltd, a trusted construction company with over 15 years of experience in residential building, driveways, patios, and complete property construction services.',
  keywords: 'about sk construction, construction company UK, building experts, construction experience, reliable builders',
  openGraph: {
    title: 'About Us - SK Construction Ltd',
    description: 'Trusted construction experts with over 15 years of experience delivering quality building projects.',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
