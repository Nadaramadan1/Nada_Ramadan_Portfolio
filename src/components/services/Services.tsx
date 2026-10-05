import React from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';

export const Services: React.FC = () => {
  const { services } = portfolioContent;

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
            {services.heading}
          </h2>
        </div>

        {/* Clean Service List */}
        <div className="divide-y divide-[var(--color-border-subtle)] border-t border-b border-[var(--color-border-subtle)]">
          {services.services.map((item) => (
            <div
              key={item.id}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="font-mono text-sm font-semibold text-[var(--color-accent-primary)]">
                  {item.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="md:col-span-7">
                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {item.shortDescription}
                </p>
              </div>

              {/* Contact Me CTA */}
              <div className="md:col-span-3 flex md:justify-end items-center pt-2 md:pt-0">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center text-xs font-mono font-medium text-[var(--color-accent-primary)] hover:underline focus-ring rounded"
                >
                  <span>Contact Me →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

