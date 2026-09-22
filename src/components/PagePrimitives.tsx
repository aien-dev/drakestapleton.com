import type { ReactNode } from "react";

type ChapterLink = { href: string; number: string; label: string };

export function PageIntro({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <header className={`page-intro ${className}`.trim()}>
      <p className="kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="portrait-deck">{children}</div>
    </header>
  );
}

export function ChapterNav({ links }: { links: ChapterLink[] }) {
  return (
    <nav className="chapter-nav" aria-label="On this page">
      {links.map((link) => (
        <a href={link.href} key={link.href}>
          <span>{link.number}</span>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export function SectionLead({
  eyebrow,
  title,
  titleId,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  titleId?: string;
  children?: ReactNode;
}) {
  return (
    <header className="section-lead">
      <p className="portrait-index">{eyebrow}</p>
      <div>
        <h2 id={titleId}>{title}</h2>
        {children}
      </div>
    </header>
  );
}
