import Image from 'next/image';
import Hero from '@/sections/Hero';
import Footer from '@/components/Footer';
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import ContactLanding from '@/sections/ContactLanding';
import CTA from "@/sections/SubscribeNewsletter";

export default function Contact() {
  return (
    <HubspotProvider>
      <>
        <ContactLanding />
        <CTA />
        <Footer />
      </>
    </HubspotProvider>
  );
}
