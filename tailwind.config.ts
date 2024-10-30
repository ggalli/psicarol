import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '24px',
      screens: {
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      }
    },
    extend: {
      fontFamily: {
        seasons: ['var(--font-seasons-bold)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        green: '#48644D',
        beige: '#C9B474',
        sand: '#C1A788',
        dark: '#433F3E',
        light: '#F8F9F0',
        white: '#FFFFFF'
      },
      backgroundImage: {
        'hero-desktop': "url('/images/bg-hero-desktop.webp')",
        'hero-tablet': "url('/images/bg-hero-tablet.webp')",
        'hero-mobile': "url('/images/bg-hero-mobile.webp')",
        'green-plants-desktop': "url('/images/bg-green-desktop.webp')",
        'green-plants-tablet': "url('/images/bg-green-tablet.webp')",
        'green-plants-mobile': "url('/images/bg-green-mobile.webp')",
      }
    },
  },
  plugins: [],
}
export default config
