/**
  CAMBIOS NECESARIOS A CUMPLIR

  1 - Analizar rendimiento.
  2 - Analizar cuales son componentes del lado del cliente con 'use client' y 
      cuales son de servidor usando 'use server'
  3 - Analizar seguridad
  4 - Analizar uso de memoria RAM.
  5 - Ver toda la configuracion de NEXT.JS
  6 - Analizar si se puede no usar el type any
  
**/

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
      <body className="bg-tertiary dark:bg-primary">
        <ClientOnly>
          {props.children}
        </ClientOnly>
      </body>
    </html>
  )
}