import Head from "next/head";
import Hero from "@/sections/Hero";
import Footer from "@/components/Footer";
import CTA from "@/sections/SubscribeNewsletter";
import LogoCloud from "@/components/LogoCloud";
import BuildersProgram from "@/sections/BuildersProgram";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import SocialBanner from "@/sections/SocialBanner";
import DevFeature1 from "@/sections/DevFeature1";
import DevFeature2 from "@/sections/DevFeature2";
import DevJourney from "@/sections/DevJourney";
import SlidingWords from "@/sections/SlidingWords";
import CoreFeatures from "@/sections/CoreFeatures";
import ProductOverview from "@/sections/ProductOverview";
import BlogTeaser from "@/sections/BlogTeaser";
import { getAllPosts } from "@/ghost-client";
// import { use } from 'react';

export default function Home(props: any) {
  const posts = getAllPosts();
  
  console.log(posts);

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
            name="description"
            content="Build on Sygma's cross-chain infrastructure with our TypeScript SDK
            for seamless communication across EVM, Substrate, Cosmos and more."
          />
          {/*<!-- OG Meta Tags -->*/}
          <meta
            property="og:url"
            content="https://buildwithsygma.com/"
            key="ogurl"
          />
          <meta
            property="og:image"
            content="https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/3593c6f4-4eb9-4e82-cdd9-564d4ddc5c00/public"
            key="ogimage"
          />
          <meta
            property="og:site_name"
            content="Sygma Website"
            key="ogsitename"
          />
          <meta
            property="og:title"
            content="The interoperability layer for building cross-blockchain
            applications | Sygma"
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="Build on Sygma's cross-chain infrastructure with our TypeScript SDK
            for seamless communication across EVM, Substrate, Cosmos and more."
            key="ogdesc"
          />
          {/*<!-- Twitter Meta Tags -->*/}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@buildwithsygma" />
          <meta
            name="twitter:title"
            content="The interoperability layer for building cross-blockchain
            applications"
          />
          <meta
            name="twitter:description"
            content="Build on Sygma's cross-chain infrastructure with our TypeScript SDK
            for seamless communication across EVM, Substrate, Cosmos and more."
          />
          <meta
            name="twitter:image"
            content="https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/3593c6f4-4eb9-4e82-cdd9-564d4ddc5c00/public"
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
            src="https://plausible.io/js/script.outbound-links.js"
          ></script>
        </Head>
        <Hero />
        <LogoCloud />
        <DevFeature2 />
        <DevFeature1 />
        <SlidingWords />
        <ProductOverview />
        <DevJourney />
        <CoreFeatures />
        <BuildersProgram />
        <SocialBanner />
        <CTA />
        <Footer />
        <BlogTeaser posts={posts} />
      </>
    </HubspotProvider>
  );
}
