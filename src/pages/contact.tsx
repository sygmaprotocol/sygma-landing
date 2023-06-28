import Image from "next/image";
import Footer from "@/components/Footer";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import ContactLanding from "@/sections/ContactLanding";
import CTA from "@/sections/SubscribeNewsletter";
import Head from "next/head";

export default function Contact() {
  return (
    <HubspotProvider>
      <>
        <Head>
          <title>Contact Us | Sygma</title>
          <meta
            name="description"
            content="Get in touch with our team for support, partnerships, or inquiries
            about Sygma's cross-chain solutions."
          />
        </Head>
        <ContactLanding />
        <CTA />
        <Footer />
      </>
    </HubspotProvider>
  );
}
