"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, personal } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-ink-100" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-ink-950">
          {personal.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
          <span className="text-accent-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-500 transition-colors hover:text-ink-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={personal.links.resume}
            download="Karthik_Nair_Resume.pdf"
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
          >
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-ink-950 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink-100 bg-white md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-ink-600 hover:bg-ink-50 hover:text-ink-950"
              >
                {item.label}
              </a>
            ))}
            <a
              href={personal.links.resume}
              download="Karthik_Nair_Resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-ink-200 px-2 py-2.5 text-center text-sm font-medium text-ink-950"
            >
              Download Résumé
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
