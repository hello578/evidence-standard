import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { principles } from "../../principles-data";
export const metadata: Metadata = { title: "Principles", description: "Principles for credible, portable and independently reviewable evidence standards." };
export default function Principles(){return <PageShell eyebrow="Field principles" title="Principles for credible evidence standards" intro="A credible evidence standard should make the relationship between evidence and a consequential decision clearer over time, across systems and between organisations."><dl className="definition-list">{principles.map(([term,definition])=><div className="definition" key={term}><dt>{term}</dt><dd>{definition}</dd></div>)}</dl><div className="callout">These principles describe qualities of a useful evidence standard. They do not certify an organisation, implementation or decision outcome.</div></PageShell>}
