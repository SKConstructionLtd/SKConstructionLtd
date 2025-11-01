import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - SK Construction Ltd | Get a Free Quote',
  description: 'Contact SK Construction Ltd for a free consultation and quote. Call us at +44 7800 909182 or email skdevelopmentandconstruction@gmail.com. Professional construction services across the UK.',
  keywords: 'contact construction company, free quote, construction consultation, SK Construction contact, building quote UK',
  openGraph: {
    title: 'Contact Us - SK Construction Ltd',
    description: 'Get in touch for a free consultation and quote on your construction project.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
