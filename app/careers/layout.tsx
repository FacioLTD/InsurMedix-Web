import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join InsurMedix Team - Career Opportunities | InsurMedix',
  description: 'Join the InsurMedix team and be part of the revolution in global insurance. Explore career opportunities in InsurTech, operations, and AI development.',
  keywords: 'InsurMedix careers, insurance jobs, InsurTech careers, AI developer jobs, operations jobs, insurance technology careers',
  openGraph: {
    title: 'Join InsurMedix Team - Career Opportunities',
    description: 'Join the InsurMedix team and be part of the revolution in global insurance.',
    url: 'https://insurmedix.com/careers',
  },
  twitter: {
    title: 'Join InsurMedix Team - Career Opportunities',
    description: 'Join the InsurMedix team and be part of the revolution in global insurance.',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
