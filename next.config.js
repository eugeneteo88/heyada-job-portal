/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig
