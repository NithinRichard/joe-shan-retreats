"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { VillaCard } from "@/components/VillaCard";
import type { Villa } from "@/data/villas";

const filters = ["All", "Beachfront", "Family", "Pool", "Upcoming"];

const normalizeFilter = (value: string | null) => {
  if (!value) return "All";
  const match = filters.find(
    (filter) => filter.toLowerCase() === value.toLowerCase()
  );
  return match ?? "All";
};

export function VillasGallery({ villas }: { villas: Villa[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = normalizeFilter(searchParams.get("filter"));

  const filtered = useMemo(() => {
    if (active === "All") return villas;
    if (active === "Upcoming") {
      return villas.filter((villa) => villa.status === "upcoming");
    }
    return villas.filter((villa) => villa.tags?.includes(active));
  }, [active, villas]);

  const setFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    if (filter === "All") {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Reveal>
          <h2 className="text-display text-3xl">All villas</h2>
          <p className="mt-2 text-sm text-ink/70">
            Live stays and upcoming retreats.
          </p>
        </Reveal>
        <Reveal className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-ink/60">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setFilter(filter)}
              className={`rounded-full px-4 py-2 transition ${
                active === filter
                  ? "border border-ink/20 bg-ink/5 text-ink"
                  : "border border-ink/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </Reveal>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {filtered.map((villa) => (
          <Reveal key={villa.id}>
            <VillaCard villa={villa} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
