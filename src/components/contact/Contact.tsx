import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { useServiceIntent } from '../../context/ServiceIntentContext';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = portfolioContent;
  const { selectedServiceTitle, clearService } = useServiceIntent();

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

        {/* Selected Service Intent Badge / State */}
        {selectedServiceTitle && (
          <div className="mb-8 p-4 rounded-xl border border-[var(--color-accent-primary)]/40 bg-[var(--color-accent-subtle)]/40 flex items-center justify-between gap-4 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-primary)] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-[var(--color-text-primary)]">
                Selected service intent:{' '}
                <strong className="font-semibold text-[var(--color-accent-primary)]">
                  {selectedServiceTitle}
                </strong>
              </span>
            </div>
            <button
              type="button"
              onClick={clearService}
              className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] focus-ring rounded"
              title="Clear selection"
            >
              <span>Reset</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contact.links.map((link) => {
            const hasHref = Boolean(link.href);
            const isEmail = link.type === 'email';

            // Contextual mailto link with pre-filled subject if service selected
            const href =
              isEmail && selectedServiceTitle
                ? `mailto:nada.rshams@gmail.com?subject=${encodeURIComponent(
                    `Project Inquiry: ${selectedServiceTitle}`
                  )}`
                : link.href!;

            return (
              <div
                key={link.id}
                className="p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/40 flex flex-col justify-between gap-3 hover:border-[var(--color-border-default)] transition-colors"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider block mb-1">
                    {link.label}
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)] break-all">
                    {link.value}
                  </span>
                </div>

                {hasHref && (
                  <div>
                    <a
                      href={href}
                      target={isEmail ? undefined : '_blank'}
                      rel={isEmail ? undefined : 'noopener noreferrer'}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--color-accent-primary)] hover:underline focus-ring rounded"
                    >
                      <span>{isEmail ? 'Send Email' : 'Visit Profile'}</span>
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



