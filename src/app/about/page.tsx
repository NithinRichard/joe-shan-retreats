import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "About",
  description: "The story behind Joe Shan Retreats LLP in Kerala.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="hero-gradient">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-24 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              About Joe Shan Retreats
            </p>
            <h1 className="text-display mt-4 text-4xl sm:text-5xl md:text-6xl">
              A boutique retreat house shaped by Kerala light, sea, and slow living.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              Joe Shan Retreats Limited Liability Partnership is based in
              Thiruvananthapuram, Kerala. We curate intimate villas where quiet
              hospitality meets coastal ease - designed for couples, families,
              and small groups seeking restorative escapes by the Arabian Sea.
            </p>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_40px_90px_rgba(12,27,28,0.15)]">
              <Image
                src="https://unsplash.com/photos/zNAM7ORGV-g/download?force=true&w=1800"
                alt="Kerala coastal retreat"
                width={960}
                height={760}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-3">
          {[
            {
              title: "Luxury minimalism",
              text: "Minimal yet warm spaces designed for deep rest and immersive stays.",
            },
            {
              title: "Slow travel",
              text: "Stays that encourage unhurried mornings, mindful dining, and local exploration.",
            },
            {
              title: "Curated hospitality",
              text: "Personal service and experiences tuned to each guest pace.",
            },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="h-full rounded-[28px] border border-black/5 bg-white/70 p-6">
                <p className="text-display text-2xl text-ink">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="mx-auto w-full max-w-5xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Our philosophy
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              A new chapter in Kerala hospitality.
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Registered under ROC Ernakulam, we believe luxury is calm, personal,
              and rooted in place. Each retreat is shaped by Kerala shorelines,
              village rhythms, and the small details that let guests truly slow
              down.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Founder note
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              Hospitality that feels like home, elevated by the sea.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              Joe Shan Retreats began with a simple belief: the best stays are
              the ones that slow you down. Our team curates intimate spaces,
              handpicks local experiences, and prioritizes calm over crowds. From
              sunrise balconies to quiet dinners, every detail is designed to
              feel personal and effortless.
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-[28px] border border-black/5 bg-white/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
                Values
              </p>
              <div className="mt-4 grid gap-4 text-sm text-ink/70">
                {[
                  "Thoughtful, low-density retreats",
                  "Kerala-first design and local craft",
                  "Slow dining and coastal rituals",
                  "Privacy, warmth, and quiet luxury",
                ].map((value) => (
                  <div
                    key={value}
                    className="rounded-2xl border border-black/5 bg-white/80 px-4 py-3"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Timeline
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              A quiet journey shaped by Kerala.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                year: "2024",
                title: "Roots in Puthenthope",
                text: "Curated the first coastal stays and refined our signature hospitality.",
              },
              {
                year: "2025",
                title: "Villa portfolio",
                text: "Expanded to multiple boutique villas across Kerala's coastline.",
              },
              {
                year: "2026",
                title: "Slow travel focus",
                text: "Deepened experiences around local food, art, and community.",
              },
            ].map((item) => (
              <Reveal key={item.year}>
                <div className="rounded-[28px] border border-black/5 bg-white/80 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                    {item.year}
                  </p>
                  <p className="text-display mt-2 text-2xl text-ink">
                    {item.title}
                  </p>
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
              Press mentions
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                "Aman Magazine - Kerala's quietest coastal stays.",
                "Condé Nast Traveller - Boutique villas with soul.",
                "Architectural Digest - Minimal coastal design in Kerala.",
              ].map((press) => (
                <div
                  key={press}
                  className="rounded-[28px] border border-black/5 bg-white/80 p-6 text-sm text-ink/70"
                >
                  {press}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
