// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Evidence Standard",
    short_name: "Evidence Standard",
    description:
      "A stable framework for defining how evidence of judgement and decision-making may be recorded and verified.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#0b1120",
    theme_color: "#0b1120",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
