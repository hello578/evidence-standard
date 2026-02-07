// global.d.ts
declare module "*.css";
declare module "*.module.css";

export {}

declare global {
  interface Window {
    VeriscopicConsent?: {
      reset: () => void
    }
  }
}