import type { ReactNode } from "react";

type SectionShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  id?: string;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  children,
  id,
}: SectionShellProps) {
  return (
    <section id={id} className="px-5 py-20 dark:bg-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
