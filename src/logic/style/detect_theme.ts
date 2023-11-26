export function Detect_theme() {
  const theme = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  return theme;
}