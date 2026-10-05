import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';

export const About: React.FC = () => {
  const { about } = portfolioContent;

  return (
    <Section id="about" spacing="spacious" className="scroll-mt-20 border-t border-[var(--color-border-subtle)]">
      <Container size="2xl">
        <div className="max-w-3xl py-4 sm:py-8">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-4">
            About
          </span>
          <p className="text-xl sm:text-2xl font-normal text-[var(--color-text-primary)] leading-relaxed">
            {about.leadParagraph}
          </p>
        </div>
      </Container>
    </Section>
  );
};

