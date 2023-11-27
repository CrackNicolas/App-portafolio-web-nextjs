import { useContext, useEffect } from "react";

import Context_translation from "./instance";

import { Props_translate } from "@/types/props";

export default function Use_translation(): Pick<Props_translate, 'language' | 'update_language' | 'translate'> {
    const { language, update_language, translate } = useContext(Context_translation);

    useEffect(() => {
        const stored_language = localStorage.getItem('language');
        if (stored_language) {
            update_language(stored_language);
        }
    }, [])

    return { language, update_language, translate };
}