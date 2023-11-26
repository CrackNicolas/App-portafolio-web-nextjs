import { createContext } from "react";

const Context_translation = createContext({
    language: 'es',
    update_language: (language: string) => { },
    translate: (chain: string): any => { }
})

export default Context_translation;