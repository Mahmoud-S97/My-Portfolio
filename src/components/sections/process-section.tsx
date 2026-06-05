import { processSteps } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/section-shell";

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Process"
      title="A delivery flow shaped by real app-store and production support work."
      description="From architecture to release, the workflow emphasizes maintainability, crash visibility, performance, and fast iteration."
    >
      <div className="grid gap-4">
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900 sm:grid-cols-[auto_1fr]"
            >
              <div className="flex items-center gap-3 sm:block">
                <span className="grid size-11 place-items-center rounded-md bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                  <Icon size={19} />
                </span>
                <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 sm:mt-4 sm:block">
                  0{index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
