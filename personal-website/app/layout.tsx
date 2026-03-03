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
  alternates: {
    canonical: 'https://yaelinhough.vercel.app',
  },
  openGraph: {
    title: 'Yaelin Hough',
    description: 'CS & Philosophy student at Cornell. Full-stack, iOS, and VR developer.',
    url: 'https://yaelinhough.vercel.app',
    siteName: 'Yaelin Hough',
    type: 'website',
    images: [{ url: 'https://yaelinhough.vercel.app/og-image.jpg', width: 1200, height: 630, alt: 'Yaelin Hough — CS & Philosophy @ Cornell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yaelin Hough',
    description: 'CS & Philosophy student at Cornell. Full-stack, iOS, and VR developer.',
    images: ['https://yaelinhough.vercel.app/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yaelin Hough',
  url: 'https://yaelinhough.vercel.app',
  sameAs: [
    'https://www.linkedin.com/in/yaelin-hough',
    'https://github.com/yhough',
  ],
  jobTitle: 'Software Engineer',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Cornell University',
  },
  knowsAbout: ['Software Engineering', 'Full-Stack Development', 'iOS Development', 'VR Development', 'Philosophy'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={patrickHand.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
