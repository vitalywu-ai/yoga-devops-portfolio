"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { journeySteps } from "@/lib/data";

export function Journey() {
  return (
    <section id="journey" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="My Vibe Coding Journey"
          title="From Curiosity to Cloud"
          description="How AI-powered development and DevOps practices shaped my path."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 left-6 h-full w-px bg-gradient-to-b from-primary/50 via-indigo-accent/30 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <FadeIn key={step.phase} delay={index * 0.15}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden flex-1 md:block" />

                  <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-primary bg-background ring-4 ring-primary/20" />
                  </div>

                  <div className="flex-1 pl-14 md:pl-0">
                    <div className="glass-card p-6 transition-all duration-300 hover:border-primary/30">
                      <span className="mb-2 inline-block text-xs font-medium tracking-widest text-primary uppercase">
                        Phase {index + 1}
                      </span>
                      <h3 className="mb-2 text-lg font-semibold">{step.phase}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
