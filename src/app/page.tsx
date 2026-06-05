import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteHeader } from "@/components/sections/site-header";
import { WorkSection } from "@/components/sections/work-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </div>
  );
}
