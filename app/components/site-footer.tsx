// app/components/site-footer.tsx


export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1f2937",
        marginTop: "3rem",
        paddingTop: "1.5rem",
        fontSize: "0.85rem",
        color: "#6b7280",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: "0.75rem",
        columnGap: "1.5rem",
      }}
    >
      <div>
        Stewarded by{" "}
        <a
          href="https://veriscopic.com"
          style={{ color: "#9ca3af" }}
          target="_blank"
          rel="noreferrer"
        >
          Veriscopic
        </a>
      </div>

      <div>
        Published standard:{" "}
        <a
          href="https://vesstandard.org"
          style={{ color: "#9ca3af" }}
          target="_blank"
          rel="noreferrer"
        >
          Veriscopic Evidence Standard (VES)
        </a>
      </div>

      <div
        style={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      >
        <a
          href="/legal/privacy"
          style={{
            color: "#9ca3af",
            marginRight: "1rem",
            textDecoration: "none",
          }}
        >
          Privacy
        </a>
        <a
          href="/legal/terms"
          style={{
            color: "#9ca3af",
            marginRight: "1rem",
            textDecoration: "none",
          }}
        >
          Terms
        </a>
        <a
          href="/legal/cookies"
          style={{
            color: "#9ca3af",
            textDecoration: "none",
          }}
        >
          Cookies
        </a>
      </div>
    </footer>
  );
}
