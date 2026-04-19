import { Header } from './Header';
import { SiteEffects } from './SiteEffects';
import { CTASection } from './sections/CTASection';
import { EcosystemSection } from './sections/EcosystemSection';
import { FooterSection } from './sections/FooterSection';
import { HeroSection } from './sections/HeroSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { ProblemsSection } from './sections/ProblemsSection';
import { RoadmapSection } from './sections/RoadmapSection';
import { SolutionSection } from './sections/SolutionSection';
import { WhyAltonSection } from './sections/WhyAltonSection';

export async function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <EcosystemSection />
        <HowItWorksSection />
        <WhyAltonSection />
        <RoadmapSection />
        <CTASection />
        <FooterSection />
      </main>
      <SiteEffects />
    </>
  );
}
