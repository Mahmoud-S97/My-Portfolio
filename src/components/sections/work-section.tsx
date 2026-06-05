import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/section-shell";

export function WorkSection() {
  return (
    <SectionShell
      id="work"
      eyebrow="Selected work"
      title="Published mobile apps I worked on and contributed to."
      description="Each work card now points directly to the app store listing, with the project scope and impact aligned to the real mobile products."
    >
      <div className="grid gap-5">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900"
          >
            <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
            <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition group-hover:border-slate-950 group-hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:group-hover:border-white dark:group-hover:text-white"
                title={`Open ${project.title}`}
                aria-hidden="true"
              >
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="border-t border-slate-200 px-6 py-4 text-sm font-semibold text-slate-950 transition group-hover:bg-slate-50 dark:border-white/10 dark:text-white dark:group-hover:bg-white/5">
              {project.cta}
            </div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
