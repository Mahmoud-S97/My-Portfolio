import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";
import { highlights, stats } from "@/data/portfolio";
import { MetricCard } from "@/components/ui/metric-card";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ec] px-5 pb-16 pt-12 dark:bg-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <Image
            src="/mahmoud-saleh.jpg"
            alt="Mahmoud Saleh"
            width={176}
            height={176}
            priority
            className="size-36 rounded-full border-4 border-white object-cover object-[50%_18%] shadow-xl shadow-slate-300/50 dark:border-slate-800 dark:shadow-black/40 sm:size-44"
          />
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
            React Native Developer
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Mahmoud Saleh
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            React & React Native engineer in Dublin with 5+ years delivering mobile and
            web applications across fintech, telecom, media, and e-commerce.
            I build with React Native, React.js, Next.js, and TypeScript.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-teal-800 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-100"
            >
              View Work <ArrowRight size={17} />
            </Link>
            <Link
              href="/mahmoud-saleh-cv.pdf"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-950 dark:border-white/20 dark:text-slate-100 dark:hover:border-white"
            >
              Download CV <Download size={17} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <MetricCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
        <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-300/40 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30">
          <div className="flex h-11 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 dark:border-white/10 dark:bg-slate-900/80">
            <span className="size-3 rounded-full bg-rose-400" />
            <span className="size-3 rounded-full bg-amber-400" />
            <span className="size-3 rounded-full bg-emerald-400" />
          </div>
          <div className="grid min-h-[397px] grid-rows-[auto_1fr]">
            <div className="border-b border-slate-200 p-5 dark:border-white/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    Mobile engineering profile
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                    React Native delivery snapshot
                  </h2>
                </div>
                <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  Ireland
                </span>
              </div>
            </div>
            <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
              <div className="border-b border-slate-200 p-5 dark:border-white/10 md:border-b-0 md:border-r">
                <div className="space-y-4">
                  {highlights.map((highlight) => {
                    const Icon = highlight.icon;

                    return (
                      <div key={highlight.label} className="flex gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                          <Icon size={17} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-950 dark:text-white">
                            {highlight.label}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            {highlight.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-5">
                <div className="grid h-full content-between gap-5">
                  <div className="rounded-md border border-slate-200 p-4 dark:border-white/10">
                    <div className="mb-4 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-600 dark:text-slate-300">
                        Mobile app focus
                      </span>
                      <span className="font-semibold text-slate-950 dark:text-white">
                        80%
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className="h-full w-[80%] rounded-full bg-teal-600 dark:bg-teal-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Native", "Web", "Cloud"].map((label, index) => (
                      <div
                        key={label}
                        className="rounded-md border border-slate-200 p-4 dark:border-white/10"
                      >
                        <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                          {index === 0 ? "RN" : index === 1 ? "Next" : "CI"}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 rounded-md bg-slate-950 p-4 text-white dark:bg-white dark:text-slate-950">
                    <MousePointer2 size={18} />
                    <p className="text-sm">
                      Built for production mobile releases, payments, native
                      bridges, and scalable React interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
