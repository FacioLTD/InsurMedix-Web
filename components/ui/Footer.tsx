'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Left Column - Company Info */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-400">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                      Join our team
                    </Link>
                  </li>
                  <li>
                    <Link href="/partner" className="text-gray-300 hover:text-white transition-colors">
                      Become a Partner
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-400">Programs</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/infinity-village" className="text-gray-300 hover:text-white transition-colors">
                      Digital Nomad Insurance
                    </Link>
                  </li>
                  <li>
                    <Link href="/global-care" className="text-gray-300 hover:text-white transition-colors">
                      Sports Clubs Insurance
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.unitedmovinginsurance.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      Moving Insurance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Legal & Social */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Legal */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-400">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                      Terms and conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-400">Social</h3>
                <div className="flex space-x-4">
                  <Link 
                    href="https://www.linkedin.com/company/insurmedix-inc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link 
                    href="http://facebook.com/InsurMedix-100075952208399/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link 
                    href="https://www.crunchbase.com/organization/insurmedix" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label="Crunchbase"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              ©2025, InsurMedix, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
