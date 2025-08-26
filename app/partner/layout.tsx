import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner With InsurMedix - Join Our Network | InsurMedix',
  description: 'Join our network of trusted partners and help us revolutionize insurance for those who live in motion. Explore partnership opportunities with InsurMedix.',
  keywords: 'insurance partnership, broker partnership, agent partnership, insurance network, partnership opportunities, InsurMedix partners',
  openGraph: {
    title: 'Partner With InsurMedix - Join Our Network',
    description: 'Join our network of trusted partners and help us revolutionize insurance.',
    url: 'https://insurmedix.com/partner',
  },
  twitter: {
    title: 'Partner With InsurMedix - Join Our Network',
    description: 'Join our network of trusted partners and help us revolutionize insurance.',
  },
}

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
