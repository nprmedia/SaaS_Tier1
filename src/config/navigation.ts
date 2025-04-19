// config/navigation.ts

/**
 * 📍 Centralized navigation config for use in layout, header, footer, mobile
 */

export const mainNav = [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ]
  
  export const footerNav = [
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: '/#features' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  ]
  
  export const authNav = [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
  ]
  