import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Award } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioContent;

  const eyebrowRef = useScrollReveal<HTMLDivElement>();
  const universityRef = useScrollReveal<HTMLHeadingElement>();
  const detailsRef = useScrollReveal<HTMLDivElement>();
  const rankingRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="education" spacing="spacious" className="scroll-mt-20 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] transition-colors duration-200">
      <Container size="2xl">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="reveal mb-6 sm:mb-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)]">
              {education.eyebrow}
            </span>
          </div>

          {/* Main Editorial Block */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* 1. University Header */}
            <h2
              ref={universityRef}
              className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight"
            >
              {education.university}
            </h2>

            {/* 2. Faculty, Degree, and Expected Graduation */}
            <div ref={detailsRef} className="reveal space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 text-lg sm:text-2xl text-[var(--color-text-primary)] font-medium">
                <span>{education.faculty}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-base sm:text-lg text-[var(--color-text-secondary)] font-normal">
                <span className="font-medium text-[var(--color-text-primary)]">
                  {education.degree}
                </span>
                <span className="hidden sm:inline text-[var(--color-border-strong)]" aria-hidden="true">•</span>
                <span className="font-mono text-xs sm:text-sm text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded-md">
                  Expected Graduation · {education.expectedGraduation}
                </span>
              </div>
            </div>

            {/* 3. Academic Achievement Highlight */}
            <div ref={rankingRef} className="reveal pt-2">
              <div className="inline-flex items-center gap-3 p-4 sm:p-5 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-border)] transition-all duration-300 group shadow-subtle hover:shadow-card">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-subtle)] text-[var(--color-accent-primary)] shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Award className="w-5 h-5" />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[var(--color-accent-primary)] tracking-tight">
                    {education.ranking.rank}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[var(--color-text-primary)]">
                    {education.ranking.label}
                  </span>
                  <span className="hidden sm:inline text-[var(--color-text-muted)]" aria-hidden="true">·</span>
                  <span className="text-xs sm:text-sm font-medium text-[var(--color-text-muted)]">
                    {education.ranking.context}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
};
