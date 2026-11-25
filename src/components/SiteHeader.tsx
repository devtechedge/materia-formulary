import Link from "next/link";

import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/browse", label: "Formulary" },
  { href: "/compare", label: "Forms" },
  { href: "/draft", label: "Draft" },
  { href: "/audit", label: "Audit" },
  { href: "/methodology", label: "Method" },
  { href: "/journal", label: "Journal" },
];

export function SiteHeader() {
  return (
    <header className="header">
      <div className="shell header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          MATERIA
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
