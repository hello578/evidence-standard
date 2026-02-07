// app/components/site-header.tsx

import Link from "next/link";

export function SiteHeader() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: "2.5rem",
      }}
    >
      <div>
        <Link
          href="/"
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#e5e7eb",
            textDecoration: "none",
          }}
        >
          The Evidence Standard
        </Link>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#9ca3af",
            marginTop: "0.25rem",
          }}
        >
          A framework for evidence of judgement
        </div>
      </div>

      <nav
        style={{
          display: "flex",
          gap: "1.25rem",
          fontSize: "0.95rem",
        }}
      >
        <Link
          href="/about"
          style={{ color: "#9ca3af", textDecoration: "none" }}
        >
          About
        </Link>
        <Link
          href="/governance"
          style={{ color: "#9ca3af", textDecoration: "none" }}
        >
          Governance
        </Link>
        <Link
          href="/standard"
          style={{ color: "#9ca3af", textDecoration: "none" }}
        >
          Standard
        </Link>
      </nav>
    </header>
  );
}
