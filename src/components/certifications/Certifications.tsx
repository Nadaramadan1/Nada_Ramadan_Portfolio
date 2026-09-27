import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import type { CertificationItem } from '../../content/portfolioContent';
import { ArrowUpRight, ArrowRight, X, ExternalLink } from 'lucide-react';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const isPlaceholder = (value?: string) =>
  !value || value.startsWith('[') || value.trim() === '';

// ---------------------------------------------------------------------------
// ImageLightbox — modal for viewing certificate images
// ---------------------------------------------------------------------------
const ImageLightbox: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate image: ${alt}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[var(--color-bg-primary)] rounded-2xl border border-[var(--color-border-subtle)] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] focus-ring transition-colors"
          aria-label="Close certificate image"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[80vh] object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// CredentialRow — a single certification entry
// ---------------------------------------------------------------------------
const CredentialRow: React.FC<{
  cert: CertificationItem;
  index: number;
  visible: boolean;
}> = ({ cert, index, visible }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const rowStyle: React.CSSProperties = prefersReduced
    ? {}
    : {
        transitionDelay: visible ? `${index * 100}ms` : '0ms',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      };

  const indexLabel = String(index + 1).padStart(2, '0');
  const titleIsPlaceholder = isPlaceholder(cert.title);
  const dateIsPlaceholder = isPlaceholder(cert.date);
  const hasCredentialUrl = Boolean(cert.credentialUrl);
  const hasCertImage = Boolean(cert.certificateImage);
  const hasSkills = cert.skills && cert.skills.length > 0;

  return (
    <>
      <div
        className="group border-b border-[var(--color-border-subtle)] last:border-b-0 py-8 sm:py-10"
        style={rowStyle}
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start">
          {/* Index */}
          <div className="sm:col-span-1 pt-0.5">
            <span className="font-mono text-xs font-semibold text-[var(--color-accent-primary)]">
              {indexLabel}
            </span>
          </div>

          {/* Main credential info */}
          <div className="sm:col-span-7 lg:col-span-6 space-y-2">
            {/* Title */}
            <h3
              className={`text-xl sm:text-2xl font-bold tracking-tight leading-snug ${
                titleIsPlaceholder
                  ? 'text-[var(--color-text-muted)] italic'
                  : 'text-[var(--color-text-primary)]'
              }`}
            >
              {cert.title}
            </h3>

            {/* Issuer */}
            {cert.issuer && (
              <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                {cert.issuer}
              </p>
            )}

            {/* Date */}
            {cert.date && (
              <p
                className={`font-mono text-xs ${
                  dateIsPlaceholder
                    ? 'text-[var(--color-text-muted)] italic'
                    : 'text-[var(--color-text-muted)]'
                }`}
              >
                {cert.date}
              </p>
            )}

            {/* Description */}
            {cert.description && !isPlaceholder(cert.description) && (
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pt-1 max-w-prose">
                {cert.description}
              </p>
            )}

            {/* Skills */}
            {hasSkills && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {cert.skills!.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right: actions + status */}
          <div className="sm:col-span-4 lg:col-span-5 flex flex-col items-start sm:items-end gap-3 sm:pt-1">
            {/* Status badge */}
            {cert.status && (
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)]"
                  aria-hidden="true"
                />
                {cert.status}
              </span>
            )}

            {/* Actions row */}
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {/* View Credential link — only when real URL exists */}
              {hasCredentialUrl && (
                <a
                  href={cert.credentialUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent-primary)] hover:underline focus-ring rounded"
                >
                  <span>View Credential</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}

              {/* View Certificate Image — only when real image exists */}
              {hasCertImage && (
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] focus-ring rounded transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>View Certificate</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox — only rendered when open and image exists */}
      {lightboxOpen && hasCertImage && (
        <ImageLightbox
          src={cert.certificateImage!}
          alt={`${cert.title} — certificate issued by ${cert.issuer ?? 'unknown'}`}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

// ---------------------------------------------------------------------------
// Certifications — main exported section
// ---------------------------------------------------------------------------
export const Certifications: React.FC = () => {
  const { certifications } = portfolioContent;
  const observerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = observerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.06 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="certifications"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <div ref={observerRef}>
        <Container size="2xl">
          {/* ── Section Header ───────────────────────────────── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-[var(--color-border-subtle)]">
            <div className="max-w-2xl">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
                {certifications.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
                {certifications.heading}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-md">
              {certifications.intro}
            </p>
          </div>

          {/* ── Credential archive list ─────────────────────── */}
          <div role="list" aria-label="Certifications and credentials">
            {certifications.items.map((cert, idx) => (
              <div key={cert.id} role="listitem">
                <CredentialRow cert={cert} index={idx} visible={visible} />
              </div>
            ))}
          </div>

          {/* ── Placeholder note ────────────────────────────── */}
          <div className="mt-8 px-5 py-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/50">
            <p className="font-mono text-[11px] text-[var(--color-text-muted)] leading-relaxed">
              <span className="font-semibold text-[var(--color-text-primary)]">Editing note:</span>{' '}
              Fields shown as{' '}
              <span className="italic">[Add ...]</span>{' '}
              are placeholders. Update them in{' '}
              <code className="text-[var(--color-accent-primary)]">src/content/portfolioContent.ts</code>{' '}
              under the <code className="text-[var(--color-accent-primary)]">certifications</code> key.
            </p>
          </div>

          {/* ── Section footer nav ──────────────────────────── */}
          <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-muted)]">
            <span className="font-mono">End of Credential Archive</span>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#resume');
              }}
              className="inline-flex items-center gap-1.5 text-[var(--color-accent-primary)] hover:underline font-medium focus-ring rounded"
            >
              <span>Next: Resume</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </div>
    </Section>
  );
};
