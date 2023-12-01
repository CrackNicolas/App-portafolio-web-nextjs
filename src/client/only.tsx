'use client'

import { useEffect, useState } from 'react';
import { I18nextProvider } from "react-i18next";

import i18next from 'i18next'

import en from '@/i18n/en/global.json'
import es from '@/i18n/es/global.json';

import { Props_layouts } from '@/types/props';

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: "es",
  resources: {
    es: {
      global: es
    },
    en: {
      global: en
    }
  }
})

export default function ClientOnly({ children }: Props_layouts) {
  const [has_mounted, setHas_mounted] = useState<boolean>(false);

  useEffect(() => {
    setHas_mounted(true);
  }, []);

  if (!has_mounted) return null;

  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  )
}