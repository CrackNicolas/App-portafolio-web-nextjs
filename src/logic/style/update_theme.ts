export function Update_theme(theme: string) {
  switch (theme) {
    case "dark":
      document.documentElement.style.setProperty("--bg-primary:", "#e00101");
      document.documentElement.style.setProperty("--bg-secondary:", "#083156");
      document.documentElement.style.setProperty("--bg-tertiary:", "#715d5d");
      document.documentElement.style.setProperty("--bg-room:", "#6a67673c");
      document.documentElement.style.setProperty("--text-primary:", "#000000");
      document.documentElement.style.setProperty(
        "--text-secondary:",
        "#2020ab"
      );
      break;
    case "light":
      document.documentElement.style.setProperty("--bg-primary:", "#ffffff");
      document.documentElement.style.setProperty("--bg-secondary:", "#083156");
      document.documentElement.style.setProperty("--bg-tertiary:", "#715d5d");
      document.documentElement.style.setProperty("--bg-room:", "#6a67673c");
      document.documentElement.style.setProperty("--text-primary:", "#000000");
      document.documentElement.style.setProperty(
        "--text-secondary:",
        "#2020ab"
      );
      break;
  }
}
