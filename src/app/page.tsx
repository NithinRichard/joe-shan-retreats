import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteShell } from "@/components/SiteShell";
import { featuredVillas } from "@/data/villas";
import { VillaCard } from "@/components/VillaCard";
import { StructuredData } from "@/components/StructuredData";
import { HeroParallax } from "@/components/HeroParallax";
import { StorylineSection } from "@/components/StorylineSection";

export default function Home() {
  const heroVilla = featuredVillas[0];
  const secondaryVilla = featuredVillas[1];
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Joe Shan Retreats",
    url: "https://joeshanretreats.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thiruvananthapuram",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  return (
    <SiteShell>
      <StructuredData data={schema} />
      <section className="hero-gradient">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Kerala retreat lifestyle
            </p>
            <div className="mt-4 h-[1px] w-16 bg-ink/20" />
            <h1 className="text-display mt-6 text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
              Discover coastal villas designed for calm, crafted for luxury.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              Joe Shan Retreats curates boutique villas along Kerala most
              tranquil shores. Immerse in sea-view mornings, tropical gardens,
              and restorative slow travel.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/villas"
                className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic"
              >
                Explore Villas
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink"
              >
                Enquire
              </Link>
            </div>
            <div className="mt-12 grid max-w-md grid-cols-2 gap-6 text-sm text-ink/70 sm:grid-cols-3">
              <div>
                <p className="text-display text-2xl text-ink">2</p>
                <p>Active villas</p>
              </div>
              <div>
                <p className="text-display text-2xl text-ink">5</p>
                <p>Curated retreats</p>
              </div>
              <div>
                <p className="text-display text-2xl text-ink">Kerala</p>
                <p>Ocean-side</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-sunset/20 blur-3xl" />
            <HeroParallax>
              <div className="relative overflow-hidden rounded-[32px] shadow-[0_40px_90px_rgba(12,27,28,0.15)]">
                <Image
                  src={
                    heroVilla?.heroImage ??
                    "https://unsplash.com/photos/IQ32MAKKVFI/download?force=true&w=1800"
                  }
                  alt={heroVilla?.name ?? "Tropical Marina"}
                  width={960}
                  height={720}
                  className="h-full w-full object-cover"
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </HeroParallax>
            <div className="glass-panel absolute -bottom-10 left-6 right-6 rounded-2xl p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-tropic">
                Featured villa
              </p>
              <p className="text-display mt-2 text-2xl">Tropical Marina</p>
              <p className="mt-2 text-sm text-ink/70">
                Puthenthope Beach, Thiruvananthapuram
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <StorylineSection />

      <section className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Signature stays
            </p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-display text-3xl md:text-4xl">
                Villas crafted for quiet luxury
              </h2>
              <Link
                href="/villas"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60 transition hover:text-ink"
              >
                View all
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {featuredVillas.map((villa) => (
              <Reveal key={villa.id}>
                <VillaCard villa={villa} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              The experience
            </p>
            <h2 className="text-display text-3xl md:text-5xl">
              A slower rhythm in Kerala most intimate coastal villages.
            </h2>
            <p className="text-lg leading-8 text-ink/70">
              Our retreats are designed for long breakfasts, evening sea walks,
              and personal hospitality. Expect gentle service, curated local
              cuisine, and peaceful spaces where nature does the storytelling.
            </p>
            <div className="grid gap-4 text-sm text-ink/70 md:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
                <p className="text-display text-xl text-ink">Flexible stays</p>
                <p className="mt-2">
                  Thoughtfully planned for couples, families, and solo travellers.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
                <p className="text-display text-xl text-ink">Curated dining</p>
                <p className="mt-2">
                  Kerala-style meals on request, served with seaside warmth.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-tropic/20 blur-3xl" />
            <div className="grid gap-6 md:grid-cols-2">
              <Image
                src={
                  secondaryVilla?.gallery[1] ??
                  "https://unsplash.com/photos/dgTzAvblPw4/download?force=true&w=1400"
                }
                alt="Garden courtyard"
                width={520}
                height={640}
                className="h-full w-full rounded-[28px] object-cover"
                sizes="(min-width: 1024px) 24vw, 100vw"
              />
              <Image
                src={
                  heroVilla?.gallery[1] ??
                  "https://unsplash.com/photos/pt0nGH-NvoA/download?force=true&w=1400"
                }
                alt="Coastal retreat"
                width={520}
                height={640}
                className="h-full w-full rounded-[28px] object-cover"
                sizes="(min-width: 1024px) 24vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Press & praise
            </p>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {[
                "A coastal retreat of rare calm and quiet elegance.",
                "Every detail feels curated for slow, restorative travel.",
                "Boutique hospitality that feels personal and cinematic.",
              ].map((quote) => (
                <div
                  key={quote}
                  className="rounded-[28px] border border-black/5 bg-white/80 p-6 text-sm leading-6 text-ink/70"
                >
                  {quote}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Kerala lifestyle
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              From sunrise dips to salt-kissed evenings.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Coastal rituals",
                text: "Early walks along Puthenthope soft sands and evening chai by the shore.",
              },
              {
                title: "Local flavours",
                text: "Kerala spices, fresh seafood, and slow-cooked traditional meals.",
              },
              {
                title: "Private calm",
                text: "Low-density retreats with quiet courtyards and open air living.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="h-full rounded-[28px] border border-black/5 bg-white/70 p-6">
                  <p className="text-display text-2xl text-ink">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-ink/70">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-ivory">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sand">
              Guest stories
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              A stay that felt like a private seaside sanctuary.
            </h2>
            <p className="mt-4 text-sm text-ivory/70">
              - Recent guests, Tropical Marina
            </p>
            <div className="mt-10 grid gap-4 text-sm text-ivory/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                Calm coastal village, attentive hosts, and the best sunrise view.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                Spacious villa with everything our family needed for a slow week.
              </div>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sand/20 blur-3xl" />
            <Image
              src={
                secondaryVilla?.heroImage ??
                "https://unsplash.com/photos/6OKmxpQfgwk/download?force=true&w=1800"
              }
              alt={secondaryVilla?.name ?? "Tropical Villa"}
              width={520}
              height={680}
              className="h-full w-full rounded-[32px] object-cover"
              sizes="(min-width: 1024px) 28vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-5xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Plan your retreat
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              Let us craft your next Kerala escape.
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Share your travel dates and preferences - our team will curate the
              ideal villa and experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic"
              >
                Start an enquiry
              </Link>
              <Link
                href="/villas"
                className="rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink"
              >
                Browse villas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
