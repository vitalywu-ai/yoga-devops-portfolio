"use client";

import { type ReactNode } from "react";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-16 text-center", className)}>
      <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
        {label}
      </p>
      <h2 className="mb-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-muted-foreground">{description}</p>
      )}
      {children}
    </FadeIn>
  );
}
