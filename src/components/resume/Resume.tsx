import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { Button } from '../primitives/Button';
import { portfolioContent } from '../../content/portfolioContent';
import { Download, ExternalLink, ArrowRight, FileText } from 'lucide-react';

export const Resume: React.FC = () => {
  const { resume } = portfolioContent;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (prefersReduced) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.06 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  const hasFile = Boolean(resume.fileUrl);

  const fadeIn = (delay = 0): React.CSSProperties =>
    prefersReduced
      ? {}
      : {
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(14px)',
          transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        };

  return (
    <Section
      id="resume"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <div ref={sectionRef}>
        <Container size="2xl">

          {/* ── Two-column grid ─────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* ─── LEFT ── */}
            <div className="lg:col-span-5 flex flex-col gap-8" style={fadeIn(0)}>

              {/* Eyebrow + Heading */}
              <div>
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-primary)] mb-4">
                  {resume.eyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.12] mb-3">
                  {resume.heading}
                </h2>
                <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  {resume.subheading}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {hasFile ? (
                  <>
                    <Button
                      variant="primary"
                      size="lg"
                      href={resume.fileUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View resume PDF in a new tab"
                      leftIcon={<ExternalLink className="w-4 h-4" aria-hidden="true" />}
                    >
                      View Resume
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      href={resume.fileUrl!}
                      download={resume.fileName ?? 'Nada-Ramadan-Resume.pdf'}
                      aria-label="Download resume PDF"
                      leftIcon={<Download className="w-4 h-4" aria-hidden="true" />}
                    >
                      Download Resume
                    </Button>
                  </>
                ) : (
                  <div
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-[var(--color-border-subtle)] text-sm text-[var(--color-text-muted)] font-mono bg-[var(--color-bg-secondary)]/60 select-none"
                    aria-label="Resume document not yet available"
                  >
                    <FileText className="w-4 h-4 opacity-50" aria-hidden="true" />
                    <span>Resume coming soon</span>
                  </div>
                )}
              </div>

              {/* Education metadata */}
              <div className="pt-5 border-t border-[var(--color-border-subtle)]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
                  Education
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {resume.education.institution}
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    {resume.education.faculty}
                  </span>
                  <div className="mt-1 flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[11px] text-[var(--color-text-muted)]">
                      {resume.education.degree}
                    </span>
                    <span className="text-[var(--color-border-default)]" aria-hidden="true">·</span>
                    <span className="font-mono text-[11px] text-[var(--color-accent-primary)]">
                      Expected {resume.education.expectedGraduation}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── RIGHT: Career Snapshot Card ─── */}
            <div className="lg:col-span-7" style={fadeIn(100)}>
              <div className="relative rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-bg-elevated)] p-7 sm:p-9 shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-0.5">

                {/* Subtle dot-grid background */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
                  aria-hidden="true"
                  style={{ opacity: 0.03 }}
                >
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="resume-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#resume-grid)" />
                  </svg>
                </div>

                {/* Card header */}
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-[var(--color-border-subtle)]">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-0.5">
                      Career Snapshot
                    </span>
                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                      Nada Ramadan
                    </span>
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-accent-primary)]">
                    Active
                  </span>
                </div>

                {/* Timeline */}
                <div className="mb-8">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-5">
                    Timeline
                  </span>
                  <ol className="relative" aria-label="Career timeline">
                    <div
                      className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--color-border-subtle)]"
                      aria-hidden="true"
                    />
                    {resume.timeline.map((item, idx) => (
                      <li
                        key={item.id}
                        className={`relative pl-6 group${idx < resume.timeline.length - 1 ? ' pb-7' : ''}`}
                      >
                        <span
                          className="absolute left-0 top-[5px] w-[11px] h-[11px] rounded-full border-2 border-[var(--color-accent-primary)] bg-[var(--color-bg-elevated)] transition-all duration-200 group-hover:bg-[var(--color-accent-primary)]"
                          aria-hidden="true"
                        />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-mono text-[10px] text-[var(--color-accent-primary)] uppercase tracking-wider">
                            {item.year}
                          </span>
                          <span className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                            {item.role}
                          </span>
                          <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                            {item.org}
                          </span>
                          <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                            {item.detail}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Technical Focus */}
                <div className="pt-6 border-t border-[var(--color-border-subtle)]">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
                    Technical Focus
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {resume.focusAreas.map((area) => (
                      <div
                        key={area.id}
                        className="p-3.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] hover:border-[var(--color-border-default)] transition-colors duration-200"
                      >
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-primary)] mb-2">
                          {area.label}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {area.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section footer nav ─────────────────────────────── */}
          <div
            className="pt-6 mt-14 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-muted)]"
            style={fadeIn(200)}
          >
            <span className="font-mono">07 // Resume</span>
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


