import Image from "next/image";
import Footer from "@/components/Footer";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import ContactForm from "@/sections/ContactForm";

export default function BuildersProgram(props: any) {
  return (
    <HubspotProvider>
      <>
        <ContactForm
          hsPortalId="39701769"
          hsFormId="fe1ac879-2985-4d10-9235-99201498e219"
          targetName="#builders-program-hs-form"
        />
        <Footer />
      </>
    </HubspotProvider>
  );
}
