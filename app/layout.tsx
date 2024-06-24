import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/app/components/Header'
import { ScrollToTop } from '@/app/lib/ui/scroll-to-top'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prototype',
  description: 'My prototype',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
