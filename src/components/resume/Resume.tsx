import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { Download, ExternalLink, ArrowRight, FileText } from 'lucide-react';

export const Resume: React.FC = () => {
  const { resume, personal } = portfolioContent;
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
      { threshold: 0.08 },
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

  const hasFile = Boolean(resume.fileUrl);

  return (
    <Section
      id="resume"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <div ref={observerRef}>
        <Container size="2xl">
          {/* ── Section Header ─────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-[var(--color-border-subtle)]">
            <div className="max-w-2xl">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
                {resume.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
                {resume.heading}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-md">
              {resume.intro}
            </p>
          </div>

          {/* ── Main Two-Column Layout ─────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" style={contentStyle}>
            {/* Left Column: Information & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight mb-4">
                  Professional Outline
                </h3>
                {resume.highlights && resume.highlights.length > 0 && (
                  <ul className="space-y-3" aria-label="Resume Highlights">
                    {resume.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Metadata */}
              <div className="pt-6 border-t border-[var(--color-border-subtle)] flex flex-col gap-2">
                {resume.fileName && hasFile && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Document</span>
                    <span className="font-mono font-medium text-[var(--color-text-primary)]">{resume.fileName}</span>
                  </div>
                )}
                {resume.lastUpdated && hasFile && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Updated</span>
                    <span className="font-mono font-medium text-[var(--color-text-primary)]">{resume.lastUpdated}</span>
                  </div>
                )}
                {!hasFile && (
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] italic font-mono">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Document pending upload...</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {hasFile ? (
                  <>
                    <a
                      href={resume.fileUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-[var(--color-accent-primary)] text-white hover:bg-[var(--color-accent-hover)] transition-colors focus-ring shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Resume</span>
                    </a>
                    <a
                      href={resume.fileUrl!}
                      download={resume.fileName || 'Resume.pdf'}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] hover:border-[var(--color-border-default)] transition-colors focus-ring shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] cursor-not-allowed"
                    aria-label="Resume not yet available"
                  >
                    <FileText className="w-4 h-4 opacity-50" />
                    <span>Resume Document Pending</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Abstract Document Visual */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-md aspect-[1/1.4] bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-xl shadow-lg overflow-hidden flex flex-col p-8 sm:p-12 transition-transform duration-500 hover:scale-[1.01]"
                aria-hidden="true"
              >
                {/* Abstract Document Header */}
                <div className="border-b-2 border-[var(--color-border-subtle)] pb-6 mb-8 text-center sm:text-left">
                  <div className="font-bold text-xl sm:text-2xl text-[var(--color-text-primary)] tracking-widest uppercase mb-2">
                    {personal.name}
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-[var(--color-accent-primary)] uppercase tracking-widest">
                    {personal.title}
                  </div>
                </div>

                {/* Abstract Content Lines */}
                <div className="flex-1 flex flex-col gap-6">
                  {/* Section 1 */}
                  <div className="space-y-3">
                    <div className="w-1/3 h-2.5 bg-[var(--color-border-default)] rounded-sm" />
                    <div className="w-full h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                    <div className="w-5/6 h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                    <div className="w-4/5 h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-3">
                    <div className="w-1/4 h-2.5 bg-[var(--color-border-default)] rounded-sm" />
                    <div className="w-full h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                    <div className="w-11/12 h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                    <div className="w-full h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                  </div>
                  
                  {/* Section 3 */}
                   <div className="space-y-3">
                    <div className="w-2/5 h-2.5 bg-[var(--color-border-default)] rounded-sm" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="w-full h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                            <div className="w-4/5 h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                        </div>
                        <div className="space-y-2">
                            <div className="w-11/12 h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                            <div className="w-full h-1.5 bg-[var(--color-border-subtle)] rounded-sm" />
                        </div>
                    </div>
                  </div>
                </div>

                {/* Decorative fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-secondary)] to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ── Section footer nav ──────────────────────────────────── */}
          <div className="pt-6 mt-12 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-muted)]">
            <span className="font-mono">End of Document Summary</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#contact');
              }}
              className="inline-flex items-center gap-1.5 text-[var(--color-accent-primary)] hover:underline font-medium focus-ring rounded"
            >
              <span>Next: Contact</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </div>
    </Section>
  );
};
