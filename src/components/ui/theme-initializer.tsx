"use client";

import { useEffect } from "react";

export function ThemeInitializer() {
  useEffect(() => {
    const stored = localStorage.getItem("theme");

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDark = stored
      ? stored === "dark"
      : systemDark;

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return null;
}