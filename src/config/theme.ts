// config/theme.ts

/**
 * 🎨 Design tokens + tailwind-consistent variables for cross-lib usage
 */

export const colors = {
    brand: {
      DEFAULT: '#6b46c1',
      light: '#9f7aea',
      dark: '#44337a',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      900: '#111827',
    },
  }
  
  export const spacing = {
    container: 'max-w-7xl mx-auto px-6 md:px-10 lg:px-20',
  }
  
  export const radius = {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  }
  
  export const zIndex = {
    behind: -1,
    base: 1,
    dropdown: 10,
    modal: 50,
    toast: 60,
    overlay: 100,
  }
  