import { createContext } from "react";

import { Props_theme } from "@/types/props";

const Context_theme = createContext<Props_theme>({
    theme: 'light',
    update_theme: (theme: string) => { }
})

export default Context_theme;