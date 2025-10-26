import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Step by Step Process - SK Construction Ltd',
  description: 'Detailed step-by-step breakdown of our house building, driveway, and patio construction processes. Understand every phase from planning to completion.',
  keywords: 'construction process, house building steps, driveway installation process, patio construction steps, building phases',
  openGraph: {
    title: 'Step by Step Process - SK Construction Ltd',
    description: 'See how we bring your construction projects to life with our detailed step-by-step process.',
    type: 'website',
  },
};

export default function StepByStepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
