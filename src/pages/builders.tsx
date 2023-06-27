import Footer from "@/components/Footer";
import FormPageTemplate from "@/sections/FormPageTemplate";
import SubscribeNewsletter from "@/sections/SubscribeNewsletter";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";

export default function solutions(props: any) {
  return (
    <HubspotProvider>
      <FormPageTemplate
        hsPortalId="39701769"
        hsFormId="f0ee17fe-2445-49c5-be1e-32999a97563b"
        targetName="#builders-program-hs-form"
        title="Join the Builder's Program"
        desc="Get funding, engineering support and marketing assistance to build a cross-chain project on Sygma."
      />

      <SubscribeNewsletter />

      <Footer />
    </HubspotProvider>
  );
}
