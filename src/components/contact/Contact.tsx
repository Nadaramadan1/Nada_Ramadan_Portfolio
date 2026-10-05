import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = portfolioContent;

  return (
    <Section
      id="contact"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <Container size="2xl">
        <div className="max-w-2xl mb-10">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
            {contact.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15] mb-3">
            {contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {contact.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contact.links.map((link) => {
            const hasHref = Boolean(link.href);
            return (
              <div
                key={link.id}
                className="p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/40 flex flex-col justify-between gap-3"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider block mb-1">
                    {link.label}
                  </span>
                  <span className={`text-sm ${hasHref ? 'text-[var(--color-text-primary)] font-medium' : 'text-[var(--color-text-muted)] italic'}`}>
                    {link.value}
                  </span>
                </div>

                {hasHref && (
                  <div>
                    <a
                      href={link.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--color-accent-primary)] hover:underline focus-ring rounded"
                    >
                      <span>Visit</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

