import type { Metadata } from 'next'
import { Patrick_Hand } from 'next/font/google'
import '@fontsource/museomoderno/400.css'
import '@fontsource/museomoderno/600.css'
import '@fontsource/museomoderno/700.css'
import './globals.css'

const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-patrick-hand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yaelin Hough',
  description: 'Yaelin Hough — Computer Science & Philosophy student at Cornell University. Building full-stack web apps, iOS apps, and VR systems. Explore my projects and experience.',
  keywords: ['Yaelin Hough', 'Yaelin', 'Cornell University', 'CS student', 'software engineer', 'personal website', 'portfolio'],
  authors: [{ name: 'Yaelin Hough' }],
  creator: 'Yaelin Hough',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Yaelin Hough',
    description: 'CS & Philosophy student at Cornell. Full-stack, iOS, and VR developer.',
    url: 'https://yaelinhough.vercel.app',
    siteName: 'Yaelin Hough',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Yaelin Hough',
    description: 'CS & Philosophy student at Cornell. Full-stack, iOS, and VR developer.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={patrickHand.variable}>
        {children}
      </body>
    </html>
  )
}
