import { useContext } from "react";

import Context_translation from "./instance";

import { Props_translate } from "@/types/props";

export default function Use_translation(): Pick<Props_translate, 'language' | 'update_language' | 'translate'> {
    const { language, update_language, translate } = useContext(Context_translation);
    return { language, update_language, translate };
}