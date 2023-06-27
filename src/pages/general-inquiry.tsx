import Footer from "@/components/Footer";
import FormPageTemplate from "@/sections/FormPageTemplate";
import SubscribeNewsletter from "@/sections/SubscribeNewsletter";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";

export default function ContributorsProgram(props: any) {
  return (
    <HubspotProvider>
      <FormPageTemplate
        title="Contact Sygma"
        desc="Let us know how we can help you."
        hsFormId="f0ee17fe-2445-49c5-be1e-32999a97563b"
        hsPortalId="39701769"
        targetName="#general-contact"
      />
      <SubscribeNewsletter />

      <Footer />
    </HubspotProvider>
  );
}
