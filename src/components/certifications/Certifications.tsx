import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { ArrowUpRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioContent;

  return (
    <Section
      id="certifications"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <Container size="2xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
            {certifications.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
            {certifications.heading}
          </h2>
        </div>

        {/* Certifications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certifications.items.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/40 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">
                  {item.issuer}
                </span>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--color-accent-primary)] hover:underline focus-ring rounded"
                >
                  <span>View Certificate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

