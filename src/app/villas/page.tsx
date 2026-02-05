import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { villas } from "@/data/villas";
import { VillaCard } from "@/components/VillaCard";

export const metadata = {
  title: "Villas",
  description: "Explore luxury villas by Joe Shan Retreats in Kerala.",
};

export default function VillasPage() {
  return (
    <SiteShell>
      <section className="hero-gradient">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Villa portfolio
            </p>
            <h1 className="text-display mt-4 text-4xl sm:text-5xl md:text-6xl">
              Explore every Joe Shan retreat.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-ink/70 sm:text-lg">
              From beachside homestays to upcoming forest-edge villas, each stay
              is curated to deliver quiet luxury and Kerala coastal calm.
            </p>
          </Reveal>
          <Reveal className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Location: Kerala coastline",
              "Capacity: Couples to families",
              "Amenities: Coastal dining, gardens, sea views",
            ].map((item) => (
              <div
                key={item}
                className="glass-panel rounded-2xl px-5 py-4 text-sm text-ink/70"
              >
                {item}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Reveal>
              <h2 className="text-display text-3xl">All villas</h2>
              <p className="mt-2 text-sm text-ink/70">
                Live stays and upcoming retreats.
              </p>
            </Reveal>
            <Reveal className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-ink/60">
              <span className="rounded-full border border-ink/20 px-4 py-2">
                All
              </span>
              <span className="rounded-full border border-ink/10 px-4 py-2">
                Beachfront
              </span>
              <span className="rounded-full border border-ink/10 px-4 py-2">
                Garden
              </span>
              <span className="rounded-full border border-ink/10 px-4 py-2">
                Upcoming
              </span>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {villas.map((villa) => (
              <Reveal key={villa.id}>
                <VillaCard villa={villa} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
