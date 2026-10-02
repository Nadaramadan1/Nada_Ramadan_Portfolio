import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = portfolioContent;

  return (
    <Section id="about" spacing="spacious" className="scroll-mt-20 border-t border-[var(--color-border-subtle)]">
      <Container size="2xl">
        {/* Minimal Personal Introduction */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15] mb-8">
            {about.heading}
          </h2>
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl font-medium text-[var(--color-text-primary)] leading-relaxed">
              {about.leadParagraph}
            </p>
          </div>
        </div>

        {/* Subtle Editorial Anchor Navigation to Experience */}
        <div className="mt-16 pt-6 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          <span className="font-mono">Next: Professional Experience</span>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', '#experience');
            }}
            className="inline-flex items-center gap-1.5 text-[var(--color-accent-primary)] hover:underline font-medium focus-ring rounded"
          >
            <span>Jump to Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </Section>
  );
};
