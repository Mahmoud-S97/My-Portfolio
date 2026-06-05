export function ThemeScript() {
  const code = `
    (() => {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = storedTheme || (prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
