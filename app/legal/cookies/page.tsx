
// app/legal/cookies/page.tsx

export default function Cookies() {
  return (
    <section>
      <h1
        style={{
          fontSize: "1.75rem",
          lineHeight: 1.3,
          marginBottom: "1rem",
        }}
      >
        Cookies
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1rem",
        }}
      >
        This site is designed to operate with a minimal and transparent use of
        cookies. Where cookies are used, they are limited to those that are
        strictly necessary for basic operation and security.
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
          marginBottom: "1rem",
        }}
      >
        Veriscopic provides evidence-grade consent and cookie governance
        tooling. Where such tooling is deployed alongside this site, it will
        clearly present choices and record consent in a verifiable way.
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#d1d5db",
        }}
      >
        For more detailed information about the Veriscopic approach to cookies
        and consent, please refer to the materials available at{" "}
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
