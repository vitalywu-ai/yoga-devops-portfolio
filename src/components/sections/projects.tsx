"use client";

import { ExternalLink, FolderGit2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/fade-in";
import { projects } from "@/lib/data";

const statusVariant = {
  "In Progress": "default",
  Planned: "accent",
  Active: "beige",
} as const;

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="What I'm Building"
          description="Hands-on projects that showcase my DevOps skills and continuous learning."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <Card className="group glass-card flex h-full flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-accent/10 transition-colors group-hover:bg-primary/10">
                    <FolderGit2 className="h-6 w-6 text-indigo-accent transition-colors group-hover:text-primary" />
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={statusVariant[project.status]}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2 px-0" disabled>
                    View Project
                    <ExternalLink size={14} />
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
