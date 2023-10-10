import { PortfolioLayout } from './Layout/PortfolioLayout';
import { HeroSection, AboutSection, ResumeSection, ProjectsSection } from './components/sections';

export const PortfolioApp = () => {
  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
    </PortfolioLayout>
  )
}