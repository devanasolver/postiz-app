import { LandingLayout } from '@gitroom/frontend/components/layout/landing/landing.layout';
import { Hero } from '@gitroom/frontend/components/landing/hero';
import { Features } from '@gitroom/frontend/components/landing/features';
import { Pricing } from '@gitroom/frontend/components/landing/pricing';
import { CTA } from '@gitroom/frontend/components/landing/cta';

export default function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <Features />
      <Pricing />
      <CTA />
    </LandingLayout>
  );
}
