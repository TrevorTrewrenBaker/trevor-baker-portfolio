import { useState } from "react";
import { Link } from "react-router-dom";  // ← Import Link
import {
  Menu,
  X,
  User,
  Wrench,
  Briefcase,
  GraduationCap,
  FolderKanban
} from "lucide-react";
import { SocialIcon } from 'react-social-icons';

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

// Use relative paths (no base path) because basename is set in App.tsx
const navLinks: NavLink[] = [
  { label: "About Me", href: "/about", icon: <User size={20} /> },
  { label: "Skills", href: "/skills", icon: <Wrench size={20} /> },
  { label: "Experience", href: "/experience", icon: <Briefcase size={20} /> },
  { label: "Projects", href: "/projects", icon: <FolderKanban size={20} /> },
  { label: "Credentials", href: "/credentials", icon: <GraduationCap size={20} /> },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/TrevorTrewrenBaker",
    icon: <SocialIcon url="https://github.com/TrevorTrewrenBaker" target="_blank" style={{ height: 30, width: 30 }} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trevor-baker-3a52a1394/",
    icon: <SocialIcon url="https://www.linkedin.com/in/trevor-baker-3a52a1394/" target="_blank" style={{ height: 30, width: 30 }} />,
  },
  {
    label: "Email",
    href: "mailto:trevor-baker@live.com.au",
    icon: <SocialIcon url="mailto:trevor-baker@live.com.au" style={{ height: 30, width: 30 }} />,
  },
];

export default function FlyoutMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const name = "Trevor Baker";
  const subtitle = "Games & Software Developer";

  return (
    <>
      {/* ---------- Desktop left sidebar (visible md and up) ---------- */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 z-50 w-56 flex-col bg-(--color-surface) shadow-(--elevation-2)">
        <div className="px-6 py-6 border-b border-black/10">
          <span className="font-semibold text-(--color-on-surface) text-lg block">
            {name}
          </span>
          <span className="text-xs text-(--color-on-surface) block mt-1">
            {subtitle}
          </span>
        </div>

        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="flex items-center gap-3 px-6 py-3 text-(--color-on-surface)
                  hover:bg-(--color-primary)/10 hover:text-(--color-primary) transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-6 py-6 border-t border-black/10">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-9 h-9 rounded-full
                  hover:bg-(--color-primary)/10 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* ---------- Mobile trigger button (visible below md) ---------- */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="md:hidden fixed top-4 left-4 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-(--color-surface) text-(--color-primary) shadow-(--elevation-2) hover:shadow-(--elevation-3) transition-shadow"
      >
        <Menu size={22} />
      </button>

      {/* ---------- Mobile backdrop ---------- */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ---------- Mobile flyout panel (slides in from left) ---------- */}
      <nav
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-72 bg-(--color-surface) shadow-(--elevation-5)
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <span className="font-semibold text-(--color-primary)">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="text-(--color-primary) hover:opacity-70 transition-opacity"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-(--color-on-surface)
                  hover:bg-(--color-primary)/10 hover:text-(--color-primary) transition-colors"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 left-0 right-0 border-t border-black/10 px-6 py-5">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 rounded-full
                  hover:bg-(--color-primary)/10 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}