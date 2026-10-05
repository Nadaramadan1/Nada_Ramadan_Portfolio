import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { Button } from '../primitives/Button';
import { portfolioContent } from '../../content/portfolioContent';
import { Download } from 'lucide-react';

export const Resume: React.FC = () => {
  const { resume } = portfolioContent;
  const hasFile = Boolean(resume.fileUrl);

  return (
    <Section
      id="resume"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <Container size="2xl">
        <div className="max-w-2xl mx-auto text-center py-6 sm:py-10">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-primary)] mb-3">
            {resume.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight mb-3">
            {resume.heading}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-prose mx-auto">
            {resume.subheading}
          </p>

          <div className="flex justify-center items-center">
            {hasFile ? (
              <Button
                variant="primary"
                size="lg"
                href={resume.fileUrl!}
                download={resume.fileName ?? 'Nada-Shams-Eldin-Resume.pdf'}
                aria-label="Download Resume"
                leftIcon={<Download className="w-4 h-4" aria-hidden="true" />}
                className="shadow-sm hover:shadow-md transition-all duration-300"
              >
                Download Resume
              </Button>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Resume PDF file is pending upload (src/assets/resume/Nada-Shams-Eldin-Resume.pdf)"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] text-sm font-medium opacity-65 cursor-not-allowed select-none"
              >
                <Download className="w-4 h-4 opacity-50" aria-hidden="true" />
                <span>Download Resume</span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};




