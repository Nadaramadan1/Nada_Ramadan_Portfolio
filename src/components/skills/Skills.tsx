import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { portfolioContent } from '../../content/portfolioContent';
import type { SkillCategory } from '../../content/portfolioContent';
import { ArrowRight } from 'lucide-react';

// ---------------------------------------------------------------------------
// SkillItem — individual skill within a category
// ---------------------------------------------------------------------------
const SkillItem: React.FC<{ label: string; delay: number; visible: boolean }> = ({
  label,
  delay,
  visible,
}) => {
  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const style: React.CSSProperties = prefersReduced
    ? {}
    : {
        transitionDelay: visible ? `${delay}ms` : '0ms',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      };

  return (
    <li
      className="group/skill flex items-center gap-2.5 py-2 border-b border-[var(--color-border-subtle)] last:border-b-0 cursor-default"
      style={style}
    >
      {/* Animated left rule on hover */}
      <span
        className="block w-4 h-px bg-[var(--color-accent-primary)] shrink-0 opacity-0 group-hover/skill:opacity-100 transition-all duration-200 group-hover/skill:w-6"
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover/skill:text-[var(--color-text-primary)] transition-colors duration-150">
        {label}
      </span>
    </li>
  );
};

// ---------------------------------------------------------------------------
// CategoryBlock — one numbered capability category
// ---------------------------------------------------------------------------
const CategoryBlock: React.FC<{
  category: SkillCategory;
  itemOffset: number;
  visible: boolean;
  categoryDelay: number;
}> = ({ category, itemOffset, visible, categoryDelay }) => {
  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const blockStyle: React.CSSProperties = prefersReduced
    ? {}
    : {
        transitionDelay: visible ? `${categoryDelay}ms` : '0ms',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      };

  return (
    <div
      className="group py-6 sm:py-8 border-b border-[var(--color-border-subtle)] last:border-b-0"
      style={blockStyle}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start">
        {/* Left: Category meta (index + label + description) */}
        <div className="sm:col-span-5 lg:col-span-4">
          <div className="flex items-baseline gap-2 mb-1.5">
            <span className="font-mono text-xs font-semibold text-[var(--color-accent-primary)] shrink-0">
              {category.index}
            </span>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)] leading-snug">
              {category.label}
            </h3>
          </div>
          {category.description && (
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              {category.description}
            </p>
          )}
        </div>

        {/* Right: Skills list */}
        <div className="sm:col-span-7 lg:col-span-8">
          <ul className="divide-y-0 space-y-0" aria-label={`${category.label} skills`}>
            {category.skills.map((skill, idx) => (
              <SkillItem
                key={skill}
                label={skill}
                delay={itemOffset + idx * 60}
                visible={visible}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Skills — main exported section component
// ---------------------------------------------------------------------------
export const Skills: React.FC = () => {
  const { skills } = portfolioContent;
  const observerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = observerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Compute cumulative skill-item offsets so stagger is continuous across categories
  const offsets: number[] = [];
  let running = 0;
  skills.categories.forEach((cat) => {
    offsets.push(running);
    running += cat.skills.length * 60 + 80; // 80ms gap between categories
  });

  return (
    <Section
      id="skills"
      spacing="spacious"
      className="scroll-mt-20 border-t border-[var(--color-border-subtle)]"
    >
      <div ref={observerRef}>
      <Container size="2xl">
        {/* ── Section Header ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-[var(--color-border-subtle)]">
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
              {skills.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
              {skills.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-md">
            {skills.intro}
          </p>
        </div>

        {/* ── Main Layout: Left intro strip + Right capability map ─ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Sticky editorial label column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="relative pl-6 border-l-2 border-[var(--color-accent-primary)] mb-8">
              <p className="text-base sm:text-lg font-medium text-[var(--color-text-primary)] leading-relaxed">
                Technical breadth across software engineering, AI&nbsp;&amp;&nbsp;ML, and web
                development.
              </p>
            </div>

            {/* Discipline summary strip */}
            <div className="grid grid-cols-2 gap-4 text-xs border-t border-[var(--color-border-subtle)] pt-6">
              <div>
                <span className="block font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                  Categories
                </span>
                <span className="font-semibold text-[var(--color-text-primary)] text-sm">
                  {skills.categories.length} Domains
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                  Technologies
                </span>
                <span className="font-semibold text-[var(--color-text-primary)] text-sm">
                  {skills.categories.reduce((acc, c) => acc + c.skills.length, 0)} Listed
                </span>
              </div>
            </div>
          </div>

          {/* Right: Capability map — vertically structured category blocks */}
          <div className="lg:col-span-8" role="list" aria-label="Technical capability categories">
            {skills.categories.map((cat, idx) => (
              <div key={cat.id} role="listitem">
                <CategoryBlock
                  category={cat}
                  itemOffset={offsets[idx]}
                  categoryDelay={idx * 100}
                  visible={visible}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Section footer nav ──────────────────────────────────── */}
        <div className="pt-6 mt-12 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          <span className="font-mono">End of Capability Map</span>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', '#contact');
            }}
            className="inline-flex items-center gap-1.5 text-[var(--color-accent-primary)] hover:underline font-medium focus-ring rounded"
          >
            <span>Jump to Contact</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
      </div>
    </Section>
  );
};
