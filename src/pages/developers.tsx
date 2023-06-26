import Footer from "@/components/Footer";
import CoreFeatures from "@/sections/CoreFeatures";
import CTA from "@/sections/SubscribeNewsletter";
import SlidingWords from "@/sections/SlidingWords";
import LogoCloud from "@/components/LogoCloud";
import UseSygmaTo from "@/sections/DevJourney";
import BuildersProgram from "@/sections/BuildersProgram";
import ProductOverview from "@/sections/ProductOverview";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import SocialBanner from "@/sections/SocialBanner";
import Hero2 from "@/sections/Hero2";

export default function Home() {
  return (
    <HubspotProvider>
      <>
        <Hero2 />
        <LogoCloud />
        <SlidingWords />
        <UseSygmaTo />
        <BuildersProgram />
        <ProductOverview />
        <CoreFeatures />
        <SocialBanner />
        <CTA />
        <Footer />
      </>
    </HubspotProvider>
  );
}
