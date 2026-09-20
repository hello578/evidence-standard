import type { Metadata } from "next";
import { PageShell } from "../../components/page-shell";
export const metadata: Metadata = { title: "Cookies" };
export default function Cookies(){return <PageShell eyebrow="Legal" title="Cookies" intro="EvidenceStandard.org uses only the cookies or local storage needed for site operation and consent preferences, together with optional measurement where you have agreed to it."><p>You can change or withdraw optional consent through the consent controls provided on the site. Essential technical storage may remain necessary for security and delivery.</p></PageShell>}
