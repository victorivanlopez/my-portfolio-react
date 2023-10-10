import { PortfolioLayout } from './Layout/PortfolioLayout';
import { HeroSection, AboutSection, ResumeSection } from './components/sections';

export const PortfolioApp = () => {
  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <ResumeSection />
    </PortfolioLayout>
  )
}