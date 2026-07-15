import { Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Yoga DevOps Portfolio. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          Built with calm focus
          <Heart className="h-3.5 w-3.5 text-primary" />
        </p>
      </div>
    </footer>
  );
}
