import Image from 'next/image'
import { Inter } from 'next/font/google'
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
import _ from 'lodash';

const prepareForSerialization = (obj: any) => {
  return _.mapValues(obj, (value: any) =>
    typeof value === 'undefined' ? null : value
  );
};

export const getStaticProps = async (params: any) => {
  const posts = await getPosts();
  const parsedPosts = JSON.parse(JSON.stringify(posts));
  return {
    props: {
      posts: parsedPosts,
    },
  };
};

const getPosts = async () => {
  const response = await fetch(
    `https://testing123.ghost.io/ghost/api/v3/content/posts/?key=${process.env.REACT_APP_GHOST_API_KEY}`
  ).then((res) => res.json());
  console.log(response.posts);

  return response.posts;
};

export default function Home(props: any) {
  const { posts } = props;
  return (
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
      {/* <CTA /> */}
      <Footer />
    </>
  );
}
