import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Component,
  CreditCard,
  Layers3,
  LineChart,
  MapPin,
  Smartphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years building mobile and web apps", value: "5+" },
  { label: "App downloads", value: "5M+" },
  { label: "Bundle reduction", value: "25%" },
];

export const projects = [
  {
    title: "Urpay Finance App",
    category: "Smart digital wallet app",
    description:
      "Integrated Samsung Pay SDK into a React Native digital wallet in a regulated banking environment, delivered subscription payment integrations (Netflix, YouTube).",
    metrics: ["5M+ downloads", "Samsung Pay Native Bridge", "YouTube & Netflix Subscription"],
    accent: "from-blue-400 to-indigo-500",
    href: "https://apps.apple.com/ie/app/urpay/id1585778338",
    cta: "View on App Store",
  },
  {
    title: "POS Mobile App",
    category: "React Native POS and digital wallet",
    description:
      "Worked on a telecom-scale POS app with thermal printer support, KYC BlinkID-SDK flows, ID check native bridge, and Orange Money digital wallet features.",
    metrics: ["50K+ downloads", "Thermal printer", "KYC & ID bridge"],
    accent: "from-emerald-500 to-teal-600",
    href: "https://play.google.com/store/apps/details?id=com.eska.pma&hl=en",
    cta: "View on Google Play",
  },
  {
    title: "Orange Money",
    category: "Wallet features inside the POS ecosystem",
    description:
      "Contributed to balance receive and transfer flows, balance checks, transaction logs, and wallet UX across a high-traffic mobile money product.",
    metrics: ["1M+ downloads", "Transfers", "Transaction logs"],
    accent: "from-orange-500 to-amber-500",
    href: "https://play.google.com/store/apps/details?id=com.wha.orangemoney&hl=en",
    cta: "View on Google Play",
  },
  {
    title: "Roya Kids App",
    category: "React Native kids games and media",
    description:
      "Built and contributed to React Native mobile kids games and interactive app experiences for Roya TV's children-focused platform.",
    metrics: ["100K+ downloads", "RN games", "Media app", "Kids platform"],
    accent: "from-rose-500 to-orange-500",
    href: "https://play.google.com/store/apps/details?id=com.royakids.tv&hl=en_IE",
    cta: "View on Google Play",
  },
  {
    title: "DBC Online",
    category: "E-commerce mobile app",
    description:
      "Contributed to an e-commerce mobile experience with product browsing, shopping flows, and payment flows for Google Pay, Apple Pay, and Visa card data entry.",
    metrics: ["E-commerce", "Google & Apple Pay", "Visa card flows"],
    accent: "from-cyan-500 to-blue-600",
    href: "https://apps.apple.com/iq/app/dbc-online/id1588086984",
    cta: "View on App Store",
  },
];

export const services = [
  {
    title: "React Native apps",
    description:
      "Bare and Expo mobile apps with native modules, OTA updates, CodePush, Sentry, Firebase, and store release workflows.",
    icon: Smartphone,
  },
  {
    title: "React.js interfaces",
    description:
      "Maintainable SPAs, dashboards, booking flows, and rich UI experiences with typed state and reusable components.",
    icon: Component,
  },
  {
    title: "Next.js web platforms",
    description:
      "Modern App Router websites with metadata, server components, scalable routes, and production-minded styling.",
    icon: Layers3,
  },
  {
    title: "Payments and integrations",
    description:
      "Stripe, Apple Pay, Google Pay, Samsung Pay, REST, GraphQL, JWT auth, cloud uploads, and native SDK bridges.",
    icon: CreditCard,
  },
];

export const processSteps = [
  {
    title: "Architect the app",
    description:
      "Plan navigation, state, API contracts, native capabilities, and release constraints before implementation expands.",
    icon: LineChart,
  },
  {
    title: "Build production features",
    description:
      "Ship typed React Native, React.js, and Next.js features with reusable UI, robust data flows, and integration tests where they matter.",
    icon: Code2,
  },
  {
    title: "Release and improve",
    description:
      "Use CI/CD, Fastlane, crash reporting, performance reviews, and store-ready release discipline to keep apps stable.",
    icon: ShieldCheck,
  },
];

export const highlights = [
  {
    label: "Core stack",
    value: "React Native, React.js, Next.js, TypeScript, Redux Toolkit",
    icon: Sparkles,
  },
  {
    label: "Domains",
    value: "Fintech, telecom, media, e-commerce, wallets, payments",
    icon: BriefcaseBusiness,
  },
  {
    label: "Location",
    value: "Dublin, Ireland. Eligible for full-time work with no sponsorship required.",
    icon: MapPin,
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "mhmodhr@gmail.com",
    href: "mailto:mhmodhr@gmail.com",
    icon: ArrowUpRight,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mahmoud-al-saleh-a16303168",
    href: "https://linkedin.com/in/mahmoud-al-saleh-a16303168",
    icon: BadgeCheck,
  },
  {
    label: "GitHub",
    value: "github.com/Mahmoud-S97",
    href: "https://github.com/Mahmoud-S97",
    icon: Code2,
  },
];
