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
  description: 'Personal website of Yaelin Hough — CS & Philosophy @ Cornell',
  icons: {
    icon: '/favicon.png',
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
