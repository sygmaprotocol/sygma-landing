
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Footer from "@/components/Footer";
import CoreFeatures from "@/sections/CoreFeatures";
import CTA from "@/sections/SubscribeNewsletter";
import SlidingWords from "@/sections/SlidingWords";
import LogoCloud from "@/components/LogoCloud";
import UseSygmaTo from "@/sections/DevJourney";
import BuildersProgram from "@/sections/BuildersProgram";
import BlogTeaser from "@/sections/BlogTeaser";
import ProductOverview from "@/sections/ProductOverview";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import SocialBanner from "@/sections/SocialBanner";
import { getAllPosts } from "@/ghost-client";
import Hero2 from "@/sections/Hero2";

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
        <Hero2 />
        <LogoCloud />
        <SlidingWords />
        <UseSygmaTo />
        <BuildersProgram />
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
