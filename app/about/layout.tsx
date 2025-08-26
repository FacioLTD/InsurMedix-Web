import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About InsurMedix - We Build Communities & Provide Protection | InsurMedix',
  description: 'Learn about InsurMedix, a trailblazing global InsurTech group licensed across all 50 U.S. states and Europe. We build communities and provide protection.',
  keywords: 'about InsurMedix, InsurMedix company, global InsurTech, insurance technology, community building, insurance innovation',
  openGraph: {
    title: 'About InsurMedix - We Build Communities & Provide Protection',
    description: 'Learn about InsurMedix, a trailblazing global InsurTech group.',
    url: 'https://insurmedix.com/about',
  },
  twitter: {
    title: 'About InsurMedix - We Build Communities & Provide Protection',
    description: 'Learn about InsurMedix, a trailblazing global InsurTech group.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
