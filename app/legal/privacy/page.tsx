
// app/legal/privacy/page.tsx

export default function Privacy() {
  return (
    <section>
      <h1
        style={{
          fontSize: "1.75rem",
          lineHeight: 1.3,
          marginBottom: "1rem",
        }}
      >
        Privacy
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1rem",
        }}
      >
        The Evidence Standard is a published framework stewarded by Veriscopic.
        This site is operated to provide information about the framework
        and related standards.
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1rem",
        }}
      >
        This site does not require account registration and is not intended to
        collect unnecessary personal data. Operational logs and basic
        analytics, where used, are processed in accordance with Veriscopic
        governance and data protection practices.
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
        }}
      >
        For further information about how Veriscopic processes personal data,
        please refer to the privacy information available at{" "}
        <a
          href="https://www.veriscopic.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#93c5fd" }}
        >
          veriscopic.com
        </a>
        .
      </p>
    </section>
  );
}
