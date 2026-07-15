"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/lib/data";

const iconMap = {
  Github,
  Linkedin,
  Mail,
} as const;

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Interested in collaborating or have a DevOps opportunity? I'd love to hear from you."
        />

        <FadeIn>
          <div className="mx-auto max-w-xl">
            <div className="glass-card p-8 text-center">
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Whether you&apos;re looking for a motivated junior DevOps engineer
                or just want to chat about cloud infrastructure, AI tools, or yoga
                — feel free to reach out.
              </p>

              <div className="mb-8 flex items-center justify-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>

              <Button asChild size="lg" className="gap-2">
                <a href="mailto:hello@example.com">
                  <Send size={16} />
                  Send an Email
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
