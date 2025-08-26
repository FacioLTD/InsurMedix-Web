/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development server configuration
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Ensure images load properly in development
    unoptimized: process.env.NODE_ENV === 'development',
  },
  
  // Webpack configuration for better development experience
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Better source maps in development
      config.devtool = 'eval-source-map'
      
      // Watch for file changes more efficiently
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    
    return config
  },
  
  // Experimental features for better development
  experimental: {
    // Better error overlay and development experience
  },
  
  // Ensure proper port handling
  env: {
    PORT: process.env.PORT || '3000',
  },
}

module.exports = nextConfig 