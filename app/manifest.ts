// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Evidence Standard",
    short_name: "Evidence Standard",
    description:
      "A category resource for evidence standards and consequential decisions.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#f7f9f7",
    theme_color: "#084c4b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
