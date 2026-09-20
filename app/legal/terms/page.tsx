import type { Metadata } from "next";
import { PageShell } from "../../components/page-shell";
export const metadata: Metadata = { title: "Terms" };
export default function Terms(){return <PageShell eyebrow="Legal" title="Terms of use" intro="EvidenceStandard.org is provided as a public information and standards resource."><p>Content is provided for general information and technical discussion. It is not legal, regulatory, insurance, investment or compliance advice, and it does not certify a decision, organisation or implementation.</p><p>Links to external sites are provided for context. Their content, availability and claims remain the responsibility of their respective operators.</p></PageShell>}
