import { createContext } from "react";

const Context_theme = createContext({
    theme: 'light',
    update_theme: (theme: string) => { }
})

export default Context_theme;