import Image from 'next/image';
import Hero from '@/sections/Hero';
import Footer from '@/components/Footer';
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import DeveloperHero from '@/sections/DeveloperHero';
import BlogGrid from '@/sections/BlogGrid';

export default function Contact(props: any) {
  const { posts } = props;
  return (
    // <HubspotProvider>
    <>
      <DeveloperHero />
      <Footer />
    </>
    // </HubspotProvider>
  );
}
