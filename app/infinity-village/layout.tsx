import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infinity Village - Digital Nomad Insurance & Co-living | InsurMedix',
  description: 'Seamless residency, insurance, and global support designed for digital nomads. Live and work anywhere with comprehensive coverage from InsurMedix.',
  keywords: 'digital nomad insurance, co-living insurance, global residency, remote work insurance, travel insurance, nomad lifestyle',
  openGraph: {
    title: 'Infinity Village - Digital Nomad Insurance & Co-living',
    description: 'Seamless residency, insurance, and global support designed for digital nomads.',
    url: 'https://insurmedix.com/infinity-village',
  },
  twitter: {
    title: 'Infinity Village - Digital Nomad Insurance & Co-living',
    description: 'Seamless residency, insurance, and global support designed for digital nomads.',
  },
}

export default function InfinityVillageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
