import Image from 'next/image';
import Hero from '@/sections/Hero';
import Footer from '@/components/Footer';
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import ContactLanding from '@/sections/ContactLanding';

export default function Contact(props: any) {
  const { posts } = props;
  return (
    // <HubspotProvider>
    <>
      <ContactLanding />
      <Footer />
    </>
    // </HubspotProvider>
  );
}
