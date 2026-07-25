export type WorkShot = {
  src: string;
  alt: string;
  label?: string;
};

export type WorkProject = {
  slug: string;
  name: string;
  category: string;
  focus: string;
  summary: string;
  url: string;
  hero: string;
  gallery: WorkShot[];
  highlights: string[];
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "philorium",
    name: "Philorium",
    category: "AI product experience",
    focus: "Immersive oracle UI",
    summary:
      "A dark, cinematic archive where users commune with immortal minds — Socrates, Nietzsche, and more — through an AI-powered oracle experience.",
    url: "https://philorium.vercel.app/",
    hero: "/works/philorium/hero-section.png",
    gallery: [
      {
        src: "/works/philorium/tab1.png",
        alt: "Philorium Hall of Minds interface",
        label: "Hall of Minds",
      },
      {
        src: "/works/philorium/contact-form.png",
        alt: "Philorium contact inscription form",
        label: "Contact flow",
      },
      {
        src: "/works/philorium/google-top-rank.png",
        alt: "Philorium ranking at the top of Google search",
        label: "Google top rank",
      },
    ],
    highlights: [
      "Atmospheric full-bleed hero",
      "Interactive philosopher archive",
      "Indexed & ranking on Google",
    ],
  },
  {
    slug: "dynamisos",
    name: "DynamisOS",
    category: "Product marketing site",
    focus: "Dynamic software story",
    summary:
      "A crisp product narrative for Dynamic Software Interfaces — primitives, studio, and agents — with a bright, editorial marketing site.",
    url: "https://www.dynamisos.in/",
    hero: "/works/dynamisos/hero-section.png",
    gallery: [
      {
        src: "/works/dynamisos/tab-1.png",
        alt: "DynamisOS product section",
        label: "Product narrative",
      },
      {
        src: "/works/dynamisos/tab-2.png",
        alt: "DynamisOS secondary section",
        label: "Stack & story",
      },
    ],
    highlights: [
      "Floating pill navigation",
      "Strong product thesis layout",
      "YC-ready marketing polish",
    ],
  },
  {
    slug: "aethermind",
    name: "AetherMind",
    category: "AI platform website",
    focus: "Intelligent solutions",
    summary:
      "A deep-space AI platform site for automation, analytics, and autonomous agents — built to convert visitors into demos.",
    url: "https://aethermind-one.vercel.app/",
    hero: "/works/aethermind/hero-section.png",
    gallery: [
      {
        src: "/works/aethermind/google-top-rank.png",
        alt: "AetherMind ranking at the top of Google search",
        label: "Google top rank",
      },
    ],
    highlights: [
      "Gradient dark-mode brand system",
      "Clear service + demo CTAs",
      "Indexed & ranking on Google",
    ],
  },
  {
    slug: "orkaive",
    name: "Orkaive",
    category: "Enterprise AI product",
    focus: "Workforce infrastructure",
    summary:
      "Enterprise AI workforce infrastructure — typed multi-agent runtime, visual orchestration, and human-in-the-loop operations.",
    url: "https://orkaive-frontend.vercel.app/",
    hero: "/works/orkaive/home-page-ui.png",
    gallery: [
      {
        src: "/works/orkaive/name-meaning-ui.png",
        alt: "Orkaive architecture naming section",
        label: "Architecture story",
      },
      {
        src: "/works/orkaive/agent-builder-ui.png",
        alt: "Orkaive agent builder canvas",
        label: "Agent builder",
      },
      {
        src: "/works/orkaive/try-agent-interface.png",
        alt: "Orkaive try agent interface",
        label: "Try agent UI",
      },
      {
        src: "/works/orkaive/internal-dashboard.png",
        alt: "Orkaive internal operations dashboard",
        label: "Ops dashboard",
      },
    ],
    highlights: [
      "Multi-agent runtime UI",
      "Ops console & audit trails",
      "Enterprise-ready product story",
    ],
  },
];

/** All viewable shots for a project (hero + gallery) */
export function projectShots(project: WorkProject): WorkShot[] {
  const shots: WorkShot[] = [
    {
      src: project.hero,
      alt: `${project.name} hero screenshot`,
      label: "Hero",
    },
    ...project.gallery,
  ];
  return shots.filter((s) => Boolean(s.src));
}
