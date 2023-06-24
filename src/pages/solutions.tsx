import Image from "next/image";
import Footer from "@/components/Footer";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import BuildersForm from "@/sections/BuildersForm";

export default function ConsultingFormPage(props: any) {
  return (
    <HubspotProvider>
      <>
        <BuildersForm
          hsPortalId="39701769"
          hsFormId="f0ee17fe-2445-49c5-be1e-32999a97563b"
          targetName="#builders-program-hs-form"
        />
        <Footer />
      </>
    </HubspotProvider>
  );
}