import { PortfolioLayout } from './Layout/PortfolioLayout';
import { HeroSection, AboutSection } from './components/sections';

export const PortfolioApp = () => {
  return (
    <PortfolioLayout>
      <HeroSection />

      <AboutSection />
    </PortfolioLayout>
  )
}