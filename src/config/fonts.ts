// config/env.ts

/**
 * 🔐 Safe ENV access with type safety and dev error fallback
 * Usage: import { env } from '@/config/env'
 */

const required = [
    'NEXT_PUBLIC_BASE_URL',
    'CMS_API_URL',
    'CMS_API_KEY',
    'STRIPE_PUBLIC_KEY',
    'STRIPE_SECRET_KEY',
  ]
  
  required.forEach((key) => {
    if (!process.env[key]) {
      console.warn(`⚠️ Missing required env: ${key}`)
    }
  })
  
  export const env = {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Authority Platform',
    siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || '',
    ogImage: process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE || '/images/og-default.png',
    cmsUrl: process.env.CMS_API_URL!,
    cmsKey: process.env.CMS_API_KEY!,
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY!,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY!,
    supportEmail: process.env.SUPPORT_EMAIL || 'support@yourdomain.com',
  }
  