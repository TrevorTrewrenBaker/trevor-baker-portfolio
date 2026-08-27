// src/components/ExperienceCard.tsx
import { useState } from "react";
import type { ReactNode } from "react";
import { Plus, Minus } from "lucide-react";

interface ExperienceCardProps {
  logo: string;
  logoAlt: string;
  title: string;
  company: string;
  location: string;
  period: string;
  tags?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function ExperienceCard({
  logo,
  logoAlt,
  title,
  company,
  location,
  period,
  tags,
  children,
  defaultOpen = true,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="relative bg-(--color-surface) rounded-2xl shadow-(--elevation-2) hover:shadow-(--elevation-3) transition-shadow p-6 md:p-8 pt-10">

      <span className="absolute top-0 left-6 -translate-y-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-(--color-primary) text-(--color-surface) shadow-(--elevation-2)">
        {period}
      </span>

      <div
        className="flex items-start justify-between gap-3 cursor-pointer select-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-start gap-4">
          <img
            src={logo}
            alt={logoAlt}
            className="w-12 h-12 rounded-full object-cover shrink-0 bg-(--color-primary)/5"
          />
          <div>
            <h2 className="text-xl font-semibold text-(--color-primary)">
              {title}
            </h2>
            <p className="text-sm font-medium mt-0.5">{company}</p>
            <p className="text-sm opacity-60">{location}</p>
          </div>
        </div>

        <button
          type="button"
          aria-label={isOpen ? `Collapse ${title}` : `Expand ${title}`}
          aria-expanded={isOpen}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          className="flex items-center justify-center w-8 h-8 rounded-full shrink-0
            bg-(--color-primary) text-(--color-surface) hover:opacity-90 transition-opacity"
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </button>
      </div>

      {tags && <div className="flex flex-wrap gap-2 mt-4">{tags}</div>}

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[3000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        {children}
      </div>
    </section>
  );
}