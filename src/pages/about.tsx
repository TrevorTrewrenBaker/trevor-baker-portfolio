import { User, History, Rocket, Compass } from "lucide-react";
import InfoCard from "../components/InfoCard";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <InfoCard title="About Me" icon={<User size={22} />}>
        <p>
          I'm Trevor — a Brisbane-based Developer bridging professional
          software engineering and game development.
        </p>
      </InfoCard>

      <InfoCard title="Past" icon={<History size={22} />} collapsible defaultOpen={true}>
        <ul className="space-y-2 list-none pl-0">
          <li>
            <strong className="text-(--color-primary)">Education:</strong>{" "}
            Bachelor of Games and Interactive Environments, QUT (Software
            Technologies major, Game Design minor) — conferred December 2019
          </li>
          <li>
            <strong className="text-(--color-primary)">Death's Door:</strong>{" "}
            Built AI behaviour trees, animation blendspaces, and combat
            systems for three enemy types in Unreal Engine
          </li>
          <li>
            <strong className="text-(--color-primary)">Neon Skies:</strong>{" "}
            Designed and built a 3D drone-flying game — drone AI, waypoint
            navigation, a SQL-backed player-data system, and an upgrade
            manager
          </li>
          <li>
            <strong className="text-(--color-primary)">Hook Your Hunger:</strong>{" "}
            Built movement and behaviour logic for four distinct enemy types
            in a VR mini-game
          </li>
          <li>
            <strong className="text-(--color-primary)">Woolworths:</strong>{" "}
            Spent 8 years working up from trolley collector to Front-End
            Supervisor — learning what it takes to work well with people
            under pressure
          </li>
        </ul>
      </InfoCard>

      <InfoCard title="Present" icon={<Rocket size={22} />} collapsible defaultOpen={true}>
        <ul className="space-y-2 list-none pl-0">
          <li>
            <strong className="text-(--color-primary)">Role:</strong>{" "}
            Software Developer at Independent Solutions, building and
            maintaining a production C#/.NET line-of-business application
          </li>
          <li>
            <strong className="text-(--color-primary)">Hardware Integration:</strong>{" "}
            Designed and shipped GS1 barcode scanning and Bluetooth label
            printer connectivity, cutting scan errors by 90%
          </li>
          <li>
            <strong className="text-(--color-primary)">Problem Solving:</strong>{" "}
            Diagnosed and resolved a production data-integrity fault through
            root-cause analysis, restoring 100% accuracy in a
            business-critical workflow
          </li>
          <li>
            <strong className="text-(--color-primary)">Day-to-Day:</strong>{" "}
            Working across the full software lifecycle — design,
            development, testing, code review, and production support —
            inside an Agile team
          </li>
          <li>
            <strong className="text-(--color-primary)">Still Making Games:</strong>{" "}
            Recent game jam entries built and shipped under tight deadlines
            (React, TypeScript)
          </li>
        </ul>
      </InfoCard>

      <InfoCard title="Future" icon={<Compass size={22} />} collapsible defaultOpen={true}>
        <ul className="space-y-2 list-none pl-0">
          <li>
            <strong className="text-(--color-primary)">Certification:</strong>{" "}
            Currently working through a Microsoft Azure AI Engineer Associate
            (AI-200) certification — hands-on with Kubernetes, containerised
            deployment, and AI inference infrastructure
          </li>
          <li>
            <strong className="text-(--color-primary)">This Site:</strong>{" "}
            Building this portfolio as a live project — React, TypeScript,
            and a custom design system, deployed through GitHub Actions
          </li>
          <li>
            <strong className="text-(--color-primary)">Direction:</strong>{" "}
            Looking to bring together my software engineering discipline and
            my original passion for games — whether that's a QA, engineering,
            or tools role in the games industry, or continuing to grow as a
            developer more broadly
          </li>
          <li>
            <strong className="text-(--color-primary)">Curiosity:</strong>{" "}
            Genuinely interested in where AI-assisted and agentic development
            is heading, and keen to keep building real, hands-on experience
            with it
          </li>
        </ul>
      </InfoCard>
    </div>
  );
}
