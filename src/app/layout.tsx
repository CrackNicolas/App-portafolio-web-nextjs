import { ReactNode } from 'react'

import type { Metadata } from 'next'

import ClientOnly from '@/client/only'

import './globals.css'

export const metadata: Metadata = {
  title: 'Alejo Beltran',
  description: 'Creado por Beltran Alejo',
  icons: {
    icon: '/favicon.ico'
  },
}

type Props = {
  children: ReactNode
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          {props.children}
        </ClientOnly>
      </body>
    </html>
  )
}