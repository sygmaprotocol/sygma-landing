import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

export default function FormTemplateFull() {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "39701769",
    formId: "6edc166e-9a3c-4b26-a733-c4ab149b5275",
    target: "#newsletter-subscribe-input",
  });

  return (
    <div
      className="relative h-[80vh] isolate overflow-hidden bg-gray-200"
      id="#integrations"
    >
      <div className="mt-14 lg:mt-12 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The first revshare program for cross-chain builders.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-700">
            If you're a blockchain or app developer who is interested in royalties for building interoperability primitives, sign up below.
          </p>
          {/* Newsletter subscription input */}
          <div className="mt-4 flex items-center justify-center gap-x-6">
            <div id="newsletter-subscribe-input"></div>
          </div>
        </div>
      </div>
      {/* Gradient */}
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#EE6732" />
            <stop offset={1} stopColor="#F37441" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
