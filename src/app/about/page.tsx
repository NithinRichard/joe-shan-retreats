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
              A boutique retreat house rooted in Kerala coastal calm.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              Joe Shan Retreats Limited Liability Partnership is a luxury retreat
              curator based in Thiruvananthapuram, Kerala. We create intimate
              stays that blend refined hospitality with the regional slow coastal
              rhythm - ideal for couples, families, and solo travellers seeking
              restorative experiences.
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
              text: "Personal service and experiences tuned to each guest rhythm.",
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
              We are a newly formed LLP registered under ROC Ernakulam, built on
              the belief that luxury is calm, personal, and rooted in place. Each
              retreat tells the story of Kerala shorelines and tranquil villages.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
