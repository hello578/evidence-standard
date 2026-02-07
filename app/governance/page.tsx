
// app/governance/page.tsx

export default function Governance() {
  return (
    <section>
      <h1
        style={{
          fontSize: "1.75rem",
          lineHeight: 1.3,
          marginBottom: "1rem",
        }}
      >
        Governance
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1rem",
        }}
      >
        Standards published under the Evidence Standard are intended to be
        stable, conservative, and versioned deliberately.
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1rem",
        }}
      >
        Changes are documented, versioned, and published transparently.
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
        }}
      >
        The Evidence Standard provides an umbrella framework under which
        individual published standards, such as VES, may be maintained.
      </p>
    </section>
  );
}


