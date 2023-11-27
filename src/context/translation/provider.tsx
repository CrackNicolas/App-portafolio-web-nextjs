'use client'

import { useState } from 'react'

import { useTranslation } from 'react-i18next';

import Context_language from './instance';

import { Props_layouts } from '@/types/props';

export default function LanguageProvider({ children }: Props_layouts) {
    const stored_language = localStorage.getItem('language');
    const [language, setLanguage] = useState<string>(stored_language || 'es');

    const [t, i18n] = useTranslation("global");

    const update_language = (language: string) => {
        i18n.changeLanguage(language);
        setLanguage(language);
        localStorage.setItem('language', language);
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