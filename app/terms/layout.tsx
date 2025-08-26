import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - InsurMedix | InsurMedix',
  description: 'Read InsurMedix terms and conditions. Understand the terms of use for our insurance services and digital platforms.',
  keywords: 'InsurMedix terms, terms and conditions, insurance terms, service terms, legal terms',
  openGraph: {
    title: 'Terms and Conditions - InsurMedix',
    description: 'Read InsurMedix terms and conditions for our insurance services.',
    url: 'https://insurmedix.com/terms',
  },
  twitter: {
    title: 'Terms and Conditions - InsurMedix',
    description: 'Read InsurMedix terms and conditions for our insurance services.',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
