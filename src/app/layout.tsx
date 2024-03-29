import { Metadata } from 'next/types'
import Head from 'next/head'

import ClientOnly from '@/client/only'
import ThemeProvider from '@/context/theme/provider'
import LanguageProvider from '@/context/translation/provider'

import './globals.css'

import { Props_layouts } from '@/types/props'

export const metadata: Metadata = {
  title: 'Alejo Beltran',
  description: 'Creado por Beltran Alejo',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Tailwind', 'CSS', 'HTML'],
  themeColor: '#000000',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: Props_layouts) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </Head>
      <body className="bg-tertiary dark:bg-primary">
        <ClientOnly>
          <ThemeProvider>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  )
}