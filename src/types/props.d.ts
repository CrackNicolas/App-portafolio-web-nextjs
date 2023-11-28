export type Props_modal = {
    open: boolean,
    setOpen: any
}
export type Props_layouts = {
    children: ReactNode
}
export type Props_theme = {
    theme: string;
    update_theme: (theme: string) => void
}
export type Props_translate = {
    language: string,
    update_language: (language: string) => void,
    translate: (chain: string) => any
}