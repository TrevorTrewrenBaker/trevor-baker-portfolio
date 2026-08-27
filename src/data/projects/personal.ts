import type { Project } from "./types";

export const personalProjects: Project[] = [
  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    summary:
      "This very portfolio — a React/TypeScript SPA with a custom design system and CI/CD deployment.",
    category: "personal",
    date: "2026",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Actions"],
    heroImage: undefined,
    heroImageAlt: "",
    subtitle:
      "Building my portfolio as a live project — clean, modular, and continuously deployed",
    overview:
      "This portfolio site is itself a project. Built with React and TypeScript, it features a custom design system using CSS variables, component-driven architecture, and automated CI/CD deployment via GitHub Actions.",
    challenge:
      "I wanted a portfolio that felt polished and professional without relying on heavy frameworks or templates. The site needed to be performant, accessible, and easy to update with new projects.",
    approach:
      "Used Vite for fast builds, React for component architecture, and CSS variables for a themable design system. Deployed through GitHub Actions with automatic builds on push. Component patterns prioritize reusability and consistency.",
    features: [
      {
        label: "Design System",
        description: "Custom theming built with CSS variables",
      },
      {
        label: "Component Architecture",
        description: "Reusable, component-driven building blocks",
      },
      {
        label: "Responsive Layouts",
        description: "Grid-based layouts for project cards",
      },
      {
        label: "Filterable Gallery",
        description: "Project gallery filterable by category",
      },
      {
        label: "Case Study Pages",
        description: "Detailed project pages with case study content",
      },
      {
        label: "Automated Deployment",
        description: "CI/CD via GitHub Actions",
      },
    ],
    techDetails: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "Vite"],
      },
      {
        label: "Styling",
        items: ["CSS Variables", "Tailwind CSS (utility layer)"],
      },
      {
        label: "DevOps",
        items: ["GitHub Actions", "GitHub Pages"],
      },
    ],
    results: [
      "Live portfolio deployed in < 2 weeks",
      "Automated deployment on every push",
      "Clean, accessible, and performant",
      "Easy to extend with new projects and components",
    ],
    screenshots: undefined,
    liveUrl: "https://trevortrewrenbaker.github.io/trevor-baker-portfolio",
    repoUrl: "https://github.com/TrevorTrewrenBaker/trevor-baker-portfolio",
    role: "Solo Developer",
    duration: "2 weeks",
    metrics: [
      { label: "Components", value: "12+" },
      { label: "Pages", value: "5" },
      { label: "Build Time", value: "< 5s" },
    ],
  },
  {
    slug: "revs-antivirus-game",
    title: "R.E.V.S — Anti-Virus Software Warning Game",
    summary:
      "A browser-based game built in 7 days for 1-BIT JAM 10, exploring themes of digital safety and anti-virus software.",
    category: "personal",
    date: "March 2026",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    heroImage: `${import.meta.env.BASE_URL}Images/REVS-game/1.png`,
    heroImageAlt: "R.E.V.S game menu screen",
    subtitle:
      "A 7-day game jam entry exploring digital safety through interactive gameplay",
    overview:
      "R.E.V.S is a browser-based game built for 1-BIT JAM 10 on itch.io, completed within a 7-day timeframe. The game explores themes of digital safety and anti-virus software through engaging interactive mechanics.",
    challenge:
      "Delivering a complete, polished game within a 7-day game jam deadline while maintaining code quality and responsive design across devices.",
    approach:
      "Engineered the application using React.js and modern JavaScript, structuring the codebase with reusable components to efficiently manage complex game state and logic. Implemented mobile-friendly design patterns and performance optimizations for smooth gameplay across browsers and devices.",
    features: [
      {
        label: "Component Architecture",
        description: "React.js components managing game state",
      },
      {
        label: "Responsive Design",
        description: "Mobile-friendly layout across devices",
      },
      {
        label: "Interactive Mechanics",
        description: "Core interactive gameplay mechanics",
      },
      {
        label: "Performance Optimisation",
        description: "Optimised for smooth browser rendering",
      },
      {
        label: "Complete Game Loop",
        description: "Delivered within the 7-day jam timeline",
      },
    ],
    techDetails: [
      {
        label: "Frontend",
        items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
      },
    ],
    results: [
      "Completed and submitted within 7-day game jam",
      "Playable on itch.io with positive feedback",
      "Demonstrated ability to deliver under tight deadlines",
      "Clean, maintainable component architecture",
    ],
    screenshots: [
      `${import.meta.env.BASE_URL}Images/REVS-game/1.png`,
      `${import.meta.env.BASE_URL}Images/REVS-game/2.png`,
      `${import.meta.env.BASE_URL}Images/REVS-game/3.png`,
      `${import.meta.env.BASE_URL}Images/REVS-game/4.png`,
      `${import.meta.env.BASE_URL}Images/REVS-game/5.png`,
    ],
    liveUrl: "https://itch.io/jam/1-bit-jam-10/rate/4453594",
    repoUrl: "https://github.com/TrevorTrewrenBaker/1-BIT-JAM-10",
    role: "Solo Developer",
    duration: "7 days",
    teamSize: 1,
    metrics: [
      { label: "Build Time", value: "7 days" },
      { label: "Tech Stack", value: "React, JavaScript" },
      { label: "Screenshots", value: "5" },
    ],
  },
  {
    slug: "keep-clicking-the-cube",
    title: "Keep Clicking The Cube — TypeScript Game Jam",
    summary:
      "A 3-hour game jam entry built with TypeScript and Vite, featuring click detection and real-time scoring.",
    category: "personal",
    date: "May 2026",
    tech: ["TypeScript", "Vite", "HTML5", "CSS3"],
    heroImage: `${import.meta.env.BASE_URL}Images/keep-clicking-the-cube/1.png`,
    heroImageAlt: "",
    subtitle:
      "A 3-hour game jam project demonstrating rapid TypeScript adoption and modern build tooling",
    overview:
      "Keep Clicking The Cube is a clicker game built in 3 hours for a game jam, created while learning TypeScript for the first time. The project demonstrates rapid technology adoption and efficient development with modern build tools.",
    challenge:
      "Learn and apply TypeScript from scratch within a 3-hour game jam deadline while delivering a polished, functional game with real-time feedback.",
    approach:
      "Bootstrapped the application using a Vanilla TypeScript Vite template, configuring the build pipeline and structuring the codebase for efficient development. Engineered core mechanics including click detection, real-time scoring systems, and animated feedback for a responsive user experience.",
    features: [
      {
        label: "Click Detection",
        description: "Animated feedback on click events",
      },
      {
        label: "Real-Time Scoring",
        description: "Live scoring system",
      },
      {
        label: "Responsive Design",
        description: "Adapts across screen sizes",
      },
      {
        label: "Type Safety",
        description: "Built with TypeScript throughout",
      },
      {
        label: "Vite Build Pipeline",
        description: "Fast iteration via Vite tooling",
      },
    ],
    techDetails: [
      {
        label: "Tech Stack",
        items: ["TypeScript", "Vite", "HTML5", "CSS3"],
      },
    ],
    results: [
      "Completed in 3 hours",
      "Successfully compiled and deployed to itch.io",
      "Learned and applied TypeScript from scratch",
      "Demonstrated ability to adapt to new technologies under pressure",
    ],
    screenshots: undefined,
    liveUrl: "https://itch.io/jam/trijam-373/rate/4604215",
    repoUrl: "https://github.com/TrevorTrewrenBaker/Trijam-373-Keep-Clicking-The-Cube",
    role: "Solo Developer",
    duration: "3 hours",
    teamSize: 1,
    metrics: [
      { label: "Build Time", value: "3 hours" },
      { label: "Tech Stack", value: "TypeScript, Vite" },
    ],
  },
  {
    slug: "azure-ai-engineer-labs",
    title: "Azure AI Engineer Labs — Kubernetes & Monorepo Exploration",
    summary:
      "Exploring Nx monorepo architecture and Kubernetes deployment patterns for AI services with Azure AI integration.",
    category: "personal",
    date: "In Progress",
    tech: ["TypeScript", "Node.js", "Nx", "Kubernetes", "Azure", "Playwright", "Vitest"],
    heroImage: undefined,
    heroImageAlt: "",
    subtitle:
      "Personal R&D project investigating scalable AI infrastructure patterns",
    overview:
      "A self-directed learning project exploring Nx monorepo architecture, Kubernetes deployment patterns, and Azure AI services integration. Currently focused on establishing foundational infrastructure patterns and understanding container orchestration fundamentals.",
    challenge:
      "Learning to structure a modular TypeScript monorepo while navigating Kubernetes orchestration for AI workloads. Key challenges include understanding Nx workspace configuration, containerizing Node.js applications, and managing Azure service authentication in a local development environment.",
    approach:
      "Setting up Nx for monorepo structure with shared libraries for utilities and configuration. Experimenting with local Kubernetes deployments using Minikube to understand pod management, services, and ingress. Exploring Azure AI SDKs and Cognitive Services through official Microsoft Learn modules and documentation. Initial focus on establishing working local development patterns before moving to cloud deployment.",
    features: [
      {
        label: "Nx Monorepo Setup",
        description: "Initial workspace structure with shared library configuration",
      },
      {
        label: "Local Kubernetes Exploration",
        description: "Minikube cluster for learning orchestration basics",
      },
      {
        label: "Azure AI SDK Integration",
        description: "Exploring Azure Cognitive Services and OpenAI SDKs",
      },
      {
        label: "Shared Utilities",
        description: "Common configuration and utility libraries in development",
      },
      {
        label: "Learning-Focused Approach",
        description: "Documenting patterns and best practices as I progress",
      },
    ],
    techDetails: [
      {
        label: "Architecture",
        items: ["Nx", "Monorepo", "TypeScript"],
      },
      {
        label: "Orchestration (Learning)",
        items: ["Kubernetes", "Minikube", "Containerization"],
      },
      {
        label: "Cloud (Exploring)",
        items: ["Azure AI Services", "Cognitive Services"],
      },
      {
        label: "Testing (Planned)",
        items: ["Playwright", "Vitest"],
      },
    ],
    results: [
      "Established Nx monorepo workspace with shared library structure",
      "Configured local Kubernetes environment using Minikube for testing",
      "Set up Azure SDK credentials and basic service exploration",
      "Documented deployment patterns and infrastructure decisions",
      "Built foundation for future AI service integration and scaling",
    ],
    screenshots: undefined,
    liveUrl: undefined,
    repoUrl: undefined,
    role: "Solo Developer",
    duration: "In Progress",
    teamSize: 1,
    metrics: [
      { label: "Status", value: "Foundational Setup Phase" },
      { label: "Learning Focus", value: "Kubernetes & Nx" },
    ],
  },
];