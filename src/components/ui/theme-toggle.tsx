"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    const systemTheme: Theme =
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    const initialTheme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : systemTheme;

    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  // Step 3: prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-md border"
        aria-hidden="true"
      >
        <Moon size={18} />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}