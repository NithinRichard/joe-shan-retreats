"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";

const chapters = [
  {
    number: "01",
    title: "Arrival",
    text: "The sea air, soft light, and a welcome that slows time.",
    image: "https://unsplash.com/photos/IQ32MAKKVFI/download?force=true&w=1600",
  },
  {
    number: "02",
    title: "Stay",
    text: "Morning rituals, curated dining, and stillness across the day.",
    image: "https://unsplash.com/photos/dgTzAvblPw4/download?force=true&w=1600",
  },
  {
    number: "03",
    title: "Departure",
    text: "A last horizon view - leaving rested, grounded, and inspired.",
    image: "https://unsplash.com/photos/pt0nGH-NvoA/download?force=true&w=1600",
  },
];

function StoryCard({
  chapter,
}: {
  chapter: { number: string; title: string; text: string; image: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <Reveal>
      <div
        ref={ref}
        className="overflow-hidden rounded-[32px] border border-black/5 bg-white/80 shadow-[0_30px_80px_rgba(12,27,28,0.08)]"
      >
        <motion.div style={{ y }} className="relative h-64 w-full">
          <Image
            src={chapter.image}
            alt={chapter.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </motion.div>
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
            Chapter {chapter.number}
          </p>
          <p className="text-display text-2xl text-ink">{chapter.title}</p>
          <p className="mt-3 text-sm leading-6 text-ink/70">{chapter.text}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function StorylineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-pad" ref={sectionRef}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Storyline
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              Three cinematic chapters of your Kerala retreat.
            </h2>
            <p className="mt-4 text-sm leading-6 text-ink/70">
              Each stay unfolds like a film. Scroll to reveal the quiet rituals,
              curated moments, and ocean-side calm that define Joe Shan Retreats.
            </p>
            <div className="mt-10 grid gap-6 text-xs uppercase tracking-[0.3em] text-ink/60">
              {chapters.map((chapter) => (
                <div key={chapter.title} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 text-[10px] font-semibold text-ink/70">
                    {chapter.number}
                  </span>
                  <span>{chapter.title}</span>
                </div>
              ))}
              <div className="mt-2 h-[2px] w-24 rounded-full bg-ink/10">
                <motion.div
                  className="h-[2px] rounded-full bg-tropic"
                  style={{ width: progress }}
                />
              </div>
            </div>
          </Reveal>
          <div className="space-y-8">
            {chapters.map((chapter) => (
              <StoryCard key={chapter.title} chapter={chapter} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
