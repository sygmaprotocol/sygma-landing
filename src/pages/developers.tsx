import Image from 'next/image';
import Hero from '@/sections/Hero';
import Footer from '@/components/Footer';
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import type { Post } from '@/sections/BlogTeaser';
import DeveloperHero from '@/sections/DeveloperHero';

export default function Home(props: any) {
  const { posts } = props;
  return (
    <HubspotProvider>
      <>
        <DeveloperHero />
        <Footer />
      </>
    </HubspotProvider>
  );
}
