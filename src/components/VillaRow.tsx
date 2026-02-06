"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Villa } from "@/data/villas";

export function VillaRow({
  villa,
  index,
}: {
  villa: Villa;
  index: number;
}) {
  const isReversed = index % 2 !== 0;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid gap-10 items-center lg:grid-cols-[1.2fr_0.8fr] ${
        isReversed ? "lg:[&>div]:order-2" : ""
      }`}
    >
      <motion.div
        style={{ y, scale }}
        className="relative overflow-hidden rounded-[36px] shadow-[0_40px_90px_rgba(12,27,28,0.16)]"
      >
        <Image
          src={villa.heroImage}
          alt={villa.name}
          width={980}
          height={720}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </motion.div>
      <div className={isReversed ? "lg:order-1" : ""}>
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-tropic">
          {villa.status === "active" ? "Now hosting" : "Upcoming"}
        </p>
        <h3 className="text-display mt-4 text-4xl md:text-5xl">
          {villa.name}
        </h3>
        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-ink/50">
          {villa.location}
        </p>
        <p className="mt-6 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
          {villa.shortDescription}
        </p>
        <div className="mt-8 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.25em] text-ink/50">
          {villa.tags?.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full border border-ink/10 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-ink/60">
          <span className="rounded-full border border-ink/20 px-4 py-2">
            {villa.capacity}
          </span>
          <span className="rounded-full border border-ink/20 px-4 py-2">
            {villa.distanceToBeach}
          </span>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={`/villas/${villa.slug}`}
            className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic hover:text-ivory"
          >
            View villa
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-ink/30 bg-ivory/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink hover:bg-ink hover:text-ivory"
          >
            Enquire
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
