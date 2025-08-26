'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}

export default function Logo({ className = '', showText = false, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
    '2xl': 'w-32 h-32',
    '3xl': 'w-40 h-40'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl',
    '3xl': 'text-5xl'
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {/* Logo Image - will use your uploaded logo */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <Image
          src="/images/logo.svg"
          alt="InsurMedix Logo"
          fill
          className="object-contain"
          priority
          onError={(e) => {
            // Fallback to gradient if image fails to load
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement
            if (fallback) fallback.style.display = 'flex'
          }}
        />
        {/* Fallback gradient logo */}
        <div 
          className={`${sizeClasses[size]} bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center hidden`}
          style={{ display: 'none' }}
        >
          <span className="text-white font-bold text-xs">IM</span>
        </div>
      </div>
      
      {/* Company name text */}
      {showText && (
        <span className={`font-bold text-black-950 ${textSizes[size]}`}>
          InsurMedix
        </span>
      )}
    </Link>
  )
}
