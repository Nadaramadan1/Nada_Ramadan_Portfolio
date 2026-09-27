import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Certifications } from './components/certifications/Certifications';
import { Resume } from './components/resume/Resume';
import { Contact } from './components/contact/Contact';
import { Container } from './components/primitives/Container';
import { portfolioContent } from './content/portfolioContent';

const PortfolioMain: React.FC = () => {
  const { personal } = portfolioContent;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] transition-colors duration-200">
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* Step 2 Section: Home / Hero */}
        <Hero />

        {/* Step 3 Section: About */}
        <About />

        {/* Step 3 Section: Experience */}
        <Experience />

        {/* Step 4 Section: Projects */}
        <Projects />

        {/* Step 5 Section: Skills */}
        <Skills />

        {/* Step 6 Section: Services */}
        <Services />

        {/* Step 7 Section: Certifications */}
        <Certifications />

        {/* Step 8 Section: Resume */}
        <Resume />

        {/* Step 9 Section: Contact */}
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <footer className="w-full border-t border-[var(--color-border-subtle)] py-10 bg-[var(--color-bg-primary)] transition-colors duration-200">
        <Container size="2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[var(--color-text-primary)]">
                {personal.name}
              </span>
              <span>·</span>
              <span>{personal.title}</span>
            </div>
            <div className="font-mono text-[11px]">
              Step 9: Contact Implemented · Foundation Complete
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioMain />
    </ThemeProvider>
  );
}
