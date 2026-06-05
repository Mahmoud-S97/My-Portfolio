import { services } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/section-shell";

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Capabilities"
      title="A practical stack for production mobile apps and modern web frontends."
      description="React Native is the center of the profile, supported by React.js, Next.js, TypeScript, cloud tooling, payment flows, and native integrations."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="rounded-lg border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900"
            >
              <span className="grid size-11 place-items-center rounded-md bg-[#f7f3ec] text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
