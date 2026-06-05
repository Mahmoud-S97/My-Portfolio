import type { Metadata } from "next";
import { ThemeScript } from "@/components/ui/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahmoud Saleh | React Native Developer",
  description:
    "React Native, React.js, and Next.js engineer based in Dublin with 5+ years building production mobile and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
        {children}
      </body>
    </html>
  );
}
