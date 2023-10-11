import { PortfolioLayout } from './Layout/PortfolioLayout';
import { HeroSection, AboutSection, ResumeSection, ProjectsSection, ContactSection } from './components/sections';

export const PortfolioApp = () => {
  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </PortfolioLayout>
  )
}