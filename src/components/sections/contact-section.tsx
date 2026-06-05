import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { contactLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-5 py-20 dark:bg-black sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
            Contact
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
            Available for React Native, React.js, and Next.js engineering roles.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Based in Dublin and eligible to work full-time in Ireland with no
            sponsorship required.
          </p>
        </div>
        <div className="grid gap-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="grid gap-2 rounded-lg border border-white/10 p-4 text-white transition hover:border-white/40 sm:grid-cols-[auto_1fr] sm:items-center"
              >
                <span className="grid size-10 place-items-center rounded-md bg-white text-slate-950">
                  <Icon size={17} />
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    {link.label}
                  </span>
                  <span className="block break-all text-sm text-slate-300">
                    {link.value}
                  </span>
                </span>
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="mailto:mhmodhr@gmail.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-teal-100"
            >
              <Mail size={17} /> Email Me
            </Link>
            <Link
              href="/mahmoud-saleh-cv.pdf"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-white"
            >
              <Download size={17} /> Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
