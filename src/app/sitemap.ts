import { MetadataRoute } from "next";
import { villas } from "@/data/villas";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://joeshanretreats.com";

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/villas`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    ...villas.map((villa) => ({
      url: `${base}/villas/${villa.slug}`,
      lastModified: new Date(),
    })),
  ];
}
