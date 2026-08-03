import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { personal, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const GITHUB_USERNAME = "Karthik00769";

export function GithubSection() {
  return (
    <section id="github" className="border-b border-ink-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="07 — GitHub"
          title="Open, in progress, in public."
          description="A live look at recent activity — pulled directly from GitHub."
        />

        <div className="space-y-6">
          <Card className="overflow-hidden p-6 md:p-8">
            <h3 className="mb-4 text-sm font-medium text-ink-950">Contribution activity</h3>
            <div className="overflow-x-auto">
              <Image
                src={`https://ghchart.rshah.org/2563EB/${GITHUB_USERNAME}`}
                alt={`${personal.name}'s GitHub contribution graph`}
                width={1000}
                height={200}
                unoptimized
                className="min-w-[720px] w-full"
              />
            </div>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="p-6 md:p-8">
                <h3 className="mb-4 text-sm font-medium text-ink-950">Stats</h3>
                <Image
                  src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&bg_color=ffffff&title_color=2563EB&icon_color=2563EB&text_color=48484F`}
                  alt="GitHub stats"
                  width={495}
                  height={195}
                  unoptimized
                  className="w-full"
                />
              </Card>
            </Reveal>

            <Reveal delay={0.05}>
              <Card className="p-6 md:p-8">
                <h3 className="mb-4 text-sm font-medium text-ink-950">Most used languages</h3>
                <Image
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&bg_color=ffffff&title_color=2563EB&text_color=48484F`}
                  alt="Most used languages"
                  width={495}
                  height={195}
                  unoptimized
                  className="w-full"
                />
              </Card>
            </Reveal>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-ink-950">Pinned repositories</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.slug}
                  href={project.github ?? personal.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-ink-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-ink-950">{project.name}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-ink-300 transition-colors group-hover:text-accent-500"
                    />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink-500">
                    {project.tagline}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <a
            href={personal.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(buttonVariants({ variant: "secondary", size: "md" }))}
          >
            View full profile on GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
