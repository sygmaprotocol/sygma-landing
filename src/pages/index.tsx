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
import SocialBanner from "@/sections/SocialBanner";
// import { getPosts } from '@/ghost-client';

// get posts from ghost blog
export const getStaticProps = async (params: any) => {
  const posts = await getPosts();
  if (posts) {
    const parsedPosts = JSON.parse(JSON.stringify(posts));
    return {
      props: {
        posts: parsedPosts,
      },
    };
  }
  return {
    props: {
      posts: [],
    },
  };
};

const getPosts = async () => {
  const response = await fetch(
    `https://testing123.ghost.io/ghost/api/v3/content/posts/?key=${process.env.REACT_APP_GHOST_API_KEY}`
  ).then((res) => res.json());
  // console.log(response.posts);

  return response.posts;
};

export default function Home(props: any) {
  const { posts } = props;
  return (
    <HubspotProvider>
      <>
        <Hero />
        <LogoCloud />
        <SlidingWords />
        <UseSygmaTo />
        <BuildersProgram />
        {/* <MotionThrough /> */}
        {/* <ProtocolHistory /> */}
        <ProductOverview />
        <CoreFeatures />
        <SocialBanner />
        <BlogTeaser posts={posts} />
        <CTA />
        <Footer />
      </>
    </HubspotProvider>
  );
}
