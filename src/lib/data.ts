export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
] as const;

export const skillCategories = [
  {
    title: "AI Tools",
    icon: "Sparkles",
    skills: [
      "Cursor AI",
      "GitHub Copilot",
      "ChatGPT / Claude",
      "Prompt Engineering",
      "AI-Assisted Debugging",
      "Vibe Coding Workflows",
    ],
  },
  {
    title: "Cloud & IaC",
    icon: "Cloud",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Docker & Docker Compose",
      "Kubernetes Basics",
      "Terraform",
      "CI/CD Pipelines",
      "GitHub Actions",
    ],
  },
  {
    title: "Programming",
    icon: "Code2",
    skills: [
      "Python",
      "Bash / Shell Scripting",
      "TypeScript / JavaScript",
      "Go (Learning)",
      "YAML / JSON",
      "SQL Basics",
    ],
  },
  {
    title: "Other",
    icon: "Layers",
    skills: [
      "Linux Administration",
      "Git & GitHub",
      "Monitoring & Logging",
      "Agile / Scrum",
      "Technical Documentation",
      "Yoga & Mindfulness",
    ],
  },
] as const;

export const projects = [
  {
    title: "Cloud Infrastructure Automation",
    description:
      "Terraform modules for provisioning AWS infrastructure with automated CI/CD deployment pipelines.",
    tags: ["Terraform", "AWS", "GitHub Actions"],
    status: "In Progress",
  },
  {
    title: "Containerized Microservices",
    description:
      "Dockerized application stack with Kubernetes deployment manifests and health monitoring setup.",
    tags: ["Docker", "Kubernetes", "Python"],
    status: "Planned",
  },
  {
    title: "DevOps Learning Lab",
    description:
      "Personal homelab environment for experimenting with CI/CD, IaC, and cloud-native tooling.",
    tags: ["Linux", "Bash", "Monitoring"],
    status: "Active",
  },
] as const;

export const journeySteps = [
  {
    phase: "The Foundation",
    description:
      "Started with Linux fundamentals and shell scripting — the bedrock of every DevOps practice, much like mastering breath work in yoga.",
  },
  {
    phase: "Cloud & Containers",
    description:
      "Explored AWS services, Docker containerization, and infrastructure-as-code with Terraform. Building repeatable, scalable systems.",
  },
  {
    phase: "AI-Powered Development",
    description:
      "Embraced vibe coding with Cursor AI and GitHub Copilot. Using AI as a force multiplier to learn faster and ship infrastructure code confidently.",
  },
  {
    phase: "Continuous Growth",
    description:
      "Currently deepening Kubernetes knowledge, refining CI/CD pipelines, and contributing to open-source DevOps projects while maintaining daily yoga practice.",
  },
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Email", href: "mailto:hello@example.com", icon: "Mail" },
] as const;
