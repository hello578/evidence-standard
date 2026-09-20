import type { ReactNode } from "react";

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <><section className="page-intro"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section><section className="section"><div className="container prose">{children}</div></section></>;
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) { return <a href={href} target="_blank" rel="noreferrer">{children}</a>; }
