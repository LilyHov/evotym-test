import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalStyles } from './globalStyles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evotym',
  description: 'test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyles/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
