"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const measurementId = "G-L9DM5ZJEFC";
const consentStorageKey = "evidence-standard-analytics-consent";
type AnalyticsConsent = "granted" | "denied" | "pending";

function getConsent(): AnalyticsConsent { if (typeof window === "undefined") return "pending"; const value = window.localStorage.getItem(consentStorageKey); return value === "granted" || value === "denied" ? value : "pending"; }
function subscribe(onChange: () => void) { window.addEventListener("evidence-standard-analytics-consent-change", onChange); return () => window.removeEventListener("evidence-standard-analytics-consent-change", onChange); }

export function GoogleAnalytics() {
  const consent = useSyncExternalStore(subscribe, getConsent, () => "pending");
  const choose = (value: Exclude<AnalyticsConsent, "pending">) => { window.localStorage.setItem(consentStorageKey, value); window.dispatchEvent(new Event("evidence-standard-analytics-consent-change")); };
  if (process.env.NODE_ENV !== "production" || consent === "denied") return null;
  if (consent === "granted") return <><Script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}');`}</Script></>;
  return <aside className="analytics-consent" aria-label="Analytics preference"><div><strong>Help improve this resource</strong><p>With your permission, we use optional analytics to understand which public standards pages are useful. We do not collect evidence packages or account data.</p></div><div className="analytics-consent-actions"><button type="button" className="button button-secondary" onClick={() => choose("denied")}>Decline</button><button type="button" className="button button-primary" onClick={() => choose("granted")}>Allow analytics</button></div></aside>;
}
