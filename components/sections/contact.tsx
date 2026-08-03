import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "LinkedIn", value: "in/karthik-nair", href: personal.links.linkedin, icon: Linkedin },
  { label: "GitHub", value: "@Karthik00769", href: personal.links.github, icon: Github },
  {
    label: "Devfolio",
    value: "@Karthik1610",
    href: personal.links.devfolio,
    icon: ArrowUpRight,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs tracking-wider text-accent-500">
              08 — Contact
            </span>
            <h2 className="mt-4 text-display-md font-semibold text-ink-950">
              Let&apos;s build something.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Open to Master&apos;s admissions conversations, internships, and
              engineering roles. Reach out directly — I read everything myself.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${personal.email}`}
                className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
              >
                <Mail size={16} />
                {personal.email}
              </a>
              <a
                href={personal.links.resume}
                download="Karthik_Nair_Resume.pdf"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 grid max-w-2xl gap-4 sm:grid-cols-2">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="group flex items-center justify-between rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-ink-300"
              >
                <span className="flex items-center gap-3">
                  <Icon size={16} className="text-ink-400" />
                  <span>
                    <span className="block text-xs text-ink-400">{label}</span>
                    <span className="block text-sm font-medium text-ink-950">{value}</span>
                  </span>
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-ink-300 transition-colors group-hover:text-accent-500"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
