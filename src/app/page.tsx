import { HeroSection } from "@/components/sections/HeroSection";
import { PainSection } from "@/components/sections/PainSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ObjectionsSection } from "@/components/sections/ObjectionsSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";
import { LegalFooter } from "@/components/sections/LegalFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <BenefitsSection />
      <ObjectionsSection />
      <AuthoritySection />
      <SocialProofSection />
      <FooterCTASection />
      <LegalFooter />
    </div>
  );
}
