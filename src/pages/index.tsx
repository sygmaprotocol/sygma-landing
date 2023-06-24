import Image from 'next/image'
import { GetStaticProps } from 'next';
import Hero from '@/sections/Hero';
import Footer from '@/components/Footer';
import CTA from "@/sections/SubscribeNewsletter";
import LogoCloud from "@/components/LogoCloud";
import BuildersProgram from "@/sections/BuildersProgram";
import BlogTeaser from "@/sections/BlogTeaser"
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import SocialBanner from "@/sections/SocialBanner";
import { getAllPosts } from "@/ghost-client";
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
        <BuildersProgram />
        <SocialBanner />
        <BlogTeaser posts={posts} />
        <CTA />
        <Footer />
      </>
    </HubspotProvider>
  );
}
