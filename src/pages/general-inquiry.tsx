import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormPageTemplate from "@/sections/FormPageTemplate";
import FormTemplateFull from "@/sections/FormTemplateFull";
import SolutionsHero from "@/sections/SolutionsHero";
import SubscribeNewsletter from "@/sections/SubscribeNewsletter";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";

export default function ContributorsProgram(props: any) {
  return (
    <HubspotProvider>
      {/* <FormPageTemplate /> */}
      <Footer />
    </HubspotProvider>
  );
}
