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
      padding: '24px'
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
        'hero-desktop': 'url("/images/bg-hero-desktop.png")',
        'hero-tablet': 'url("/images/bg-hero-tablet.png")',
        'hero-mobile': 'url("/images/bg-hero-mobile.png")',
        'green-plants-desktop': 'url("/images/bg-green-desktop.png")',
        'green-plants-tablet': 'url("/images/bg-green-tablet.png")',
        'green-plants-mobile': 'url("/images/bg-green-mobile.png")',
      }
    },
  },
  plugins: [],
}
export default config
