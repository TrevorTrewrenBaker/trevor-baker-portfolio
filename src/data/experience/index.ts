// src/data/experience/index.ts

export interface Experience {
  id: string;
  logo: string;
  logoAlt: string;
  title: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  bullets: string[];
  defaultOpen?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "independent-solutions",
    logo: `${import.meta.env.BASE_URL}logos/independent-solutions.png`,
    logoAlt: "Independent Solutions Pty Ltd logo",
    title: "Software Developer",
    company: "Independent Solutions Pty Ltd",
    location: "Eight Mile Plains, Brisbane QLD",
    period: "Jan 2022 – Feb 2026",
    defaultOpen: true,
    tags: [
      "C#",
      "Xamarin",
      ".NET MAUI",
      ".NET Core",
      "ASP.NET",
      "SQL Server",
      "T-SQL",
      "Entity Framework",
      "PowerShell",
      "Azure",
      "Git",
      "GS1 Barcode Standards",
      "ZPL/SBPL",
      "Bluetooth SPP",
      "Telerik UI",
      "XML/JSON Parsing",
    ],
    bullets: [
      "Contributed to the migration of a production app from **Xamarin to .NET MAUI**, working across requirements and architecture to support a smooth deployment.",
      "Engineered **Bluetooth-based label printer integration**, extending an existing library to add **BLE support** and managing ZPL/SBPL command streams, resulting in a **40% reduction in pre-printed labels**.",
      "Led the migration to **GS1 Data Matrix and FNC1 encoding**, achieving a **90% reduction in scan read errors** and full compliance with GS1 standards.",
      "Performed structured **disaster recovery testing** (isolate, restore, replicate, verify) and provided remote device support for issues unreproducible in-house.",
      "Upgraded Android target versions and refactored **BLUETOOTH_SCAN / BLUETOOTH_CONNECT permissions** to resolve an Android 13 crash, achieving a **0% crash rate** post-fix while maintaining Google Play Store compliance.",
      "Diagnosed and resolved a critical invoice picking defect, **restoring 100% picking accuracy** for the affected workflow.",
      "Optimised the ordering page's data handling, achieving a **60% reduction in load time**.",
      "Built an offline-first products page, ensuring **100% uptime in disconnected zones** through local caching and sync logic.",
      "Developed **XML/JSON parsing modules** to bridge the modern .NET MAUI application with legacy systems, ensuring seamless data flow.",
      "Partnered with **Product Owners** to translate ambiguous business requirements into scalable technical solutions, prioritising features that delivered the most business value.",
      "Integrated and tested **Portable Data Entry (PDE) scanners** from multiple vendors, modifying and implementing vendor SDKs and updating **Android manifest configurations** to ensure reliable operation across all device types.",
    ],
  },
  {
    id: "woolworths",
    logo: `${import.meta.env.BASE_URL}logos/woolworths.png`,
    logoAlt: "Woolworths Supermarkets logo",
    title: "Cashier / Front-End Supervisor",
    company: "Woolworths Supermarkets",
    location: "Brisbane, QLD",
    period: "Jun 2014 – Jun 2022",
    defaultOpen: false,
    tags: [
      "Team Leadership",
      "Crisis Management",
      "Conflict Resolution",
      "Staff Training",
      "Operational Planning",
      "Communication",
      "Adaptability",
      "Problem Solving",
      "Compliance Management",
    ],
    bullets: [
      "Managed **high-volume front-of-house operations** over **8 years**, progressing from Trolley Collector to **Front-End Supervisor**.",
      "Led cross-functional operations through the **pandemic**, navigating rapidly shifting safety regulations and severe staffing shortages while maintaining operational integrity.",
      "Managed **store queues during peak trading periods**, monitoring customer numbers at entry points and enforcing sign-in requirements to maintain COVID-era capacity compliance.",
      "Built and supported **high-performing teams**, training staff and resolving complex escalations under pressure.",
      "Developed a framework for clear communication, **rapid problem-solving**, and adaptive decision-making during high-stress conditions.",
    ],
  },
];