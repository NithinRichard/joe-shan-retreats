import { SiteShell } from "@/components/SiteShell";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { villas } from "@/data/villas";
import { VillasGallery } from "@/components/VillasGallery";

export const metadata = {
  title: "Villas",
  description: "Explore luxury villas by Joe Shan Retreats in Kerala.",
};

export default function VillasPage() {
  const stats = [
    { label: "Avg. rating", value: "4.9/5" },
    { label: "Beach walks", value: "100-500 m" },
    { label: "Curated villas", value: villas.length.toString() },
  ];

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
              Discover a handpicked collection of coastal villas designed for
              slow mornings, golden light, and Kerala hospitality. Each retreat
              pairs thoughtful interiors with effortless beach access.
            </p>
          </Reveal>
          <Reveal className="mt-10 grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="glass-panel rounded-2xl px-5 py-4 text-sm text-ink/70"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
                  {item.label}
                </p>
                <p className="mt-2 text-display text-2xl text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <VillasGallery villas={villas} />
      </section>

      <section className="section-pad bg-mist">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Kerala lifestyle
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              Coastal rituals, slow dining, and village calm.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              Our villas are designed for unhurried days - sunrise walks, salt air,
              and meals prepared with local warmth. Each stay connects you to
              Kerala coastal rhythm.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic hover:text-ivory"
              >
                Plan a stay
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-ink/30 bg-ivory/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink hover:bg-ink hover:text-ivory"
              >
                Read the story
              </Link>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sunset/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(12,27,28,0.15)]">
              <Image
                src="https://unsplash.com/photos/pt0nGH-NvoA/download?force=true&w=1600"
                alt="Kerala coastline"
                width={860}
                height={640}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-ivory/95 px-6 py-4 backdrop-blur md:hidden">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
              Need help?
            </p>
            <p className="text-sm text-ink">Plan your villa stay</p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ivory"
          >
            Enquire
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
