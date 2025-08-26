'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const pathname = usePathname()
  const isPartnerPage = pathname === '/partner'

  const navigation = [
    { 
      name: 'Journeys', 
      href: '#',
      children: [
        { name: 'For Sports Organizations', href: '/global-care', description: 'Unified medical & travel coverage for federations, clubs, and teams - protecting athletes and staff worldwide.' },
        { name: 'For Digital Nomads', href: '/infinity-village', description: 'Seamless residency, insurance, and global support designed for people who live and work anywhere.' },
        { name: 'For Moving & Relocation', href: 'https://www.unitedmovinginsurance.com/', description: 'Comprehensive protection for every move - from local transitions to international relocation.', external: true }
      ]
    },
    { name: 'Why InsurMedix', href: '/about' },
    { name: 'Join Us', href: '/partner' }
  ]

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo size="3xl" showText={false} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative group">
                    <button
                      onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-black-950 transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="p-4">
                        <div className="grid gap-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              target={child.external ? '_blank' : '_self'}
                              rel={child.external ? 'noopener noreferrer' : ''}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="font-medium text-black-950">{child.name}</div>
                              <div className="text-sm text-gray-600">{child.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-black-950 transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              id="nav-cta"
              href="/partner"
              className={`cta cta--nav btn btn-primary ${isPartnerPage ? 'invisible' : ''}`}
            >
              Join the Movement
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-black-950 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-black-950 hover:bg-gray-50 rounded-md flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isProgramsOpen && (
                        <div className="pl-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              target={child.external ? '_blank' : '_self'}
                              rel={child.external ? 'noopener noreferrer' : ''}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-black-950 hover:bg-gray-50 rounded-md"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black-950 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  id="nav-cta-mobile"
                  href="/partner"
                  className={`cta cta--nav btn btn-primary block w-full text-center ${isPartnerPage ? 'invisible' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join the Movement
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

