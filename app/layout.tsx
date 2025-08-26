import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://insurmedix.com'),
  title: 'InsurMedix - Insurance for those who live in motion',
  description: 'We sponsor movement — on the field, across borders, and beyond limits. Insurance for those who live in motion.',
  keywords: 'insurance, sports, digital nomads, travel, health coverage, team protection, global mobility, InsurTech, community building',
  authors: [{ name: 'InsurMedix' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'InsurMedix - Insurance for those who live in motion',
    description: 'We sponsor movement — on the field, across borders, and beyond limits.',
    type: 'website',
    locale: 'en_US',
    url: 'https://insurmedix.com',
    siteName: 'InsurMedix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InsurMedix - Insurance for those who live in motion',
    description: 'We sponsor movement — on the field, across borders, and beyond limits.',
  },
  robots: {
    index: true,
    follow: true,
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
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 