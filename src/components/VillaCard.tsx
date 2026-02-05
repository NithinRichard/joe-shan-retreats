import Image from "next/image";
import Link from "next/link";
import { BedDouble, MapPin, Utensils } from "lucide-react";
import type { Villa } from "@/data/villas";

export function VillaCard({ villa }: { villa: Villa }) {
  return (
    <Link
      href={`/villas/${villa.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-[0_30px_80px_rgba(12,27,28,0.08)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_rgba(12,27,28,0.15)]"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={villa.heroImage}
          alt={villa.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 768px) 45vw, 100vw"
        />
      </div>
      <div className="flex h-full flex-col gap-4 px-6 py-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-tropic">
            {villa.status === "active" ? "Now Hosting" : "Upcoming"}
          </p>
          <h3 className="mt-2 text-display text-2xl text-ink">{villa.name}</h3>
          <p className="mt-2 text-sm text-ink/70">{villa.location}</p>
        </div>
        <p className="text-sm leading-6 text-ink/70">{villa.shortDescription}</p>
        <div className="mt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-ink/50">
          {villa.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/10 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 grid gap-2 text-[11px] text-ink/60 sm:text-xs">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4 text-tropic/70" />
            <span>{villa.capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-tropic/70" />
            <span>{villa.location}</span>
          </div>
          {villa.status === "active" && (
            <div className="flex items-center gap-2">
              <Utensils className="h-4 w-4 text-tropic/70" />
              <span>Kerala-style meals on request</span>
            </div>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.25em] text-ink/60">
          <span>{villa.priceRange}</span>
          <span>{villa.status === "active" ? "Live now" : "Coming soon"}</span>
        </div>
      </div>
    </Link>
  );
}
