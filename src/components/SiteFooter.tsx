import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-ivory">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-display text-xl text-ink">Joe Shan Retreats</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-ink/70">
            Luxury boutique retreats in Kerala. Thoughtfully curated villas, slow
            coastal living, and intimate experiences rooted in nature.
          </p>
        </div>
        <div className="text-sm text-ink/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/villas">Villas</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-ink/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
            Connect
          </p>
          <ul className="mt-4 space-y-2">
            <li>hello@joeshanretreats.com</li>
            <li>+91 98765 43210</li>
            <li>Thiruvananthapuram, Kerala</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-xs uppercase tracking-[0.3em] text-ink/50">
        (c) 2026 Joe Shan Retreats LLP
      </div>
    </footer>
  );
}
