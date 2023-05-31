import Image from 'next/image';
import Hero from '@/sections/Hero';
import Footer from '@/components/Footer';
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import DeveloperHero from "@/sections/DeveloperHero";
import BridgeDesign from '@/sections/BridgeDesign';

export default function Developer(props: any) {
  const { posts } = props;
  return (
    // <HubspotProvider>
    <>
      <DeveloperHero />
      <BridgeDesign />
      <Footer />
    </>
    // </HubspotProvider>
  );
}
