// src/pages/About.tsx
import { User } from "lucide-react";
import InfoCard from "../components/InfoCard";
import { aboutSections } from "../data/about";
import { iconMap } from "../utils/iconMap";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <User size={24} className="text-(--color-primary)" />
        <h1 className="text-2xl font-semibold text-(--color-primary)">
          About Me
        </h1>
      </div>

      {aboutSections.map((section) => {
        const IconComponent = iconMap[section.icon as keyof typeof iconMap];
        const isList = Array.isArray(section.content);

        return (
          <InfoCard
            key={section.id}
            title={section.title}
            icon={IconComponent ? <IconComponent size={22} /> : undefined}
            collapsible
            defaultOpen={section.defaultOpen}
          >
            {isList ? (
              <ul className="space-y-2 list-none pl-0">
                {section.content.map((item, index) => (
                  <li key={index}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.replace(/\*\*(.*?)\*\*/g, (_, text) => {
                          return `<strong class="text-(--color-primary)">${text}</strong>`;
                        }),
                      }}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p
                dangerouslySetInnerHTML={{
                  __html: section.content.replace(/\*\*(.*?)\*\*/g, (_, text) => {
                    return `<strong class="text-(--color-primary)">${text}</strong>`;
                  }),
                }}
              />
            )}
          </InfoCard>
        );
      })}
    </div>
  );
}