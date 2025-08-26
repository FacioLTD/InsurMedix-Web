import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import CtaSwapController from '@/components/ui/CtaSwapController'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InsurMedix - Insurance for those who live in motion',
  description: 'Global InsurTech platform providing comprehensive insurance solutions for sports organizations, digital nomads, and relocation services. Backed by global insurers.',
  keywords: 'insurance, global insurance, sports insurance, digital nomads, relocation insurance, travel insurance, medical insurance, InsurMedix',
  openGraph: {
    title: 'InsurMedix - Insurance for those who live in motion',
    description: 'Global InsurTech platform providing comprehensive insurance solutions for sports organizations, digital nomads, and relocation services.',
    url: 'https://insurmedix.com',
    siteName: 'InsurMedix',
    images: [
      {
        url: 'https://insurmedix.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'InsurMedix - Global Insurance Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InsurMedix - Insurance for those who live in motion',
    description: 'Global InsurTech platform providing comprehensive insurance solutions for sports organizations, digital nomads, and relocation services.',
    images: ['https://insurmedix.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://insurmedix.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <CtaSwapController />
      </body>
    </html>
  )
} 