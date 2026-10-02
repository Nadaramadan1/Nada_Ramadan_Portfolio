import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { Button } from '../primitives/Button';
import { portfolioContent } from '../../content/portfolioContent';
import { ArrowDownRight, FileText, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { hero } = portfolioContent;

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
        <div className="flex flex-col justify-center max-w-3xl">
          {/* 1. Large Display Name */}
          <div className="animate-hero-1 mb-4">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.08]">
              {hero.namePrefix}{' '}
              <span className="relative inline-block text-[var(--color-text-primary)]">
                {hero.nameHighlight}
                <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-[var(--color-accent-primary)]/40 rounded-full" />
              </span>
            </h1>
          </div>
          
          {/* 2. Professional Title */}
          <div className="animate-hero-2 mb-6">
            <span className="font-mono text-xl sm:text-2xl font-semibold tracking-tight text-[var(--color-accent-primary)]">
              {hero.role}
            </span>
          </div>

          {/* 3. Short Positioning Paragraph */}
          <p className="animate-hero-3 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 font-normal">
            {hero.description}
          </p>

          {/* 4. CTAs */}
          <div className="animate-hero-4 flex flex-wrap items-center gap-3.5 sm:gap-4">
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
        </div>
      </Container>
    </Section>
  );
};
