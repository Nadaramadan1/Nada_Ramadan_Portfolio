import React, { useState } from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import type { ProjectItem } from '../../content/portfolioContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Terminal,
  FileText,
  Code2,
  CheckCircle2,
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
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

/* ─── Project Visual / Screenshot ─────────────────────────────────────── */
const ProjectVisual: React.FC<{ project: ProjectItem; index: number }> = ({
  project,
  index,
}) => {
  const [imageError, setImageError] = useState(false);
  const hasImage = project.image && !imageError;

  return (
    <div className="group relative rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] overflow-hidden shadow-[var(--shadow-subtle)] hover:border-[var(--color-border-default)] hover:shadow-[var(--shadow-card)] transition-all duration-500">
      {/* Aspect ratio: 16:10 */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {/* Window chrome */}
        <div className="relative z-10 flex items-center justify-between px-4 py-2.5 bg-[var(--color-bg-primary)] border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-default)] opacity-60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-default)] opacity-60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-default)] opacity-60" />
          </div>
          <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase">
            {project.category} &middot; 0{index + 1}
          </span>
        </div>

        {/* Image or architectural placeholder */}
        {hasImage ? (
          <div className="project-img-wrap h-full">
            <img
              src={project.image!}
              alt={`${project.title} preview`}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[var(--color-bg-primary)] project-placeholder-grid relative">
            <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
              <div className="p-3.5 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-accent-primary)] mb-4 shadow-[var(--shadow-subtle)]">
                <Terminal className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">
                {project.title}
              </h4>
              <p className="font-mono text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                {project.category}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Single Project Row (editorial alternating layout) ───────────────── */
const ProjectShowcaseItem: React.FC<{ project: ProjectItem; index: number }> = ({
  project,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useScrollReveal<HTMLElement>();

  const isReversed = index % 2 !== 0;

  const hasGithub = Boolean(project.githubUrl);
  const hasLive = Boolean(project.liveUrl);
  const hasColab = Boolean(project.colabUrl);
  const hasCaseStudy = Boolean(project.caseStudyUrl);
  const hasAnyLink = hasGithub || hasLive || hasColab || hasCaseStudy;

  return (
    <article
      ref={ref}
      aria-labelledby={`project-title-${project.id}`}
      className="reveal py-14 sm:py-20 border-b border-[var(--color-border-subtle)] last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Visual */}
        <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <ProjectVisual project={project} index={index} />
        </div>

        {/* Details */}
        <div
          className={`lg:col-span-5 flex flex-col justify-center ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Eyebrow: number + category */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-2xl font-bold text-[var(--color-border-default)] leading-none select-none">
              0{index + 1}
            </span>
            <span className="w-px h-5 bg-[var(--color-border-default)]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3
            id={`project-title-${project.id}`}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)] mb-3 leading-snug"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Technology labels */}
          <div className="mb-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-2.5">
              Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="skill-tag font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable specs */}
          {(project.features?.length || project.contribution) && (
            <div className="mb-6">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] focus-ring rounded py-1 cursor-pointer select-none transition-colors"
              >
                <span>{isExpanded ? 'Collapse details' : 'View details'}</span>
                {isExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>

              {isExpanded && (
                <div className="mt-4 p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/50 space-y-4 service-panel-enter">
                  {project.features && project.features.length > 0 && (
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-2.5">
                        Highlights
                      </p>
                      <ul className="space-y-2">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-primary)] mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.contribution && (
                    <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1.5">
                        My Role
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Action links */}
          {hasAnyLink && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {hasGithub && (
                <a
                  href={project.githubUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-hover)] text-white shadow-[var(--shadow-subtle)] transition-all duration-200 focus-ring group"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-px group-hover:-translate-y-px transition-transform duration-150" />
                </a>
              )}
              {hasLive && (
                <a
                  href={project.liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] transition-colors focus-ring group"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-px group-hover:-translate-y-px transition-transform duration-150" />
                </a>
              )}
              {hasCaseStudy && (
                <a
                  href={project.caseStudyUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] transition-colors focus-ring group"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </a>
              )}
              {hasColab && (
                <a
                  href={project.colabUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] transition-colors focus-ring group"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Open Colab</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

/* ─── Projects Section ─────────────────────────────────────────────────── */
export const Projects: React.FC = () => {
  const { projects } = portfolioContent;
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="projects" spacing="spacious" className="scroll-mt-20 border-t border-[var(--color-border-subtle)]">
      <Container size="2xl">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-[var(--color-border-subtle)]"
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
              {projects.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
              {projects.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-sm">
            {projects.description}
          </p>
        </div>

        {/* Editorial Alternating Showcase */}
        <div>
          {projects.items.map((project, index) => (
            <ProjectShowcaseItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
