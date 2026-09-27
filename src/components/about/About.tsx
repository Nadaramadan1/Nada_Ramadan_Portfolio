import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { Binary, Cpu, Layers, Layout, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ml: <Binary className="w-5 h-5 text-[var(--color-accent-primary)]" />,
  dl: <Cpu className="w-5 h-5 text-[var(--color-accent-primary)]" />,
  'ai-projects': <Layers className="w-5 h-5 text-[var(--color-accent-primary)]" />,
  'web-dev': <Layout className="w-5 h-5 text-[var(--color-accent-primary)]" />,
};

export const About: React.FC = () => {
  const { about } = portfolioContent;

  return (
    <Section id="about" spacing="spacious" className="scroll-mt-20 border-t border-[var(--color-border-subtle)]">
      <Container size="2xl">
        {/* Section Header / Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-[var(--color-border-subtle)]">
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
              {about.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
              {about.heading}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-muted)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)]" />
            <span>Core Competencies & Profile</span>
          </div>
        </div>

        {/* Asymmetric Editorial Narrative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column: Lead Introduction & Engineering Philosophy (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative pl-6 border-l-2 border-[var(--color-accent-primary)]">
              <p className="text-xl sm:text-2xl font-medium text-[var(--color-text-primary)] leading-relaxed">
                {about.leadParagraph}
              </p>
            </div>

            {about.secondaryParagraph && (
              <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {about.secondaryParagraph}
              </p>
            )}

            {/* Quick Technical Summary Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[var(--color-border-subtle)]">
              <div>
                <span className="block font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider">
                  Role
                </span>
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                  AI Engineer
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider">
                  Primary Focus
                </span>
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Machine Learning
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider">
                  Approach
                </span>
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Hands-On & Rigorous
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Focus & Working Areas Matrix (Cols 7-12) */}
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                {about.focusHeading}
              </h3>
              <span className="font-mono text-[11px] text-[var(--color-accent-primary)]">
                4 Specialized Areas
              </span>
            </div>

            <div className="space-y-3.5">
              {about.focusItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/50 hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-default)] transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] shrink-0 group-hover:border-[var(--color-accent-border)] transition-colors">
                      {iconMap[item.id] || <Binary className="w-5 h-5 text-[var(--color-accent-primary)]" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[var(--color-accent-primary)] font-semibold">
                            {item.index} //
                          </span>
                          <h4 className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors truncate">
                            {item.title}
                          </h4>
                        </div>
                        <span className="hidden sm:inline-block font-mono text-[10px] text-[var(--color-text-muted)] px-2 py-0.5 rounded bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] shrink-0">
                          {item.tag}
                        </span>
                      </div>

                      {item.description && (
                        <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Editorial Anchor Navigation to Experience */}
        <div className="pt-6 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          <span className="font-mono">Next: Professional Experience</span>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', '#experience');
            }}
            className="inline-flex items-center gap-1.5 text-[var(--color-accent-primary)] hover:underline font-medium focus-ring rounded"
          >
            <span>Jump to Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </Section>
  );
};
