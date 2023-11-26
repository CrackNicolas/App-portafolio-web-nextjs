'use client'

import { useState } from 'react'

import { useTranslation } from 'react-i18next';

import Context_language from './instance';

import { Props_layouts } from '@/types/props';

export default function LanguageProvider({ children }: Props_layouts) {
    const [language, setLanguage] = useState<string>('es');

    const [t, i18n] = useTranslation("global");

    const update_language = (language: string) => {
        if (language === "es") {
            i18n.changeLanguage('en');
            setLanguage("en");
        }
        if (language === "en") {
            i18n.changeLanguage('es');
            setLanguage("es");
        }
    }

    const translate = (chain: string): any => {
        return t(chain);
    }

    return (
        <Context_language.Provider value={{ language, update_language, translate }}>
            {children}
        </Context_language.Provider>
    )
}