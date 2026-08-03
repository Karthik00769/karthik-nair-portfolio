"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { personal } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-ink-100 pt-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-fade bg-grid opacity-70"
      />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left"
          >


            <h1 className="max-w-3xl text-display-lg font-semibold tracking-tight text-ink-950">
              {personal.name}
            </h1>

            <p className="mt-5 max-w-xl font-mono text-sm text-accent-600 md:text-base">
              {personal.tagline}
            </p>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-500 md:text-base">
              {personal.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="#projects" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
                View Projects
                <ArrowUpRight size={16} />
              </a>
              <a
                href={personal.links.resume}
                download="Karthik_Nair_Resume.pdf"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                Download Resume
              </a>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "px-3")}
              >
                <Github size={18} />
              </a>
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "px-3")}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-accent-100 bg-accent-50/50" />
              <Image
                src={personal.profileImage}
                alt={personal.name}
                width={360}
                height={450}
                priority
                className="relative z-10 aspect-[4/5] w-[240px] rounded-2xl border border-ink-200 object-cover shadow-[0_4px_20px_-4px_rgba(10,10,11,0.1)] lg:w-[360px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
