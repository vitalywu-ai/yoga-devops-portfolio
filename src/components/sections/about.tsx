"use client";

import { Brain, Cloud, Flower2, MapPin, Sparkles } from "lucide-react";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    icon: Cloud,
    title: "Infrastructure",
    description:
      "Terraform, CI/CD, and cloud-native tooling — built with reliability in mind.",
  },
  {
    icon: Brain,
    title: "AI Learning",
    description:
      "Cursor, Copilot, and vibe coding workflows that accelerate growth.",
  },
  {
    icon: Flower2,
    title: "Mindfulness",
    description:
      "Daily yoga practice that brings patience and focus to every challenge.",
  },
] as const;

const details = [
  { label: "Location", value: "Your City", icon: MapPin },
  { label: "Status", value: "Open to Work", icon: Sparkles },
  { label: "Focus", value: "DevOps & Cloud", icon: Cloud },
] as const;

export function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Where DevOps Meets Mindfulness"
          description="A unique blend of technical passion and inner balance — building systems with the same intention I bring to the mat."
        />

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <div className="relative mx-auto max-w-md lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-3xl border border-primary/10 bg-primary/3" />
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full border border-beige/10 bg-beige/5 blur-sm" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full border border-primary/15 bg-primary/5" />

              <div className="glass-card relative aspect-[4/5] overflow-hidden">
                {/* Lotus-inspired center motif */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {[0, 45, 90, 135].map((rotation) => (
                      <div
                        key={rotation}
                        className="absolute top-1/2 left-1/2 h-20 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-primary/15 to-beige/10"
                        style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
                      />
                    ))}
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-primary/25 bg-background/60 backdrop-blur-sm">
                      <Flower2 className="h-10 w-10 text-primary/70" strokeWidth={1.25} />
                    </div>
                  </div>
                </div>

                {/* Soft gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-beige/5" />
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-card/80 to-transparent" />

                {/* Quote */}
                <div className="absolute inset-x-0 bottom-0 border-t border-border/30 bg-card/70 p-6 backdrop-blur-md">
                  <p className="font-serif text-lg leading-snug text-beige/90 italic">
                    &ldquo;Balance in code, balance in life.&rdquo;
                  </p>
                  <p className="mt-2 text-xs tracking-widest text-primary/60 uppercase">
                    Personal mantra
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I&apos;m a junior DevOps engineer with a passion for building
                  reliable, automated infrastructure. My journey into tech is
                  guided by the same principles I apply on the yoga mat —
                  patience, consistency, and continuous improvement.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  I leverage AI tools like Cursor and GitHub Copilot to accelerate
                  my learning and deliver quality infrastructure code. Whether
                  it&apos;s provisioning cloud resources with Terraform, setting up
                  CI/CD pipelines, or containerizing applications, I approach every
                  challenge with calm focus.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  When I&apos;m not deploying infrastructure, you&apos;ll find me
                  on the yoga mat — practicing mindfulness and finding the balance
                  that fuels my best work.
                </p>
              </div>

              <StaggerContainer className="grid gap-4 sm:grid-cols-3" staggerDelay={0.08}>
                {pillars.map((pillar) => (
                  <StaggerItem key={pillar.title}>
                    <div className="group h-full rounded-xl border border-border/40 bg-secondary/20 p-4 transition-all duration-300 hover:border-primary/25 hover:bg-secondary/40">
                      <pillar.icon
                        className="mb-3 h-5 w-5 text-primary/70 transition-colors group-hover:text-primary"
                        strokeWidth={1.5}
                      />
                      <h3 className="mb-1.5 text-sm font-medium text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="flex flex-wrap gap-8 border-t border-border/40 pt-6">
                {details.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/8">
                      <item.icon className="h-3.5 w-3.5 text-primary/80" />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-widest text-primary/70 uppercase">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground/90">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
