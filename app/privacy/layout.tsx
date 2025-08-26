import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - InsurMedix | InsurMedix',
  description: 'Read InsurMedix privacy policy. Learn how we protect your personal information and data privacy in our insurance services.',
  keywords: 'InsurMedix privacy, privacy policy, data protection, insurance privacy, personal information protection',
  openGraph: {
    title: 'Privacy Policy - InsurMedix',
    description: 'Read InsurMedix privacy policy and data protection practices.',
    url: 'https://insurmedix.com/privacy',
  },
  twitter: {
    title: 'Privacy Policy - InsurMedix',
    description: 'Read InsurMedix privacy policy and data protection practices.',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
