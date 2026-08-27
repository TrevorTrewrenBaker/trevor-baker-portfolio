// src/pages/Skills.tsx
import { Wrench } from "lucide-react";
import InfoCard from "../components/InfoCard";
import TechTag from "../components/TechTag";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Wrench size={24} className="text-(--color-primary)" />
        <h1 className="text-2xl font-semibold text-(--color-primary)">
          Skills
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <InfoCard key={group.title} title={group.title}>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <TechTag key={skill} label={skill} />
              ))}
            </div>
          </InfoCard>
        ))}
      </div>
    </div>
  );
}