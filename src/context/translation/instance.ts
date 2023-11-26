import { createContext } from "react";

import { Props_translate } from "@/types/props";

const Context_translation = createContext<Props_translate>({
    language: 'es',
    update_language: (language: string) => { },
    translate: (chain: string) => { }
})

export default Context_translation;