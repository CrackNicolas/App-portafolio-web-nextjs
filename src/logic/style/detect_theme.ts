export function Detect_theme() {
  const theme = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
  return theme;
}