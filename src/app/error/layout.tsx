import { ReactNode } from 'react'

import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: '404'
}

type Props = {
  children: ReactNode
}

export default function RootLayout(props: Props) {
  const { children } = props;

  return children
}