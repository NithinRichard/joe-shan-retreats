import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section-pad">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
            Page not found
          </p>
          <h1 className="text-display mt-4 text-4xl">This retreat is off the map.</h1>
          <p className="mt-4 text-lg text-ink/70">
            Let us guide you back to the villas and experiences.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/villas"
              className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic"
            >
              Browse villas
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
