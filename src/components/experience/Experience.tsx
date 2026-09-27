import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import type { ExperienceItem } from '../../content/portfolioContent';
import { Calendar, Building2, ExternalLink, ArrowUpRight } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  return (
    <div className="relative pl-8 sm:pl-10 pb-12 last:pb-0 group">
      {/* Vertical Structural Line */}
      <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-0 w-[2px] bg-[var(--color-border-subtle)] group-last:hidden" />

      {/* Timeline Node Indicator */}
      <div
        className={`absolute left-0 sm:left-1 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
          item.isCurrent
            ? 'border-[var(--color-accent-primary)] bg-[var(--color-bg-primary)] shadow-xs'
            : 'border-[var(--color-border-default)] bg-[var(--color-bg-primary)] group-hover:border-[var(--color-accent-primary)]'
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            item.isCurrent
              ? 'bg-[var(--color-accent-primary)] animate-pulse'
              : 'bg-[var(--color-border-strong)] group-hover:bg-[var(--color-accent-primary)]'
          }`}
        />
      </div>

      {/* Main Content Box */}
      <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] p-6 sm:p-8 hover:border-[var(--color-border-default)] transition-all duration-200 shadow-xs">
        {/* Top Header Row: Role, Organization, Date */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4 pb-4 border-b border-[var(--color-border-subtle)]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
              <span className="font-mono text-xs font-semibold text-[var(--color-accent-primary)]">
                0{index + 1} //
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                {item.role}
              </h3>
              {item.isCurrent && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Present
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[var(--color-text-secondary)]">
              <Building2 className="w-4 h-4 text-[var(--color-text-muted)]" />
              <span>{item.organization}</span>
              {item.duration && (
                <>
                  <span className="text-[var(--color-border-default)]">·</span>
                  <span className="font-mono text-xs font-normal text-[var(--color-text-muted)]">
                    {item.duration}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Date & Timeline Span */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-text-muted)] px-3 py-1.5 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] self-start shrink-0">
            <Calendar className="w-3.5 h-3.5 text-[var(--color-accent-primary)]" />
            <span>
              {item.startDate} — {item.endDate}
            </span>
          </div>
        </div>

        {/* Short Description */}
        {item.description && (
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 font-normal">
            {item.description}
          </p>
        )}

        {/* Responsibilities Section */}
        {item.responsibilities && item.responsibilities.length > 0 && (
          <div className="mb-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-3">
              Responsibilities & Scope
            </h4>
            <ul className="space-y-2">
              {item.responsibilities.map((resp, rIdx) => (
                <li
                  key={rIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text-secondary)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Topics Taught (for instructional roles) */}
        {item.topicsTaught && item.topicsTaught.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border-subtle)]">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-2.5">
              Curriculum Topics Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.topicsTaught.map((topic, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects (if defined) */}
        {item.projects && item.projects.length > 0 && (
          <div className="mb-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-2">
              Projects & Deliverables
            </h4>
            <div className="space-y-1.5">
              {item.projects.map((proj, pIdx) => (
                <div
                  key={pIdx}
                  className="text-xs sm:text-sm font-medium text-[var(--color-text-primary)]"
                >
                  {proj}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies & External Links Footer */}
        <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-4">
          {/* Tech Tags */}
          {item.technologies && item.technologies.length > 0 ? (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[11px] text-[var(--color-text-muted)] mr-1">
                Stack:
              </span>
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : (
            <div />
          )}

          {/* Links / GitHub Action */}
          {item.links && item.links.length > 0 && (
            <div className="flex items-center gap-3">
              {item.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] transition-colors focus-ring rounded py-1 px-2 -mr-2"
                >
                  {link.type === 'github' ? (
                    <GithubIcon className="w-3.5 h-3.5" />
                  ) : (
                    <ExternalLink className="w-3.5 h-3.5" />
                  )}
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const { experience } = portfolioContent;

  return (
    <Section id="experience" spacing="spacious" className="scroll-mt-20 border-t border-[var(--color-border-subtle)]">
      <Container size="2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-[var(--color-border-subtle)]">
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
              {experience.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
              {experience.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-md">
            {experience.description}
          </p>
        </div>

        {/* Chronological Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experience.items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
