import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ServiceIntentProvider } from './context/ServiceIntentContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Education } from './components/education/Education';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Certifications } from './components/certifications/Certifications';
import { Resume } from './components/resume/Resume';
import { Contact } from './components/contact/Contact';
import { CustomCursor } from './components/primitives/CustomCursor';
import { Container } from './components/primitives/Container';
import { portfolioContent } from './content/portfolioContent';

const PortfolioMain: React.FC = () => {
  const { personal } = portfolioContent;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] transition-colors duration-200">
      <CustomCursor />
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Home / Hero */}
        <Hero />

        {/* Section 2: About */}
        <About />

        {/* Section 3: Education */}
        <Education />

        {/* Section 4: Services */}
        <Services />

        {/* Section 4: Projects */}
        <Projects />

        {/* Section 5: Experience */}
        <Experience />

        {/* Section 6: Skills */}
        <Skills />

        {/* Section 7: Certifications */}
        <Certifications />

        {/* Section 8: Resume */}
        <Resume />

        {/* Section 9: Contact */}
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
              © {new Date().getFullYear()} Nada Shams Eldin
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
      <ServiceIntentProvider>
        <PortfolioMain />
      </ServiceIntentProvider>
    </ThemeProvider>
  );
}
