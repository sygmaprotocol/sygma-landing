import Head from "next/head";
import Hero from "@/sections/Hero";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import CTA from "@/sections/SubscribeNewsletter";
import LogoCloud from "@/components/LogoCloud";
import BuildersProgram from "@/sections/BuildersProgram";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import SocialBanner from "@/sections/SocialBanner";
import { getAllPosts } from "@/ghost-client";
import DevFeature1 from "@/sections/DevFeature1";
import DevFeature2 from "@/sections/DevFeature2";
import DevJourney from "@/sections/DevJourney";
import SlidingWords from "@/sections/SlidingWords";
import CoreFeatures from "@/sections/CoreFeatures";
import BlogTeaser from "@/sections/BlogTeaser";

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getAllPosts();

//   if (!posts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { posts },
//   };
// };

export default function Home(props: any) {
  // const { posts } = props;
  return (
    <HubspotProvider>
      <>
        <Head>
          <title>
            The interoperability layer for building cross-blockchain
            applications | Sygma
          </title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="descsription"
            content="Build on Sygma's cross-chain infrastructure with our TypeScript SDK
            for seamless communication across EVM, Substrate, Cosmos and more."
          />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/39701769.js"
          ></script>
          <script
            defer
            data-domain="buildwithsygma.com"
            src="https://plausible.io/js/script.js"
          ></script>
        </Head>
        <Hero />
        <LogoCloud />
        <DevFeature2 />
        <DevFeature1 />
        <SlidingWords />
        <DevJourney />
        <CoreFeatures />
        <BuildersProgram />
        <SocialBanner />
        <CTA />
        {/* <BlogTeaser posts={posts} /> */}
        <Footer />
      </>
    </HubspotProvider>
  );
}
