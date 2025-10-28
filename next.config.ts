import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [
      'mcceivdtpzbfdaxefhac.supabase.co',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3001', 'heyada.io']
    }
  }
}

export default nextConfig

