import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormPageTemplate from "@/sections/FormPageTemplate";
import SlidingWords from "@/sections/SlidingWords";
import SolutionsHero from "@/sections/SolutionsHero";
import SubscribeNewsletter from "@/sections/SubscribeNewsletter";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";

export default function solutions(props: any) {
  return (
    <HubspotProvider>
      <SolutionsHero/>
      <FormPageTemplate
        hsPortalId="39701769"
        hsFormId="f0ee17fe-2445-49c5-be1e-32999a97563b"
        targetName="#solutions"
      />
    
      <SubscribeNewsletter/>
      <Footer />
      </HubspotProvider>
  );
}
