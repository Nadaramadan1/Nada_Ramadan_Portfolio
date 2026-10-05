import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import { useServiceIntent } from '../../context/ServiceIntentContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const { services, projects } = portfolioContent;
  const { selectedServiceId, selectService } = useServiceIntent();

  // Default to first service if none selected
  const activeServiceId = selectedServiceId || services.services[0].id;
  const activeService =
    services.services.find((s) => s.id === activeServiceId) || services.services[0];

  // Find corresponding real project if configured
  const relatedProject = activeService.relatedProjectId
    ? projects.items.find((p) => p.id === activeService.relatedProjectId)
    : null;

  const handleSelectService = (id: string, title: string) => {
    selectService(id, title);
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>, serviceId: string, title: string) => {
    e.preventDefault();
    selectService(serviceId, title);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#contact');
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
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
            {services.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15] mb-4">
            {services.heading}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {services.intro}
          </p>
        </div>

        {/* Guided Client Journey Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Service Selector */}
          <div className="lg:col-span-6 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] block mb-2">
              01 Need → Select a service
            </span>
            {services.services.map((item) => {
              const isSelected = item.id === activeServiceId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectService(item.id, item.title)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer focus-ring flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'border-[var(--color-accent-primary)] bg-[var(--color-accent-subtle)]/40 shadow-sm'
                      : 'border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]/30 hover:border-[var(--color-border-default)]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isSelected ? 'text-[var(--color-accent-primary)]' : 'text-[var(--color-text-muted)]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-bold tracking-tight mb-1.5 ${
                          isSelected ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 w-2 h-2 rounded-full mt-2 transition-colors ${
                      isSelected ? 'bg-[var(--color-accent-primary)]' : 'bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Solution & Relevant Work Proof */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="p-6 sm:p-8 rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-primary)] block mb-1">
                  02 Solution Details
                </span>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                  {activeService.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {activeService.shortDescription}
                </p>
              </div>

              {/* Related Proof / Existing Project Reference */}
              {relatedProject && (
                <div className="pt-5 border-t border-[var(--color-border-subtle)] space-y-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] block">
                    03 Relevant Work Proof
                  </span>
                  <div className="p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-primary)] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--color-text-primary)]">
                        {relatedProject.title} ({relatedProject.category})
                      </h4>
                      <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed mt-0.5">
                        {relatedProject.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action CTA */}
              <div className="pt-5 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                <span className="font-mono text-xs text-[var(--color-text-muted)]">
                  04 Ready to discuss?
                </span>
                <a
                  href="#contact"
                  onClick={(e) => scrollToContact(e, activeService.id, activeService.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent-primary)] text-white text-xs font-semibold hover:bg-[var(--color-accent-hover)] transition-colors focus-ring shadow-xs"
                >
                  <span>Discuss This Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};


