/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#6b46c1',
          light: '#9f7aea',
          dark: '#44337a',
        },
        primary: '#6366F1',      // Indigo for CTAs, accents
        accent: '#f59e0b',       // Amber for badges, highlights
        bgStart: '#f0f4ff',      // Light gradient start
        bgEnd: '#fdfcff',        // Light gradient end
        textDark: '#0f172a',     // Headline text
        textLight: '#64748b',    // Paragraph text
        borderLight: '#e5e7eb',  // Border dividers
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
