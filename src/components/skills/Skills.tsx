import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';

export const Skills: React.FC = () => {
  const { skills } = portfolioContent;

  return (
    <Section
      id="skills"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <Container size="2xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
            {skills.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
            {skills.heading}
          </h2>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {skills.categories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/40"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-4 pb-2 border-b border-[var(--color-border-subtle)]">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

