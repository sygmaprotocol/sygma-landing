import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormPageTemplate from "@/sections/FormPageTemplate";
import SubscribeNewsletter from "@/sections/SubscribeNewsletter";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";

export default function solutions(props: any) {
  return (
    <HubspotProvider>
      <Navbar />
      <FormPageTemplate
        hsPortalId="39701769"
        hsFormId="fe1ac879-2985-4d10-9235-99201498e219"
        targetName="#builders-program-hs-form"
        title="Join the Builder's Program"
        desc="Get funding, engineering support and marketing assistance to build a cross-chain project on Sygma."
      />

      <SubscribeNewsletter />

      <Footer />
    </HubspotProvider>
  );
}
