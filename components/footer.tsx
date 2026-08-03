import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink-400">
          © {new Date().getFullYear()} {personal.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="text-xs text-ink-400">{personal.location}</p>
      </div>
    </footer>
  );
}
