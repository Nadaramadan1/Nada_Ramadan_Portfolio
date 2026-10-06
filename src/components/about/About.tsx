import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const About: React.FC = () => {
  const { about } = portfolioContent;

  const eyebrowRef = useScrollReveal<HTMLDivElement>();
  const headingRef = useScrollReveal<HTMLHeadingElement>();
  const narrativeRef = useScrollReveal<HTMLDivElement>();
  const progressionRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="about" spacing="spacious" className="scroll-mt-20 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] transition-colors duration-200">
      <Container size="2xl">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="reveal mb-6 sm:mb-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)]">
              {about.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15] mb-8 sm:mb-10 max-w-3xl"
          >
            {about.heading}
          </h2>

          {/* Core Story Narrative */}
          <div ref={narrativeRef} className="reveal space-y-5 sm:space-y-6 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal max-w-3xl">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Subtle Visual Storyline Progression (Learn → Teach → Apply → Expand) */}
          <div ref={progressionRef} className="reveal pt-10 sm:pt-14 mt-10 sm:mt-12 border-t border-[var(--color-border-subtle)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {about.progression.map((step) => (
                <div
                  key={step.number}
                  className="group relative p-4 sm:p-5 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-border)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent-primary)] tracking-wider">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest font-semibold">
                      Phase
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1.5 group-hover:text-[var(--color-accent-primary)] transition-colors">
                    {step.stage}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-normal font-normal">
                    {step.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
