import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond, Crimson_Text } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const crimson = Crimson_Text({ 
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: ['400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shrikant Rohamare | Hospitality Business Leader & Consultant',
  description: 'Seasoned hospitality professional with 12+ years of experience in sales operations, revenue management, and business development. Leading sales operations at True Key Hotels & Resorts.',
  keywords: 'Shrikant Rohamare, hospitality consultant, sales operations, revenue management, hotel industry, business leader, True Key Hotels, Marriott, Wyndham, IHG',
  authors: [{ name: 'Shrikant Rohamare' }],
  creator: 'Shrikant Rohamare',
  publisher: 'Shrikant Rohamare',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shrikantrohamare.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shrikant Rohamare | Hospitality Business Leader & Consultant',
    description: 'Seasoned hospitality professional with 12+ years of experience in sales operations and revenue management.',
    url: 'https://shrikantrohamare.netlify.app',
    siteName: 'Shrikant Rohamare',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shrikant Rohamare - Hospitality Business Leader',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shrikant Rohamare | Hospitality Business Leader & Consultant',
    description: 'Seasoned hospitality professional with 12+ years of experience in sales operations and revenue management.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${crimson.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}