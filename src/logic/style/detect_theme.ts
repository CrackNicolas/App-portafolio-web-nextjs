import { Update_theme } from "./update_theme";

export function Detect_theme() {
  const theme = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
  Update_theme(theme);
  return theme;
}
