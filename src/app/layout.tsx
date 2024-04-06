import localFont from 'next/font/local'
import { Roboto } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' })

const theSeasons = localFont({
  src: './fonts/theseasons-bold.otf',
  display: 'swap',
  weight: 'bold',
  variable: '--font-seasons-bold'
})

export const metadata: Metadata = {
  title: 'Psicóloga Carol Godoy | Terapia online',
  description: 'O passado condiciona mas não determina. Ajudo a desenvolver pessoas há 7 anos através de um olhar voltado para cada história de vida. Agende uma sessão grátis',
  keywords: 'psicóloga, atendimento online, terapia, por que fazer?, quando fazer?, como começar?'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={twMerge(theSeasons.variable, roboto.variable)}>
      <body className={roboto.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-KMZMVLTK" />
    </html>
  )
}
