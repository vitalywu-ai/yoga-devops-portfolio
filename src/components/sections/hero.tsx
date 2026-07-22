"use client";

import { motion } from "framer-motion";
import { ArrowDown, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const roles = [
  "Junior DevOps Engineer",
  "AI Vibe Coder",
  "Yoga Practitioner",
] as const;

function BreathingOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden section-padding">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0">
        <BreathingOrb
          className="absolute top-[15%] left-[10%] h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          delay={0}
        />
        <BreathingOrb
          className="absolute right-[8%] bottom-[20%] h-80 w-80 rounded-full bg-beige/8 blur-3xl"
          delay={2}
        />
        <BreathingOrb
          className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-muted/10 blur-[100px]"
          delay={1}
        />
      </div>

      {/* Decorative rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[min(85vw,680px)] w-[min(85vw,680px)]">
          <div className="absolute inset-0 rounded-full border border-primary/8" />
          <div className="absolute inset-[12%] rounded-full border border-beige/6" />
          <div className="absolute inset-[24%] rounded-full border border-primary/5" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn delay={0.1}>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/8 px-5 py-2 text-sm text-sage-light backdrop-blur-sm">
            <Leaf size={14} className="text-primary" />
            <span className="tracking-wide">Open to DevOps opportunities</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mb-4 font-serif text-lg tracking-[0.2em] text-beige/70 uppercase sm:text-xl">
            Namaste, I&apos;m
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h1 className="mb-6 font-serif text-5xl leading-[1.1] font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-gradient">Vitaly</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="yoga-divider mb-8" />
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border/60 bg-secondary/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {role}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Bridging calm mindfulness with modern infrastructure. I build
            reliable systems, automate workflows, and embrace AI-powered
            development — one breath at a time.
          </p>
        </FadeIn>

        <FadeIn delay={0.65}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[160px]">
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[160px] border-beige/20 bg-transparent hover:border-primary/40 hover:bg-primary/5"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </FadeIn>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-muted-foreground/40 transition-colors hover:text-primary/70"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Explore</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-current/30 p-1.5 transition-colors group-hover:border-primary/40">
            <motion.div
              className="h-1.5 w-1 rounded-full bg-current"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
