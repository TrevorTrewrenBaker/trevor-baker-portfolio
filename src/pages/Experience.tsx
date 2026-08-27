// src/pages/Experience.tsx
import { Briefcase } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";
import TechTag from "../components/TechTag";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase size={24} className="text-(--color-primary)" />
        <h1 className="text-2xl font-semibold text-(--color-primary)">
          Professional Experience
        </h1>
      </div>

      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          logo={exp.logo}
          logoAlt={exp.logoAlt}
          title={exp.title}
          company={exp.company}
          location={exp.location}
          period={exp.period}
          defaultOpen={exp.defaultOpen}
          tags={exp.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        >
          <ul className="space-y-2 list-disc pl-5">
            {exp.bullets.map((bullet, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{
                  __html: bullet.replace(/\*\*(.*?)\*\*/g, (_, text) => {
                    return `<strong class="text-(--color-primary)">${text}</strong>`;
                  }),
                }}
              />
            ))}
          </ul>
        </ExperienceCard>
      ))}
    </div>
  );
}