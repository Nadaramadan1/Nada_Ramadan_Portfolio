import React, { useState } from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import type { ProjectItem } from '../../content/portfolioContent';
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

const ProjectVisual: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);

  const hasImage = project.image && !imageError;

  return (
    <div className="relative group rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] overflow-hidden shadow-xs hover:border-[var(--color-border-default)] transition-all duration-300">
      {/* Aspect Ratio Container (16:10 for modern UI presentation) */}
      <div className="relative aspect-[16/10] w-full flex flex-col justify-between overflow-hidden">
        {/* Top Window Chrome */}
        <div className="relative z-10 flex items-center justify-between px-4 py-2.5 bg-[var(--color-bg-primary)]/90 backdrop-blur-xs border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-default)] opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-default)] opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-default)] opacity-70" />
          </div>
          <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase">
            {project.category} · 0{index + 1}
          </span>
        </div>

        {/* Visual Content: Real Image OR Architectural Schematic Placeholder */}
        {hasImage ? (
          <img
            src={project.image!}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[var(--color-bg-primary)] relative overflow-hidden">
            {/* Subtle background technical grid markings */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
              <div className="p-3.5 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-accent-primary)] mb-3 shadow-xs">
                <Terminal className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                {project.title}
              </h4>
              <p className="font-mono text-xs text-[var(--color-text-muted)]">
                Interface Preview & Architecture Slot
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded bg-[var(--color-bg-secondary)] text-[var(--color-accent-primary)] border border-[var(--color-accent-border)]">
                <span>src/assets/projects/{project.id}.png</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom subtle status bar */}
        <div className="relative z-10 px-4 py-2 bg-[var(--color-bg-primary)]/80 backdrop-blur-xs border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--color-text-muted)]">
          <span>Target Architecture</span>
          <span className="text-[var(--color-accent-primary)]">Verified Implementation</span>
        </div>
      </div>
    </div>
  );
};

const ProjectShowcaseItem: React.FC<{ project: ProjectItem; index: number }> = ({
  project,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Alternating layout: even indices (0, 2) have visual first, odd (1) has details first on desktop
  const isReversed = index % 2 !== 0;

  // Check which links actually exist (do not show fake live-demo buttons)
  const hasGithub = Boolean(project.githubUrl);
  const hasLive = Boolean(project.liveUrl);
  const hasColab = Boolean(project.colabUrl);
  const hasCaseStudy = Boolean(project.caseStudyUrl);
  const hasAnyLink = hasGithub || hasLive || hasColab || hasCaseStudy;

  return (
    <article
      aria-labelledby={`project-title-${project.id}`}
      className="py-12 sm:py-16 border-b border-[var(--color-border-subtle)] last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Project Visual / Screenshot */}
        <div
          className={`lg:col-span-7 ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <ProjectVisual project={project} index={index} />
        </div>

        {/* Project Details & Meta */}
        <div
          className={`lg:col-span-5 flex flex-col justify-center ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Eyebrow / Category & Index */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-mono text-xs font-semibold text-[var(--color-accent-primary)]">
              0{index + 1} //
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3
            id={`project-title-${project.id}`}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)] mb-3 leading-snug"
          >
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 font-normal">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="mb-6">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable Technical Details Button */}
          {(project.features?.length || project.contribution) && (
            <div className="mb-6">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-accent-primary)] hover:underline focus-ring rounded py-1 cursor-pointer select-none"
              >
                <span>{isExpanded ? 'Collapse Architecture Specs' : 'Inspect Architecture Specs'}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {/* Collapsible Details Panel */}
              {isExpanded && (
                <div className="mt-4 p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/50 space-y-4 animate-hero-1">
                  {project.features && project.features.length > 0 && (
                    <div>
                      <h5 className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-2">
                        Key Architecture Highlights
                      </h5>
                      <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-primary)] mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.contribution && (
                    <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                      <h5 className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-1">
                        Scope of Contribution
                      </h5>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Dynamic Action Buttons (rendered only if links exist) */}
          {hasAnyLink && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {hasGithub && (
                <a
                  href={project.githubUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-hover)] text-white shadow-xs transition-colors focus-ring"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}

              {hasLive && (
                <a
                  href={project.liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] transition-colors focus-ring"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}

              {hasCaseStudy && (
                <a
                  href={project.caseStudyUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] transition-colors focus-ring"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}

              {hasColab && (
                <a
                  href={project.colabUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] transition-colors focus-ring"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Open Colab</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  const { projects } = portfolioContent;

  return (
    <Section id="projects" spacing="spacious" className="scroll-mt-20 border-t border-[var(--color-border-subtle)]">
      <Container size="2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-[var(--color-border-subtle)]">
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
              {projects.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
              {projects.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-md">
            {projects.description}
          </p>
        </div>

        {/* Editorial Alternating Projects Showcase */}
        <div>
          {projects.items.map((project, index) => (
            <ProjectShowcaseItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
