
// app/page.tsx

export default function Home() {
  return (
    <section>
      <h1
        style={{
          fontSize: "2rem",
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}
      >
        The Evidence Standard
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1rem",
        }}
      >
        The Evidence Standard is a published framework for defining how evidence
        of judgement and decision-making may be captured and verified at the
        moment it is exercised.
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "2rem",
        }}
      >
        It establishes shared principles intended to support audit, regulatory,
        insurance, and governance scrutiny.
      </p>

      <h2
        style={{
          fontSize: "1.25rem",
          marginBottom: "0.75rem",
          marginTop: "1.5rem",
        }}
      >
        Published standards
      </h2>

      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "1.25rem",
          color: "#d1d5db",
          lineHeight: 1.6,
        }}
      >
        <li>
          <a
            href="https://vesstandard.org"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#93c5fd" }}
          >
            Veriscopic Evidence Standard (VES)
          </a>
        </li>
      </ul>
    </section>
  );
}


