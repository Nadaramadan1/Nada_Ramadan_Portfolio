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
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <h2 className="sr-only">{resume.heading}</h2>
          {hasFile ? (
            <Button
              variant="primary"
              size="lg"
              href={resume.fileUrl!}
              download={resume.fileName ?? 'Nada-Shams-Eldin-Resume.pdf'}
              aria-label="Download Resume"
              leftIcon={<Download className="w-4 h-4" aria-hidden="true" />}
            >
              Download Resume
            </Button>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Resume PDF is required before enabling download"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] text-sm font-medium opacity-60 cursor-not-allowed select-none"
            >
              <Download className="w-4 h-4 opacity-50" aria-hidden="true" />
              <span>Download Resume</span>
            </button>
          )}
        </div>
      </Container>
    </Section>
  );
};



