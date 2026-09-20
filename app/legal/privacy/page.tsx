import type { Metadata } from "next";
import { PageShell } from "../../components/page-shell";
export const metadata: Metadata = { title: "Privacy" };
export default function Privacy(){return <PageShell eyebrow="Legal" title="Privacy" intro="This notice explains the limited data practices for EvidenceStandard.org."><p>The site is a public information resource. It does not collect customer evidence, create accounts or provide an upload service. Basic server and security logs may be processed by the hosting provider to operate and protect the site.</p><p>Where optional analytics or consent tooling is enabled, it operates only according to the consent choices presented to you. Questions may be sent to <a href="mailto:standards@veriscopic.com">standards@veriscopic.com</a>.</p></PageShell>}
