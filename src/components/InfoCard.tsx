import { useState } from "react";
import type { ReactNode } from "react";
import { Plus, Minus } from "lucide-react";

interface InfoCardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

export default function InfoCard({
  title,
  icon,
  children,
  className = "",
  collapsible = false,
  defaultOpen = true,
}: InfoCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section
      className={`bg-(--color-surface) rounded-2xl shadow-(--elevation-2) hover:shadow-(--elevation-3)
        transition-shadow p-6 md:p-8 ${className}`}
    >
      {title && (
        <div
          className={`flex items-center justify-between gap-3 ${isOpen ? "mb-4" : ""} ${
            collapsible ? "cursor-pointer select-none" : ""
          }`}
          onClick={collapsible ? () => setIsOpen((prev) => !prev) : undefined}
        >
          <div className="flex items-center gap-3">
            {icon && <span className="text-(--color-primary)">{icon}</span>}
            <h2 className="text-xl font-semibold text-(--color-primary)">
              {title}
            </h2>
          </div>

          {collapsible && (
            <button
              type="button"
              aria-label={isOpen ? `Collapse ${title}` : `Expand ${title}`}
              aria-expanded={isOpen}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen((prev) => !prev);
              }}
              className="flex items-center justify-center w-8 h-8 rounded-full
                bg-(--color-primary) text-(--color-surface) hover:opacity-90 transition-opacity"
            >
              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
          )}
        </div>
      )}

      <div
        className={`text-(--color-on-surface,#1a1a1a) leading-relaxed overflow-hidden
          transition-all duration-300 ease-in-out
          ${collapsible ? (isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0") : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
