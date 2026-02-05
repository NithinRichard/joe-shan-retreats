import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bath, BedDouble, MapPin, Users } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { getVillaBySlug, villas } from "@/data/villas";
import { StructuredData } from "@/components/StructuredData";

export function generateStaticParams() {
  return villas.map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);

  if (!villa) {
    return { title: "Villa" };
  }

  return {
    title: villa.name,
    description: villa.shortDescription,
    openGraph: {
      title: villa.name,
      description: villa.shortDescription,
      images: [{ url: villa.heroImage }],
    },
  };
}

export default async function VillaDetailPage({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);

  if (!villa) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: villa.name,
    description: villa.shortDescription,
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
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-24 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              {villa.status === "active" ? "Now hosting" : "Upcoming"}
            </p>
            <h1 className="text-display mt-4 text-4xl sm:text-5xl md:text-6xl">
              {villa.name}
            </h1>
            <p className="mt-4 text-base text-ink/70 sm:text-lg">{villa.location}</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              {villa.longDescription}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-ink/60">
              <span className="rounded-full border border-ink/20 px-4 py-2">
                {villa.capacity}
              </span>
              <span className="rounded-full border border-ink/20 px-4 py-2">
                {villa.priceRange}
              </span>
              <span className="rounded-full border border-ink/20 px-4 py-2">
                Kerala
              </span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic"
              >
                Enquire now
              </Link>
              <a
                href={villa.googleMapLink}
                className="rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink"
                target="_blank"
                rel="noreferrer"
              >
                View map
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_40px_90px_rgba(12,27,28,0.15)]">
              <Image
                src={villa.heroImage}
                alt={villa.name}
                width={980}
                height={760}
                className="h-full w-full object-cover"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: BedDouble, label: villa.bedrooms },
              { icon: Bath, label: villa.bathrooms },
              { icon: Users, label: villa.capacity },
              { icon: MapPin, label: villa.distanceToBeach },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-black/5 bg-white/70 p-5 text-sm text-ink/70"
              >
                <item.icon className="h-5 w-5 text-tropic" />
                <p className="mt-3 text-display text-lg text-ink">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[0.62fr_0.38fr]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="text-display text-3xl">Overview</h2>
              <p className="mt-4 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
                {villa.longDescription}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-display text-3xl">Rooms & layout</h2>
              <ul className="mt-6 grid gap-3 text-sm text-ink/70">
                {villa.layout.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-display text-3xl">Amenities</h2>
              <ul className="mt-6 grid gap-3 text-sm text-ink/70">
                {villa.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-display text-3xl">Location highlights</h2>
              <ul className="mt-6 grid gap-3 text-sm text-ink/70">
                {villa.locationHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-display text-3xl">Nearby attractions</h2>
              <ul className="mt-6 grid gap-3 text-sm text-ink/70">
                {villa.nearbyAttractions.map((attraction) => (
                  <li
                    key={attraction}
                    className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3"
                  >
                    {attraction}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-display text-3xl">House rules</h2>
              <ul className="mt-6 grid gap-3 text-sm text-ink/70">
                {villa.houseRules.map((rule) => (
                  <li
                    key={rule}
                    className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-display text-3xl">Gallery</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {villa.gallery.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    alt={villa.name}
                    width={520}
                    height={420}
                    className="h-full w-full rounded-[28px] object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="rounded-[28px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_rgba(12,27,28,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-tropic">
                  Booking
                </p>
                <p className="text-display mt-3 text-2xl">{villa.priceRange}</p>
                <p className="mt-3 text-sm text-ink/70">{villa.capacity}</p>
                <div className="mt-6 grid gap-3 text-xs uppercase tracking-[0.3em] text-ink/60">
                  <div className="flex items-center justify-between">
                    <span>Check-in</span>
                    <span>{villa.checkIn}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Check-out</span>
                    <span>{villa.checkOut}</span>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-ink px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic"
                  >
                    Enquire now
                  </Link>
                  <a
                    href={villa.googleMapLink}
                    className="rounded-full border border-ink/20 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View map
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white/70">
                <iframe
                  title={`${villa.name} map`}
                  src={villa.mapEmbed}
                  className="h-72 w-full border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="mx-auto w-full max-w-5xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Availability & booking
            </p>
            <h2 className="text-display mt-4 text-3xl md:text-4xl">
              Tailor your stay at {villa.name}.
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Share your preferred dates and special requests. Our team will
              craft the perfect retreat experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic"
              >
                Request availability
              </Link>
              <Link
                href="/villas"
                className="rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-ink"
              >
                Back to villas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
