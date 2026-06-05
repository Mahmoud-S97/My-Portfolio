import Link from "next/link";
import { Mail } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 px-5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 sm:px-8 lg:px-12">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <span className="grid size-9 place-items-center rounded-md bg-slate-950 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
            MS
          </span>
          <span className="hidden text-sm font-semibold text-slate-950 dark:text-white sm:inline">
            Mahmoud Saleh
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="mailto:mhmodhr@gmail.com"
            className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
            aria-label="Email Mahmoud"
            title="Email Mahmoud"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
