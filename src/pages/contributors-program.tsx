import Footer from "@/components/Footer";
import FormTemplateFull from "@/sections/FormTemplateFull";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import Head from "next/head";

export default function ContributorsProgram(props: any) {
  return (
    <HubspotProvider>
      <Head>
        <title>Sygma Builder Program for Cross-Chain Innovation | Sygma</title>
        <meta
          name="description"
          content="Join our program for technical support, incentives, and resources to build on Sygma. Shape the cross-chain ecosystem with us."
        />
      </Head>
      <FormTemplateFull />
      <Footer />
    </HubspotProvider>
  );
}
