import Image from 'next/image'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Inter } from 'next/font/google';
import Hero from '@/sections/Hero';
import Footer from '@/components/Footer';
import ProtocolHistory from '@/sections/ProtocolHistory';
import CoreFeatures from '@/sections/CoreFeatures';
import BridgeDesign from '@/sections/BridgeDesign';
import InnerNav from '@/components/InnerNav';
import CTA from "@/sections/SubscribeNewsletter";
import Contact from "@/sections/Contact";
import SlidingWords from "@/sections/SlidingWords";
import LogoCloud from "@/components/LogoCloud";
import UseSygmaTo from "@/sections/DevJourney";
import BuildersProgram from "@/sections/BuildersProgram";
import { MotionThrough } from "@/sections/MotionThrough";
import BlogTeaser from "@/sections/BlogTeaser";
import ProductOverview from "@/sections/ProductOverview";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import SocialBanner from "@/sections/SocialBanner";
import { getAllPosts } from "@/ghost-client";
import Hero2 from "@/sections/Hero2";
import DevFeature from "@/sections/DevFeature1";
import DevFeature1 from "@/sections/DevFeature1";
import DevFeature2 from "@/sections/DevFeature2";
import DevJourney from "@/sections/DevJourney";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};

export default function Home(props: any) {
  const { posts } = props;
  return (
    <HubspotProvider>
      <>
        <Hero />
        <LogoCloud />
        <DevFeature2 />
        <DevFeature1 />
        <DevJourney />
        {/* <SlidingWords /> */}
        {/* <UseSygmaTo /> */}
        {/* <MotionThrough /> */}
        {/* <ProtocolHistory /> */}
        {/* <ProductOverview />
        <CoreFeatures /> */}
        <BuildersProgram />
        <SocialBanner />
        <BlogTeaser posts={posts} />
        <CTA />
        <Footer />
      </>
    </HubspotProvider>
  );
}
