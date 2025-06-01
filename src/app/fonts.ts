import { Fira_Code, Inconsolata, Inter, Roboto, Roboto_Mono, Space_Mono } from 'next/font/google'
import { Manrope } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import { Work_Sans } from 'next/font/google'

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inconsolata',
  display: 'swap',
})

export const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-fira-code',
  display: 'swap',
})