import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteShell } from "@/components/SiteShell";
import { featuredVillas } from "@/data/villas";
import { VillaRow } from "@/components/VillaRow";
import { StructuredData } from "@/components/StructuredData";
import { HeroParallax } from "@/components/HeroParallax";
import { StorylineSection } from "@/components/StorylineSection";
import { HeroWordSwap } from "@/components/HeroWordSwap";

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
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-tropic">
              A coastal world of calm
            </p>
            <div className="mt-5 h-[1px] w-24 bg-ink/20" />
            <h1 className="text-display mt-6 text-5xl leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              A retreat where{" "}
              <span className="text-tropic">
                <HeroWordSwap />
              </span>{" "}
              feels effortless.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              Joe Shan Retreats curates a collection of beachfront villas in
              Kerala. Expect sea-view mornings, slow dining, and private spaces
              designed for stillness, warmth, and coastal ease.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/villas"
                className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic hover:text-ivory"
              >
                Explore Villas
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-ink/30 bg-ivory/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink hover:bg-ink hover:text-ivory"
              >
                Enquire
              </Link>
            </div>
            <div className="mt-14 grid max-w-md grid-cols-2 gap-6 text-sm text-ink/70 sm:grid-cols-3">
              <div>
                <p className="text-display text-2xl text-ink">2</p>
                <p>Active villas</p>
              </div>
              <div>
                <p className="text-display text-2xl text-ink">5</p>
                <p>Curated retreats</p>
              </div>
              <div>
                <p className="text-display text-2xl text-ink">100m</p>
                <p>Beach walks</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-sunset/25 blur-3xl" />
            <div className="grid gap-4 lg:grid-cols-[0.7fr_0.3fr]">
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
              <div className="hidden flex-col gap-4 lg:flex">
                <div className="relative h-40 overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(12,27,28,0.12)]">
                  <Image
                    src={
                      heroVilla?.gallery[0] ??
                      "https://unsplash.com/photos/pt0nGH-NvoA/download?force=true&w=1200"
                    }
                    alt="Coastal detail"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 14vw, 100vw"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(12,27,28,0.12)]">
                  <Image
                    src={
                      secondaryVilla?.gallery[0] ??
                      "https://unsplash.com/photos/dgTzAvblPw4/download?force=true&w=1200"
                    }
                    alt="Villa detail"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 14vw, 100vw"
                  />
                </div>
              </div>
            </div>
            <div className="glass-panel absolute -bottom-12 left-6 right-6 rounded-2xl p-6 shadow-lg">
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

      <section className="section-pad bg-ink text-ivory">
        <div className="mx-auto w-full max-w-6xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sand">
              Statement
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-5xl">
              A coastal sanctuary built for quiet luxury, not crowds.
            </h2>
            <p className="mt-4 text-base text-ivory/70 sm:text-lg">
              Private villas, warm hosting, and a pace that lets the sea set the
              rhythm.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-tropic">
              Resort highlights
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Beachfront access",
                  text: "Steps from serene shores and quiet coastal walks.",
                },
                {
                  title: "Private stays",
                  text: "Entire villas reserved for you, with personal hosting.",
                },
                {
                  title: "Kerala-first hospitality",
                  text: "Local flavors, rituals, and thoughtful details.",
                },
              ].map((item) => (
                <Reveal key={item.title}>
                  <div className="rounded-[28px] border border-black/5 bg-white/95 p-6 shadow-[0_24px_60px_rgba(12,27,28,0.08)]">
                    <p className="text-display text-2xl text-ink">{item.title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink/70">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-tropic">
              Must-do experiences
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              Signature moments, curated for the coast.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Sunrise veranda",
                text: "Quiet mornings with sea breeze and Kerala coffee.",
              },
              {
                title: "Village strolls",
                text: "Coastal lanes, small markets, and slow discoveries.",
              },
              {
                title: "Seaside suppers",
                text: "Kerala-inspired meals served with warm hospitality.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="rounded-[28px] border border-black/5 bg-white/95 p-6 shadow-[0_24px_60px_rgba(12,27,28,0.08)]">
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

      <section className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Signature promises
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              Quiet luxury, crafted with coastal care.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Private by design",
                text: "Low-density villas with attentive hosts and calm, personal service.",
              },
              {
                title: "Kerala-first experiences",
                text: "Local cuisine, coastal rituals, and stories rooted in place.",
              },
              {
                title: "Effortless stays",
                text: "Thoughtful details, seamless check-ins, and flexible arrangements.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="h-full rounded-[28px] border border-black/5 bg-white/80 p-6">
                  <p className="text-display text-2xl text-ink">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-ink/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
          <div className="mt-12 space-y-12">
            {featuredVillas.map((villa, index) => (
              <Reveal key={villa.id}>
                <VillaRow villa={villa} index={index} />
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
              <HeroParallax>
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
              </HeroParallax>
              <HeroParallax>
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
              </HeroParallax>
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
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="rounded-[32px] border border-black/5 bg-mist px-8 py-10 text-center shadow-[0_30px_80px_rgba(12,27,28,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
                Concierge
              </p>
              <h2 className="text-display mt-4 text-3xl md:text-4xl">
                Tell us your dates. We will curate the perfect villa.
              </h2>
              <p className="mt-4 text-base text-ink/70 sm:text-lg">
                Share your travel window and preferences. Our team will respond
                with the ideal stay and local experiences.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic hover:text-ivory"
                >
                  Start an enquiry
                </Link>
              <Link
                href="/villas"
                className="rounded-full border border-ink/30 bg-ivory/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink hover:bg-ink hover:text-ivory"
              >
                View villas
              </Link>
              </div>
            </div>
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
                className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic hover:text-ivory"
              >
                Start an enquiry
              </Link>
              <Link
                href="/villas"
                className="rounded-full border border-ink/30 bg-ivory/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink hover:bg-ink hover:text-ivory"
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
