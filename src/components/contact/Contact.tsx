import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { useServiceIntent } from '../../context/ServiceIntentContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowUpRight, X } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = portfolioContent;
  const { selectedServiceTitle, clearService } = useServiceIntent();

  const headerRef = useScrollReveal<HTMLDivElement>();
  const intentRef = useScrollReveal<HTMLDivElement>();
  const linksRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section
      id="contact"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <Container size="2xl">
        {/* Heading */}
        <div ref={headerRef} className="reveal max-w-2xl mb-10">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
            {contact.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.12] mb-3">
            {contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {contact.intro}
          </p>
        </div>

        {/* Service Intent — human, intentional, elegant */}
        {selectedServiceTitle && (
          <div
            ref={intentRef}
            className="reveal mb-10 max-w-2xl"
          >
            <div className="flex items-start justify-between gap-4 p-5 rounded-2xl border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-primary)] mb-1.5">
                  Your interest
                </p>
                <p className="text-base sm:text-lg font-semibold text-[var(--color-text-primary)] leading-snug">
                  Let&apos;s talk about{' '}
                  <span className="text-[var(--color-accent-primary)]">
                    {selectedServiceTitle}
                  </span>
                  .
                </p>
              </div>
              <button
                type="button"
                onClick={clearService}
                aria-label="Clear service selection"
                className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors focus-ring cursor-pointer mt-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Contact Links */}
        <div
          ref={linksRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {contact.links.map((link) => {
            const hasHref = Boolean(link.href);
            const isEmail = link.type === 'email';

            // Pre-fill subject when a service is selected
            const href =
              isEmail && selectedServiceTitle
                ? `mailto:nada.rshams@gmail.com?subject=${encodeURIComponent(
                    `Project Inquiry: ${selectedServiceTitle}`
                  )}`
                : link.href!;

            return (
              <div
                key={link.id}
                className="contact-card p-5 sm:p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/40 flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] block mb-2">
                    {link.label}
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)] break-all leading-snug">
                    {link.value}
                  </span>
                </div>

                {hasHref && (
                  <a
                    href={href}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] transition-colors focus-ring rounded link-underline"
                  >
                    <span>{isEmail ? 'Send Email' : 'Visit Profile'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
