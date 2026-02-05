import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Contact",
  description: "Enquire and book a Joe Shan Retreats villa.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="hero-gradient">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-tropic">
              Contact & booking
            </p>
            <h1 className="text-display mt-4 text-4xl sm:text-5xl md:text-6xl">
              Plan your Kerala retreat.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-ink/70 sm:text-lg">
              Tell us your travel dates, villa preferences, and guest count.
              We will curate the perfect stay and respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form className="grid gap-4 rounded-[32px] border border-black/5 bg-white/80 p-8 shadow-[0_30px_80px_rgba(12,27,28,0.08)]">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-ink/60">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-ink/60">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-ink/60">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-ink/60">
                    Guests
                  </label>
                  <input
                    type="number"
                    placeholder="2"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-ink/60">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you are dreaming of..."
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ivory transition hover:bg-tropic hover:text-ivory"
              >
                Submit enquiry
              </button>
            </form>
          </Reveal>
          <Reveal className="space-y-6">
            <div className="rounded-[28px] border border-black/5 bg-white/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-tropic">
                Reach us
              </p>
              <p className="text-display mt-3 text-2xl">Personal concierge</p>
              <p className="mt-3 text-sm text-ink/70">
                hello@joeshanretreats.com
                <br />
                +91 98765 43210
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="https://wa.me/919876543210"
                  className="rounded-full border border-ink/30 bg-ivory/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:bg-ink hover:text-ivory"
                >
                  WhatsApp
                </Link>
                <Link
                  href="mailto:hello@joeshanretreats.com"
                  className="rounded-full border border-ink/30 bg-ivory/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:bg-ink hover:text-ivory"
                >
                  Email
                </Link>
              </div>
            </div>
            <div className="rounded-[28px] border border-black/5 bg-white/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-tropic">
                Registered office
              </p>
              <p className="mt-3 text-sm text-ink/70">
                Jayan Mandiram, Thiruvananthapuram District
                <br />
                Kerala, India
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-ink/50">
                ROC Ernakulam | LLP
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
