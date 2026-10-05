import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Skills: React.FC = () => {
  const { skills } = portfolioContent;
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section
      id="skills"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <Container size="2xl">
        {/* Section Header */}
        <div ref={headerRef} className="reveal mb-14 sm:mb-20">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
            {skills.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
            {skills.heading}
          </h2>
        </div>

        {/* Skills — editorial horizontal groupings, no cards */}
        <div
          ref={gridRef}
          className="reveal space-y-10 sm:space-y-12"
        >
          {skills.categories.map((cat, catIdx) => (
            <div
              key={cat.id}
              className={`flex flex-col sm:flex-row gap-4 sm:gap-12 ${
                catIdx < skills.categories.length - 1
                  ? 'pb-10 sm:pb-12 border-b border-[var(--color-border-subtle)]'
                  : ''
              }`}
            >
              {/* Category label */}
              <div className="sm:w-44 shrink-0 pt-0.5">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {cat.label}
                </p>
              </div>

              {/* Skills — inline tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag font-mono text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/60 text-[var(--color-text-primary)] cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
