import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { Button } from '../primitives/Button';
import { portfolioContent } from '../../content/portfolioContent';
import { ArrowDownRight, FileText, ArrowRight, Sparkles, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal, hero } = portfolioContent;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', targetId);
    }
  };

  return (
    <Section id="home" spacing="spacious" className="pt-24 sm:pt-32 lg:pt-36 overflow-hidden">
      <Container size="2xl">
        {/* Asymmetric Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Primary Typography & CTAs (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* 1. Small Professional Eyebrow & Status */}
            <div className="animate-hero-1 flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[var(--color-accent-subtle)] text-[var(--color-accent-primary)] border border-[var(--color-accent-border)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] animate-pulse" />
                {hero.eyebrow}
              </span>
              <span className="font-mono text-xs text-[var(--color-text-muted)]">
                {personal.location}
              </span>
            </div>

            {/* 2 & 3. Large Display Name & Professional Title */}
            <div className="animate-hero-2 mb-6">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.08]">
                {hero.headlinePrefix}{' '}
                <span className="relative inline-block text-[var(--color-text-primary)]">
                  {hero.headlineHighlight}
                  {/* Subtle restrained accent line */}
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-[var(--color-accent-primary)]/40 rounded-full" />
                </span>
              </h1>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-mono text-base sm:text-lg font-semibold tracking-tight text-[var(--color-accent-primary)]">
                  {hero.role}
                </span>
                <span className="text-[var(--color-border-default)]">·</span>
                <span className="text-xs sm:text-sm font-medium text-[var(--color-text-muted)]">
                  Technical Portfolio
                </span>
              </div>
            </div>

            {/* 4. Short Positioning Paragraph */}
            <p className="animate-hero-3 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-8 font-normal">
              {hero.description}
            </p>

            {/* 5, 6, 7. Primary CTA, Secondary CTA, and Contact-Oriented Link */}
            <div className="animate-hero-4 flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
              {/* Primary CTA: View Projects (scrolls to #projects) */}
              <Button
                variant="primary"
                size="lg"
                href={hero.primaryCta.href}
                onClick={(e) => scrollToSection(e, hero.primaryCta.href)}
                rightIcon={<ArrowDownRight className="w-4 h-4" />}
                className="group"
              >
                <span>{hero.primaryCta.label}</span>
              </Button>

              {/* Secondary CTA: Download Resume (placeholder-safe) */}
              <Button
                variant="outline"
                size="lg"
                href={hero.secondaryCta.href}
                onClick={(e) => scrollToSection(e, hero.secondaryCta.href)}
                leftIcon={<FileText className="w-4 h-4 text-[var(--color-accent-primary)]" />}
                aria-label="Download resume or view resume section"
              >
                <span>{hero.secondaryCta.label}</span>
              </Button>

              {/* Subtle Contact-oriented Link */}
              <a
                href={hero.contactLink.href}
                onClick={(e) => scrollToSection(e, hero.contactLink.href)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] px-3 py-2 rounded-lg transition-colors focus-ring"
              >
                <span>{hero.contactLink.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Status indicator note */}
            <div className="animate-hero-5 flex items-center gap-2 pt-4 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>{personal.statusText}</span>
            </div>
          </div>

          {/* Right Column: Restrained Architectural Detail & Focus Matrix (Cols 8-12) */}
          <div className="lg:col-span-5 animate-hero-panel">
            <div className="relative rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-bg-elevated)] p-6 sm:p-7 shadow-xs">
              {/* Card Header & Technical Metadata */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--color-border-subtle)]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-accent-primary)]">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                      Architecture
                    </span>
                    <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                      Competency Matrix
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-accent-primary)]">
                  Active
                </span>
              </div>

              {/* Focus Areas Grid: Communicating hands-on competencies */}
              <div className="space-y-3">
                {hero.focusAreas.map((area, idx) => (
                  <div
                    key={area.label}
                    className="group relative p-3.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] hover:border-[var(--color-border-strong)] transition-all duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
                          0{idx + 1} //
                        </span>
                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                          {area.label}
                        </h3>
                      </div>
                      <span className="font-mono text-[11px] text-[var(--color-text-muted)] px-2 py-0.5 rounded bg-[var(--color-bg-secondary)]">
                        {area.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subdued Editorial Blueprint Note */}
              <div className="mt-5 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                <div className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent-primary)]" />
                  <span>Disciplined Engineering</span>
                </div>
                <span className="font-mono text-[11px] opacity-75">
                  v1.0 · Ready for Step 2+
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
