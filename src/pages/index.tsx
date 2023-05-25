import Image from 'next/image'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Inter } from 'next/font/google';
import Hero from '@/sections/Hero';
import Footer from '@/components/Footer';
import ProtocolHistory from '@/sections/ProtocolHistory';
import CoreFeatures from '@/sections/CoreFeatures';
import BridgeDesign from '@/sections/BridgeDesign';
import InnerNav from '@/components/InnerNav';
import CTA from '@/sections/CTA';
import Contact from '@/sections/Contact';
import SlidingWords from '@/sections/SlidingWords';
import LogoCloud from '@/components/LogoCloud';
import UseSygmaTo from '@/sections/UseSygmaTo';
import BuildersProgram from '@/sections/BuildersProgram';
import { MotionThrough } from '@/sections/MotionThrough';
import BlogTeaser from '@/sections/BlogTeaser';
import ProductOverview from '@/sections/ProductOverview';
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import type { Post } from '@/sections/BlogTeaser';

// get posts from ghost blog
export const getStaticProps: GetStaticProps<{
  posts: Post;
}> = async () => {
  const res = await fetch(
    `https://testing123.ghost.io/ghost/api/v3/content/posts/?key=${process.env.REACT_APP_GHOST_API_KEY}`
  );
  const parsedResponse = await res.json();
  const posts = parsedResponse.posts;
  return { props: { posts }, revalidate: 10 };
};

export default function Home(props: any) {
  const { posts } = props;
  return (
    <HubspotProvider>
      <>
        <Hero />
        <LogoCloud />
        <ProtocolHistory />
        <ProductOverview />
        {/* <MotionThrough /> */}
        <CoreFeatures />
        <BridgeDesign />
        <SlidingWords />
        <UseSygmaTo />
        <BuildersProgram />
        <Contact />
        <BlogTeaser posts={posts} />
        <CTA />
        <Footer />
      </>
    </HubspotProvider>
  );
}
