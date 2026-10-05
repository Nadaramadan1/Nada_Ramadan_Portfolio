import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { Button } from '../primitives/Button';
import { portfolioContent } from '../../content/portfolioContent';
import { ArrowDownRight, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { hero, personal } = portfolioContent;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', targetId);
    }
  };

  return (
    <Section id="home" spacing="spacious" className="relative pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 overflow-hidden">
      {/* Subtle dot-grid background depth */}
      <div
        className="absolute inset-0 dot-grid opacity-40 dark:opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      {/* Radial gradient vignette — top-center */}
      <div
        className="absolute inset-x-0 top-0 h-80 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, var(--color-accent-subtle) 0%, transparent 75%)',
        }}
      />

      <Container size="2xl">
        <div className="relative flex flex-col justify-center max-w-3xl">

          {/* Availability badge */}
          <div className="animate-hero-1 mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] px-3 py-1.5 rounded-full">
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                aria-hidden="true"
              />
              {personal.statusText}
            </span>
          </div>

          {/* 1. Name — primary visual anchor */}
          <div className="animate-hero-2 mb-4">
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.04]">
              {hero.namePrefix}{' '}
              <span className="text-[var(--color-text-primary)]">
                {hero.nameHighlight}
              </span>
            </h1>
          </div>

          {/* 2. Role — accent-colored mono */}
          <div className="animate-hero-3 mb-6">
            <span className="font-mono text-lg sm:text-xl font-semibold tracking-tight text-[var(--color-accent-primary)]">
              {hero.role}
            </span>
          </div>

          {/* 3. Supporting line */}
          <p className="animate-hero-4 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 font-normal max-w-xl">
            {hero.description}
          </p>

          {/* 4. CTAs */}
          <div className="animate-hero-5 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={hero.primaryCta.href}
              onClick={(e) => scrollToSection(e, hero.primaryCta.href)}
              rightIcon={<ArrowDownRight className="w-4 h-4" />}
            >
              <span>{hero.primaryCta.label}</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={hero.secondaryCta.href}
              onClick={(e) => scrollToSection(e, hero.secondaryCta.href)}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              <span>{hero.secondaryCta.label}</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
