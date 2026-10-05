import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { useServiceIntent } from '../../context/ServiceIntentContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const { services, projects } = portfolioContent;
  const { selectedServiceId, selectService } = useServiceIntent();

  const headerRef = useScrollReveal<HTMLDivElement>();
  const layoutRef = useScrollReveal<HTMLDivElement>();

  // Default to first service if none selected
  const activeServiceId = selectedServiceId || services.services[0].id;
  const activeService =
    services.services.find((s) => s.id === activeServiceId) || services.services[0];

  // Only show a related project if it genuinely exists for this service
  const relatedProject = activeService.relatedProjectId
    ? projects.items.find((p) => p.id === activeService.relatedProjectId)
    : null;

  const handleSelectService = (id: string, title: string) => {
    selectService(id, title);
  };

  const scrollToContact = (
    e: React.MouseEvent<HTMLAnchorElement>,
    serviceId: string,
    title: string
  ) => {
    e.preventDefault();
    selectService(serviceId, title);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#contact');
    }
  };

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#projects');
    }
  };

  return (
    <Section
      id="services"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <Container size="2xl">
        {/* Section Header */}
        <div ref={headerRef} className="reveal max-w-2xl mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
            {services.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.12] mb-4">
            {services.heading}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {services.intro}
          </p>
        </div>

        {/* Guided Journey Layout */}
        <div
          ref={layoutRef}
          className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left: Service Selector */}
          <div className="lg:col-span-6 space-y-2.5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
              What are you building?
            </p>

            {services.services.map((item) => {
              const isSelected = item.id === activeServiceId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectService(item.id, item.title)}
                  aria-pressed={isSelected}
                  className={`w-full text-left px-5 py-4 sm:py-5 rounded-xl border transition-all duration-250 cursor-pointer focus-ring flex items-start justify-between gap-4 group ${
                    isSelected
                      ? 'border-[var(--color-accent-primary)] bg-[var(--color-accent-subtle)] shadow-[var(--shadow-subtle)]'
                      : 'border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/30 hover:border-[var(--color-border-default)] hover:bg-[var(--color-bg-secondary)]/60'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'text-[var(--color-accent-primary)]'
                          : 'text-[var(--color-border-default)] group-hover:text-[var(--color-text-muted)]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className={`text-base sm:text-lg font-semibold tracking-tight mb-1 transition-colors ${
                          isSelected
                            ? 'text-[var(--color-text-primary)]'
                            : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Active indicator dot */}
                  <span
                    className={`shrink-0 w-1.5 h-1.5 rounded-full mt-2 transition-all duration-250 ${
                      isSelected
                        ? 'bg-[var(--color-accent-primary)] scale-125'
                        : 'bg-transparent'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Solution Detail Panel */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div
              key={activeServiceId}
              className="service-panel-enter p-6 sm:p-8 rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 space-y-6"
            >
              {/* Step 02 — Solution */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-primary)] mb-2">
                  How I can help
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-2 leading-snug">
                  {activeService.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {activeService.shortDescription}
                </p>
              </div>

              {/* Step 03 — Relevant Work (only when a genuine project exists) */}
              {relatedProject ? (
                <div className="pt-5 border-t border-[var(--color-border-subtle)] space-y-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                    Related Work
                  </p>
                  <div className="p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-primary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-text-primary)] mb-0.5">
                        {relatedProject.title}
                        <span className="font-normal text-[var(--color-text-muted)] ml-1.5">
                          — {relatedProject.category}
                        </span>
                      </p>
                      <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                        {relatedProject.shortDescription}
                      </p>
                    </div>
                  </div>
                  {/* View Related Work CTA */}
                  <a
                    href="#projects"
                    onClick={scrollToProjects}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] transition-colors focus-ring rounded link-underline"
                  >
                    View related work
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : null}

              {/* Step 04 — CTA */}
              <div className="pt-5 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-4 flex-wrap">
                <p className="font-mono text-xs text-[var(--color-text-muted)]">
                  Ready to start?
                </p>
                <a
                  href="#contact"
                  onClick={(e) => scrollToContact(e, activeService.id, activeService.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent-primary)] text-white text-xs font-semibold hover:bg-[var(--color-accent-hover)] transition-all duration-200 focus-ring shadow-[var(--shadow-subtle)] group"
                >
                  <span>Let&apos;s Discuss This</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
