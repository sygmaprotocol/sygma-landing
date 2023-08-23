import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";
import type { FormPageProps } from "../FormPageTemplate";

export default function BuildersProgramPage2({
  hsFormId,
  hsPortalId,
  targetName,
  title,
  desc,
}: FormPageProps) {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: hsPortalId,
    formId: hsFormId,
    target: targetName,
  });

  const listItemStyles = `text-black my-2`;

  if (error) console.log(error);
  return (
    <div className="relative isolate bg-gray-200 py-8 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 border-b-4 border-warm-white lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-2 lg:py-48 ">
          <div className="mx-auto max-w-7xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-black">
              Announcing Sygma's Contributor Program
            </h1>
            <p className="mb-4 mt-6 text-lg leading-7 text-gray-900">
              Get funding, engineering support and marketing assistance to build
              a cross-chain project on Sygma.
            </p>
            <h2 className="text-2xl font-semibold text-black">
              Who should apply?
            </h2>
            <ul className="list-disc px-4">
              <li className={listItemStyles}>
                You are building a new cross-chain application or want to take
                your existing project cross-chain{" "}
              </li>
              <li className={listItemStyles}>
                You have assembled a team, have started or are ready to start
                development
              </li>
              <li className={listItemStyles}>
                You have an innovative use case on top of cross-chain
                communication (xCall, AMB) in the area of:
                <ul className="list-disc px-12">
                  <li>Cross-Chain DeFi</li>
                  <li>Cross-Chain Governance</li>
                  <li>Omnichain Tokens & NFTs</li>
                </ul>
              </li>
              <li className={listItemStyles}>
                You are building on an EVM and/or Substrate-Based chains
              </li>
            </ul>
            <h2 className="mt-4 text-2xl font-semibold text-black">
              Why you should apply
            </h2>
            <p className="mb-4 mt-2 text-lg leading-7 text-gray-900">
              Sygma will supercharge your cross-chain experience. We provide
              funding, technical assistance as well as marketing support to make
              sure cross-chain becomes a major enabler and driver for the
              success of your project. This will speed up your time-to-market as
              well as the impact of your project significantly.
            </p>
            <p className="mb-4 mt-2 text-lg leading-7 text-gray-900">
              The unique combination of capital and expertise across technical
              architecture, R&D as well as security that Sygma & ChainSafe teams
              can provide is unparalleled in the space and has allowed various
              top tier projects to go cross-chain and beyond.
            </p>
          </div>
        </div>
        <form className="bg-gray-200 px-6 pb-24 pt-20 sm:pb-32 lg:px-4 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div id={targetName.substring(1)}></div>
            {!loaded && (
              <p className="mt-6 text-lg leading-7 text-gray-900">
                Loading form...
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
