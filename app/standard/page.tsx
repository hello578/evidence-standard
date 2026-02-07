// app/standard/page.tsx
// app/standard/page.tsx

export default function Standard() {
  return (
    <section>
      <h1
        style={{
          fontSize: "1.75rem",
          lineHeight: 1.3,
          marginBottom: "1rem",
        }}
      >
        The Evidence Standard (framework)
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1.5rem",
        }}
      >
        The Evidence Standard defines the principles and minimum expectations
        for how evidence of judgement and decision-making is captured,
        recorded, and verified.
      </p>

      <h2
        style={{
          fontSize: "1.25rem",
          marginBottom: "0.5rem",
          marginTop: "1.5rem",
        }}
      >
        Status of this framework
      </h2>
      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1rem",
        }}
      >
        This document describes the core framework of the Evidence Standard.
        It is intended as a stable reference. Individual published standards,
        such as the Veriscopic Evidence Standard (VES), provide detailed,
        versioned requirements under this framework.
      </p>

      <h2
        style={{
          fontSize: "1.25rem",
          marginBottom: "0.5rem",
          marginTop: "1.5rem",
        }}
      >
        1. Scope
      </h2>
      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1rem",
        }}
      >
        The Evidence Standard applies to the capture and preservation of
        evidence relating to human or organisational judgement, including
        decisions to approve, reject, accept risk, or proceed under stated
        conditions.
      </p>

      <h2
        style={{
          fontSize: "1.25rem",
          marginBottom: "0.5rem",
          marginTop: "1.5rem",
        }}
      >
        2. Core principles
      </h2>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "1.25rem",
          color: "#d1d5db",
          lineHeight: 1.6,
          marginBottom: "1rem",
        }}
      >
        <li>Evidence is captured at the point in time when judgement is exercised.</li>
        <li>Records are complete enough to support independent scrutiny.</li>
        <li>Integrity mechanisms protect against undetected modification.</li>
        <li>Verification is possible without reliance on proprietary systems.</li>
      </ul>

      <h2
        style={{
          fontSize: "1.25rem",
          marginBottom: "0.5rem",
          marginTop: "1.5rem",
        }}
      >
        3. Evidence records
      </h2>
      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
        }}
      >
        Under this framework, an evidence record should, at minimum, capture:
        the time of judgement, the nature of the judgement, the accountable
        role, the relevant context or conditions, and an integrity mechanism
        that enables later verification.
      </p>
    </section>
  );
}

