// src/pages/Credentials.tsx
import { GraduationCap } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";
import TechTag from "../components/TechTag";
import { credentials } from "../data/credentials";

export default function Credentials() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap size={24} className="text-(--color-primary)" />
        <h1 className="text-2xl font-semibold text-(--color-primary)">
          Credentials
        </h1>
      </div>

      {credentials.map((cred) => (
        <ExperienceCard
          key={cred.id}
          logo={cred.logo}
          logoAlt={cred.logoAlt}
          title={cred.title}
          company={cred.company}
          location={cred.location}
          period={cred.period}
          defaultOpen={cred.defaultOpen}
          tags={cred.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        >
          <p className="mb-4">{cred.description}</p>

          {cred.highlights && cred.highlights.length > 0 && (
            <>
              <p className="text-sm font-medium mb-2">Academic Highlights:</p>
              <ul className="space-y-1 list-disc pl-5 text-sm">
                {cred.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </>
          )}
        </ExperienceCard>
      ))}
    </div>
  );
}