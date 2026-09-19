"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { personal, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const GITHUB_USERNAME = "Karthik00769";

function FallbackImage({ src, fallbackSrc, alt, width, height, className }: any) {
  const [error, setError] = useState(false);

  if (error && !fallbackSrc) {
    return (
      <div 
        className={cn("flex items-center justify-center rounded-lg border border-ink-100 bg-ink-50 text-sm text-ink-500", className)} 
        style={{ minHeight: height }}
      >
        Unable to load {alt.toLowerCase()}
      </div>
    );
  }

  return (
    <Image
      src={error && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      className={className}
      onError={() => setError(true)}
    />
  );
}

export function GithubSection() {
  return (
    <section id="github" className="border-b border-ink-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="08 — Open Source"
          title="Open, in progress, in public."
          description="A live look at recent activity — pulled directly from GitHub."
        />

        <div className="space-y-6">
          <Card className="overflow-hidden p-6 md:p-8">
            <h3 className="mb-4 text-sm font-medium text-ink-950">Contribution activity</h3>
            <div className="overflow-x-auto">
              <FallbackImage
                src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
                alt="GitHub contribution graph"
                width={1000}
                height={200}
                className="min-w-[720px] w-full"
              />
            </div>
          </Card>

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
