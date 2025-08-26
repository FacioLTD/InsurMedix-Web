import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Care Active - Sports Organizations Insurance | InsurMedix',
  description: 'Unified medical & travel coverage for federations, clubs, and teams. Protect athletes and staff worldwide with InsurMedix Global Care Active.',
  keywords: 'sports insurance, team insurance, federation insurance, athlete coverage, medical insurance, travel insurance, sports organizations',
  openGraph: {
    title: 'Global Care Active - Sports Organizations Insurance',
    description: 'Unified medical & travel coverage for federations, clubs, and teams.',
    url: 'https://insurmedix.com/global-care',
  },
  twitter: {
    title: 'Global Care Active - Sports Organizations Insurance',
    description: 'Unified medical & travel coverage for federations, clubs, and teams.',
  },
}

export default function GlobalCareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
