export interface AboutSection {
  id: string;
  title: string;
  icon: string;
  content: string | string[];
  defaultOpen?: boolean;
}

export const aboutSections: AboutSection[] = [
  {
    id: "summary",
    title: "Professional Summary",
    icon: "FileText",
    defaultOpen: true,
    content:
      "Results-oriented **.NET & Mobile Developer** with expertise in full-lifecycle solution delivery, cloud architecture, and hardware integration. Spearheaded the **zero-downtime migration** of a critical production application from **Xamarin to .NET MAUI**, aligning technical execution with business goals and Google Play requirements. Orchestrated **CI/CD pipelines via Azure DevOps**, reducing deployment risks and manual errors by **30%**. Proven ability to translate ambiguous requirements into scalable **SOLID-compliant architectures** while mastering new technologies (**React, TypeScript**) under tight deadlines.",
  },
  {
    id: "past",
    title: "Past",
    icon: "History",
    defaultOpen: true,
    content: [
      "**Education:** Bachelor of Games and Interactive Environments, QUT (**Major:** Software Technologies, **Minor:** Game Design) **Graduated** December 2019.",
      "**Independent Solutions:** Spent 4+ years as a **Software Developer**, building and maintaining a production C#/.NET line-of-business application — including hardware integration work (GS1 barcode scanning, Bluetooth label printer connectivity) that cut scan errors by 90%.",
      "**Woolworths:** Spent 8 years working up from trolley collector to **Front-End Cashier Supervisor** — learning what it takes to work well with people under pressure.",
    ],
  },
  {
    id: "present",
    title: "Present",
    icon: "Rocket",
    defaultOpen: true,
    content: [
      "**Currently:** Between roles and actively job hunting, using the time to **upskill deliberately** rather than just wait it out.",
      "**Certification:** Working through a **Microsoft Azure AI Engineer Associate (AI-200) certification** — hands-on with **Kubernetes, containerised deployment, and AI inference infrastructure.**",
      "**This Site:** Building this portfolio as a live project — **React, TypeScript,** and a custom design system, deployed through **GitHub Actions.**",
      "**Still Making Games:** Recent **game jam entries** built and shipped under **tight deadlines.** (React, TypeScript)",
      "**Mindset:** Treating this stretch as an opportunity to **sharpen skills** I wouldn't otherwise get time for, and to be genuinely selective about where I land next.",
    ],
  },
  {
    id: "future",
    title: "Future",
    icon: "Compass",
    defaultOpen: true,
    content: [
      "**Direction:** Looking to bring together my software engineering discipline and my original passion for games — whether that's a **QA, engineering, or tools role** in the games industry, or **continuing to grow as a developer** more broadly.",
      "**Curiosity:** Genuinely interested in where **AI-assisted and agentic development** is heading, and keen to keep building real, hands-on experience with it.",
      "**What I'm Looking For:** A role where I can keep **growing as a developer,** contribute from day one, and ideally work somewhere that values the same **problem-solving curiosity** I bring to my own projects.",
    ],
  },
];