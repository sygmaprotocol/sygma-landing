import Footer from "@/components/Footer";
import FormPageTemplate from "@/sections/FormPageTemplate";
import ProtocolHistory from "@/sections/ProtocolHistory";
import SolutionsHero from "@/sections/SolutionsHero";
import SubscribeNewsletter from "@/sections/SubscribeNewsletter";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";

export default function solutions(props: any) {
  return (
    <HubspotProvider>
      <SolutionsHero />
      <FormPageTemplate
        hsPortalId="39701769"
        hsFormId="f0ee17fe-2445-49c5-be1e-32999a97563b"
        title="Sygma Solutions"
        desc="Reach out for integration support and customizing cross-chain messaging into your exsting dapp or protocol."
        targetName="#solutions"
      />
      <ProtocolHistory />

      <SubscribeNewsletter />
      <Footer />
    </HubspotProvider>
  );
}
