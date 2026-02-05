"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Villas", href: "/villas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const scrollStart = useRef(0);
  const lastToggleAt = useRef(0);

  useEffect(() => {
    if (!open) return;
    scrollStart.current = window.scrollY;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    const onScroll = () => {
      if (Date.now() - lastToggleAt.current < 350) {
        return;
      }
      if (Math.abs(window.scrollY - scrollStart.current) > 8) {
        setOpen(false);
      }
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (headerRef.current && target && !headerRef.current.contains(target)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-black/5 bg-ivory/80 backdrop-blur"
    >
      <div className="relative z-50 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide text-ink">
          <span className="text-display">Joe Shan Retreats</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-ink/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-ink/30 bg-ivory/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink transition hover:border-ink hover:bg-ink hover:text-ivory md:inline-flex"
          >
            Book / Enquire
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition hover:border-ink md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => {
              lastToggleAt.current = Date.now();
              setOpen((prev) => !prev);
            }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div
        className={`relative z-40 overflow-hidden border-t border-black/5 bg-ivory/95 shadow-[0_30px_60px_rgba(12,27,28,0.08)] transition-all duration-300 md:hidden ${
          open ? "max-h-[280px]" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.25em] text-ink/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-ivory"
            onClick={() => setOpen(false)}
          >
            Book / Enquire
          </Link>
        </div>
      </div>
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-[72px] z-30 bg-ink/10 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </header>
  );
}
