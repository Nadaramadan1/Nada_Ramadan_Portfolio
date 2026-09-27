import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import type { ServiceItem } from '../../content/portfolioContent';
import { ArrowUpRight, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

// ---------------------------------------------------------------------------
// ServiceRow — a single service in the vertical editorial list
// ---------------------------------------------------------------------------
const ServiceRow: React.FC<{
  service: ServiceItem;
  index: number;
  visible: boolean;
}> = ({ service, visible, index }) => {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `service-details-${service.id}`;
  const toggleId = `service-toggle-${service.id}`;

  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const rowStyle: React.CSSProperties = prefersReduced
    ? {}
    : {
        transitionDelay: visible ? `${index * 90}ms` : '0ms',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      };

  const hasExpandable = Boolean(service.details?.length || service.technologies?.length);

  return (
    <div
      className="group border-b border-[var(--color-border-subtle)] last:border-b-0"
      style={rowStyle}
    >
      {/* Main row — always visible */}
      <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start">
        {/* Number */}
        <div className="sm:col-span-1 flex items-start pt-0.5">
          <span
            className="font-mono text-xs font-semibold text-[var(--color-accent-primary)] tabular-nums
                       group-hover:text-[var(--color-text-primary)] transition-colors duration-200"
          >
            {service.number}
          </span>
        </div>

        {/* Title + description */}
        <div className="sm:col-span-7 lg:col-span-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--color-text-primary)] leading-snug mb-3 group-hover:text-[var(--color-accent-primary)] transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-prose">
            {service.shortDescription}
          </p>
        </div>

        {/* Right side: tech tags + expand toggle */}
        <div className="sm:col-span-4 lg:col-span-5 flex flex-col items-start sm:items-end justify-between gap-4 sm:pt-1">
          {/* Technologies */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:justify-end">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Row arrow indicator — visible on hover on desktop */}
          <div
            className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200"
            aria-hidden="true"
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent-primary)]" />
            <span>Details</span>
          </div>
        </div>
      </div>

      {/* Expandable details panel */}
      {hasExpandable && (
        <div className="pb-6 sm:pb-8 sm:pl-[calc(8.33%+2rem)]">
          <button
            id={toggleId}
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-controls={detailsId}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-accent-primary)] hover:underline focus-ring rounded py-1 cursor-pointer select-none"
          >
            <span>{expanded ? 'Collapse details' : 'View details'}</span>
            {expanded ? (
              <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
            )}
          </button>

          {expanded && (
            <div
              id={detailsId}
              role="region"
              aria-labelledby={toggleId}
              className="mt-4 p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/50 space-y-4"
            >
              {service.details && service.details.length > 0 && (
                <ul className="space-y-2" aria-label={`${service.title} details`}>
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                      {/* Bullet accent */}
                      <span
                        className="mt-[5px] block w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] shrink-0"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Services — main exported section
// ---------------------------------------------------------------------------
export const Services: React.FC = () => {
  const { services } = portfolioContent;
  const observerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = observerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="services"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <div ref={observerRef}>
        <Container size="2xl">
          {/* ── Section Header ─────────────────────────────────── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-[var(--color-border-subtle)]">
            <div className="max-w-2xl">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
                {services.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
                {services.heading}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-md">
              {services.intro}
            </p>
          </div>

          {/* ── Service list ───────────────────────────────────── */}
          <div
            role="list"
            aria-label="Available services"
          >
            {services.services.map((service, idx) => (
              <div key={service.id} role="listitem">
                <ServiceRow
                  service={service}
                  index={idx}
                  visible={visible}
                />
              </div>
            ))}
          </div>

          {/* ── Section footer nav ─────────────────────────────── */}
          <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
            <p className="font-mono max-w-xs sm:max-w-sm leading-relaxed">
              Interested in working together?{' '}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#contact');
                }}
                className="text-[var(--color-accent-primary)] hover:underline focus-ring rounded"
              >
                Get in touch
              </a>{' '}
              to discuss your project.
            </p>
            <a
              href="#certifications"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#certifications');
              }}
              className="inline-flex items-center gap-1.5 text-[var(--color-accent-primary)] hover:underline font-medium focus-ring rounded shrink-0"
            >
              <span>Next: Certifications</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </div>
    </Section>
  );
};
