import { Metadata } from 'next/types'

import { Props_layouts } from '@/types/props'

export const metadata: Metadata = {
  title: '404'
}

export default function RootLayout({ children }: Props_layouts) {
  return children;
}