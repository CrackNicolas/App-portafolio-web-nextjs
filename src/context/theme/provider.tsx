'use client'

import { useEffect, useState } from 'react'

import Context_theme from './instance';

import { Detect_theme } from "@/logic/style/detect_theme";

import { Props_layouts } from '@/types/props';

export default function ThemeProvider({ children }: Props_layouts) {
    const stored_language = localStorage.getItem('theme');
    const [theme, setTheme] = useState<string>(stored_language || Detect_theme());

    const update_theme = (theme: string) => {
        setTheme((theme === 'dark') ? 'light' : 'dark');
        localStorage.setItem('theme', (theme === 'dark') ? 'light' : 'dark');
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark')
        }
        if (theme === 'light') {
            document.querySelector('html')?.classList.remove('dark')
        }
    }, [theme]);

    return (
        <Context_theme.Provider value={{ theme, update_theme }}>
            {children}
        </Context_theme.Provider>
    )
}