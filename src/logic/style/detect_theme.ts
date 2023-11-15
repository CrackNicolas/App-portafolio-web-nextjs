export function Detect_theme() {
    return window.matchMedia("(prefers-color-scheme:dark)").matches ? 'dark' : 'light'
}