import Footer from "@/components/Footer";
import FormPageTemplate from "@/sections/FormPageTemplate";
import ProtocolHistory from "@/sections/ProtocolHistory";
import SolutionsHero from "@/sections/SolutionsHero";
import SubscribeNewsletter from "@/sections/SubscribeNewsletter";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import Head from "next/head";

export default function solutions(props: any) {
  return (
    <HubspotProvider>
      <Head>
        <title>Custom Cross-Chain Solutions | Sygma</title>
        <meta
          name="description"
          content="Consult Sygma for tailored cross-chain solutions, leveraging our
          expertise to build innovative applications and unlock the power of
          cross-chain connectivity."
        />
        <desc></desc>
      </Head>
      <SolutionsHero />
      {/* <ProtocolHistory /> */}
      <FormPageTemplate
        hsPortalId="39701769"
        hsFormId="2b8f93ff-268a-4a9e-85d3-a146938c2c4a"
        title="Sygma Solutions"
        desc="Reach out for integration support and customizing cross-chain messaging into your exsting dapp or protocol."
        targetName="#solutions"
      />

      <SubscribeNewsletter />
      <Footer />
    </HubspotProvider>
  );
}
