import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../primitives/Container';
import { ThemeToggle } from '../primitives/ThemeToggle';
import { portfolioContent } from '../../content/portfolioContent';
import type { NavItem } from '../../content/portfolioContent';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection: controlledActiveSection }) => {
  const [internalActiveSection, setInternalActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const activeSection = controlledActiveSection || internalActiveSection;
  const { personal, navigation } = portfolioContent;

  // Track scroll position for subtle navbar elevation/border transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver on all registered section elements
  useEffect(() => {
    if (controlledActiveSection) return;

    const sectionElements = navigation
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section with highest intersection ratio
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio or bounding top
          const bestMatch = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setInternalActiveSection(bestMatch.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navigation, controlledActiveSection]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(item.id);
    if (targetElement) {
      setInternalActiveSection(item.id);
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update hash in URL without jumping
      window.history.pushState(null, '', item.href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border-subtle)] shadow-sm py-2.5 sm:py-3'
          : 'bg-[var(--color-bg-primary)]/80 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <Container size="2xl">
        <div className="flex items-center justify-between">
          {/* Identity: Name + Professional Title */}
          <a
            href="#home"
            onClick={(e) =>
              handleNavClick(e, { id: 'home', label: 'Home', href: '#home' })
            }
            className="group flex items-center gap-2.5 focus-ring rounded-lg py-1 px-1 -ml-1 transition-colors"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors">
              {personal.name}
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] px-2 py-0.5 rounded">
              {personal.title}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 bg-[var(--color-bg-secondary)]/70 border border-[var(--color-border-subtle)] p-1 rounded-full shadow-xs"
          >
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus-ring ${
                    isActive
                      ? 'text-white bg-[var(--color-accent-primary)] shadow-xs font-semibold'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]/70'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Desktop Compact Nav + Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5">
            {/* Tablet/Medium Screen Navigation (Compact) */}
            <nav
              aria-label="Tablet Navigation"
              className="hidden md:flex lg:hidden items-center gap-1 mr-1"
            >
              {navigation.slice(0, 5).map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-2 py-1 text-xs rounded-md transition-colors focus-ring ${
                      isActive
                        ? 'text-[var(--color-accent-primary)] font-semibold bg-[var(--color-accent-subtle)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Light / Dark Mode Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] transition-colors focus-ring cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer / Overlay Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          ref={mobileMenuRef}
          className="fixed inset-x-0 top-[57px] bottom-0 z-40 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl border-t border-[var(--color-border-subtle)] overflow-y-auto px-6 py-6 transition-all duration-300 lg:hidden flex flex-col justify-between"
        >
          <div className="space-y-1">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-3 px-3">
              Navigation Menu
            </p>
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors focus-ring ${
                    isActive
                      ? 'bg-[var(--color-accent-subtle)] text-[var(--color-accent-primary)] font-semibold border-l-2 border-[var(--color-accent-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs opacity-60">#{item.id}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Footer Drawer Status */}
          <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)]">
            <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
              <span className="font-medium text-[var(--color-text-primary)]">
                {personal.name} · {personal.title}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
