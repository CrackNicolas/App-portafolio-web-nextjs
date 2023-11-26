import { useContext } from 'react';

import Context_theme from './instance';

import { Props_theme } from '@/types/props';

export default function Use_theme(): Pick<Props_theme, 'theme' | 'update_theme'> {
    const { theme, update_theme } = useContext(Context_theme);
    return { theme, update_theme };
}