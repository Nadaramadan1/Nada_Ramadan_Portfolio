import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import type { ContactLink } from '../../content/portfolioContent';
import { ArrowUpRight, Mail } from 'lucide-react';

const ContactRow: React.FC<{
  link: ContactLink;
  index: number;
  visible: boolean;
}> = ({ link, index, visible }) => {
  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const rowStyle: React.CSSProperties = prefersReduced
    ? {}
    : {
        transitionDelay: visible ? `${index * 80}ms` : '0ms',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      };

  const indexLabel = String(index + 1).padStart(2, '0');
  
  // Is this just a placeholder without an actual URL?
  const isPlaceholder = !link.href;

  return (
    <div
      className="group border-b border-[var(--color-border-subtle)] last:border-b-0 py-6 sm:py-8"
      style={rowStyle}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Index & Label */}
        <div className="sm:col-span-4 flex items-center gap-4">
          <span className="font-mono text-xs font-semibold text-[var(--color-accent-primary)] shrink-0">
            {indexLabel}
          </span>
          <span className="text-base sm:text-lg font-medium text-[var(--color-text-primary)]">
            {link.label}
          </span>
        </div>

        {/* Value & Action */}
        <div className="sm:col-span-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
          <span className={`text-sm sm:text-base ${isPlaceholder ? 'text-[var(--color-text-muted)] italic' : 'text-[var(--color-text-secondary)]'} truncate`}>
            {link.value}
          </span>
          
          {/* Only render action if we have a real href */}
          {!isPlaceholder && link.href && (
            <a
              href={link.href}
              target={link.type === 'email' || link.type === 'phone' ? undefined : '_blank'}
              rel={link.type === 'email' || link.type === 'phone' ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-accent-primary)] hover:underline focus-ring rounded self-start sm:self-auto shrink-0 transition-all duration-200"
              aria-label={`Connect via ${link.label}`}
            >
              <span>{link.type === 'email' ? 'Send email' : link.type === 'phone' ? 'Call' : 'Visit profile'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const { contact } = portfolioContent;
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const contentStyle: React.CSSProperties = prefersReduced
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      };

  // Find the primary email link if it has a real href
  const primaryEmail = contact.links.find((l) => l.type === 'email' && l.href);

  // Filter only links that have real hrefs to render in the directory
  // If we only show links with actual data, we filter. BUT the requirement says:
  // "Only render entries with actual data." 
  // Let's filter out placeholders where `href` is falsy to keep the directory clean.
  const activeLinks = contact.links.filter((l) => l.href);

  return (
    <Section
      id="contact"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <div ref={observerRef}>
        <Container size="2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start" style={contentStyle}>
            
            {/* Left Column: Statement & CTA */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-32">
              <div>
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
                  {contact.eyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
                  {contact.heading}
                </h2>
              </div>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                {contact.intro}
              </p>
              
              {primaryEmail ? (
                <div className="pt-4">
                  <a
                    href={primaryEmail.href!}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-xl bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-primary)] hover:text-white transition-colors focus-ring shadow-sm group"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send an email</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              ) : (
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] italic cursor-not-allowed">
                    <Mail className="w-4 h-4 opacity-50" />
                    <span>Email pending configuration</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Contact Directory */}
            <div className="lg:col-span-7">
              {activeLinks.length > 0 ? (
                <div role="list" aria-label="Contact channels directory">
                  {activeLinks.map((link, idx) => (
                    <div key={link.id} role="listitem">
                      <ContactRow link={link} index={idx} visible={visible} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 sm:p-12 border border-dashed border-[var(--color-border-subtle)] rounded-2xl flex flex-col items-center justify-center text-center space-y-3 bg-[var(--color-bg-secondary)]/30">
                  <p className="font-mono text-[11px] text-[var(--color-text-muted)] leading-relaxed max-w-sm">
                    <span className="font-semibold text-[var(--color-text-primary)]">Editing note:</span>{' '}
                    Contact directory is empty. Add actual URLs and email addresses to the <code className="text-[var(--color-accent-primary)]">contact</code> object in <code className="text-[var(--color-accent-primary)]">src/content/portfolioContent.ts</code> to populate this section.
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </Container>
      </div>
    </Section>
  );
};
