import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioContent;
  const headerRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section
      id="certifications"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <Container size="2xl">
        {/* Section Header */}
        <div ref={headerRef} className="reveal max-w-2xl mb-14 sm:mb-20">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
            {certifications.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
            {certifications.heading}
          </h2>
        </div>

        {/* Certifications — editorial horizontal list, no cards */}
        <div ref={listRef} className="reveal space-y-0">
          {certifications.items.map((item, idx) => (
            <div
              key={item.id}
              className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 sm:py-10 ${
                idx < certifications.items.length - 1
                  ? 'border-b border-[var(--color-border-subtle)]'
                  : ''
              } ${idx === 0 ? 'border-t border-[var(--color-border-subtle)]' : ''}`}
            >
              {/* Left: Issuer + Title */}
              <div className="flex-1 max-w-xl">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
                  {item.issuer}
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-text-primary)] leading-snug tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Right: Credential link */}
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 shrink-0 font-mono text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-border)] bg-[var(--color-bg-secondary)]/50 hover:bg-[var(--color-accent-subtle)] px-4 py-2 rounded-lg transition-all duration-200 focus-ring group"
              >
                <span>View Certificate</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150"
                  aria-hidden="true"
                />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
