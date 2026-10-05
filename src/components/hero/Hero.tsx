import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { Button } from '../primitives/Button';
import { portfolioContent } from '../../content/portfolioContent';
import { ArrowDownRight, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { hero } = portfolioContent;

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
    <Section id="home" spacing="spacious" className="pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28">
      <Container size="2xl">
        <div className="flex flex-col justify-center max-w-3xl">
          {/* 1. Name */}
          <div className="mb-4">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.08]">
              {hero.namePrefix}{' '}
              <span className="text-[var(--color-text-primary)]">
                {hero.nameHighlight}
              </span>
            </h1>
          </div>

          {/* 2. Title */}
          <div className="mb-6">
            <span className="font-mono text-xl sm:text-2xl font-semibold tracking-tight text-[var(--color-accent-primary)]">
              {hero.role}
            </span>
          </div>

          {/* 3. Supporting text */}
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 font-normal">
            {hero.description}
          </p>

          {/* 4. CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA: View Projects */}
            <Button
              variant="primary"
              size="lg"
              href={hero.primaryCta.href}
              onClick={(e) => scrollToSection(e, hero.primaryCta.href)}
              rightIcon={<ArrowDownRight className="w-4 h-4" />}
            >
              <span>{hero.primaryCta.label}</span>
            </Button>

            {/* Secondary CTA: Hire Me */}
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

