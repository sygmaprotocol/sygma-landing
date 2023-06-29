import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormPageTemplate from "@/sections/FormPageTemplate";
import SubscribeNewsletter from "@/sections/SubscribeNewsletter";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import Head from "next/head";

export default function solutions(props: any) {
  return (
    <HubspotProvider>
      <Head>
        <title>
          Sygma Contributor Program for Cross-Chain Innovation | Sygma
        </title>
        <meta
          name="description"
          content="Join our program for technical support, incentives, and resources to build on Sygma. Shape the cross-chain ecosystem with us."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@buildwithsygma" />
        <meta
          name="twitter:title"
          content="Sygma Contributor Program for Cross-Chain Innovation"
        />
        <meta
          name="twitter:description"
          content="Join our program for technical support, incentives, and resources to build on Sygma. Shape the cross-chain ecosystem with us."
        />
        <meta
          name="twitter:image"
          content="https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/7751015e-7685-47bd-6fe8-fe81adf2eb00/public"
        />
      </Head>
      <Navbar />
      <FormPageTemplate
        hsPortalId="39701769"
        hsFormId="0126779e-c437-4c5d-b478-60e0e16b4341"
        targetName="#contributor-program-form"
        title="Announcing Sygma's Contributor Program"
        desc="Join our program for technical support, incentives, and resources to build on Sygma. Shape the cross-chain ecosystem with us."
      />

      <SubscribeNewsletter />

      <Footer />
    </HubspotProvider>
  );
}
