import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const About: React.FC = () => {
  const { about } = portfolioContent;

  const headingRef = useScrollReveal<HTMLDivElement>();
  const dividerRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLParagraphElement>();

  return (
    <Section id="about" spacing="spacious" className="scroll-mt-20 border-t border-[var(--color-border-subtle)]">
      <Container size="2xl">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div ref={headingRef} className="reveal mb-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)]">
              About
            </span>
          </div>

          {/* Editorial accent divider */}
          <div
            ref={dividerRef}
            className="about-divider reveal mb-10"
            aria-hidden="true"
          />

          {/* Lead paragraph — large, confident typography */}
          <p
            ref={textRef}
            className="reveal text-2xl sm:text-3xl font-normal text-[var(--color-text-primary)] leading-[1.5] tracking-[-0.01em]"
          >
            {about.leadParagraph}
          </p>
        </div>
      </Container>
    </Section>
  );
};
