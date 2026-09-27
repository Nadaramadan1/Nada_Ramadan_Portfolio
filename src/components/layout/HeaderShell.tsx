import React from 'react';
import { Container } from '../primitives/Container';
import { ThemeToggle } from '../primitives/ThemeToggle';

export const HeaderShell: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--color-bg-primary)]/90 border-b border-[var(--color-border-subtle)] transition-colors duration-200">
      <Container size="2xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Identity: Name and Professional Title */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#"
              className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors focus-ring rounded"
            >
              Nada Shams Eldin
            </a>
            <span className="hidden sm:inline-block text-[var(--color-border-default)]">/</span>
            <span className="hidden sm:inline-block font-mono text-xs text-[var(--color-text-muted)] tracking-wider uppercase bg-[var(--color-bg-secondary)] px-2 py-0.5 rounded border border-[var(--color-border-subtle)]">
              AI Engineer
            </span>
          </div>

          {/* Minimal Controls (ThemeToggle & Status indicator) */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for collaboration</span>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};
