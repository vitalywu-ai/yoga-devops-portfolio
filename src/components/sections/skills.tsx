"use client";

import { Cloud, Code2, Layers, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/fade-in";
import { skillCategories } from "@/lib/data";

const iconMap = {
  Sparkles,
  Cloud,
  Code2,
  Layers,
} as const;

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Tools & Technologies"
          description="A curated toolkit spanning AI-assisted development, cloud infrastructure, and more."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <StaggerItem key={category.title}>
                <Card className="glass-card h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader className="flex-row items-center gap-3 space-y-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
