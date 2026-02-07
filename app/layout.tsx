// app/layout.tsx
// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Evidence Standard",
    template: "%s | The Evidence Standard",
  },
  description:
    "The Evidence Standard is a stable framework for defining how evidence of judgement and decision-making may be recorded and verified.",
  metadataBase: new URL("https://www.evidencestandard.org"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#0b1120",
          color: "#e5e7eb",
          fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "2.5rem 1.25rem 3rem",
          }}
        >
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
            {/* Veriscopic Consent Evidence — single source of truth */}
            </div>
        <script
          src="https://www.veriscopic.com/consent-client.js"
          data-veriscopic-site="7cfda647-ceb2-4737-a5c1-8166ae0fa3a6"
          defer
        ></script>
      </body>
    </html>
  );
}
