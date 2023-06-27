import GiantButton from "@/components/GiantButton";

export default function DevFeature2() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate pt-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-100 to-primary-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-8 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-5xl">
                Getting started with EVM to Substrate transfers
              </h1>
              <p className="my-6 text-lg leading-8 text-gray-300">
                Sygma SDK tells you which parameters you need to send
                transactions between Polkadot, Ethereum and more.
              </p>
            </div>
            <video autoPlay muted loop className="mx-auto lg:max-w-4xl">
              <source src="highlight.mp4" type="video/mp4" />
            </video>
            <div className="mx-auto mt-10  flex max-w-4xl justify-between gap-2">
              <GiantButton
                href="https://docs.buildwithsygma.com/environments/"
                type="primary"
              >
                Fungible Token Transfer Demo (UI)
              </GiantButton>
              <GiantButton
                href="https://docs.buildwithsygma.com/environments/"
                type="primary"
              >
                NFT Transfer Demo (UI){" "}
              </GiantButton>
            </div>
            <div className="mx-auto mt-2  flex max-w-4xl justify-between gap-2">
              <GiantButton
                href="https://docs.buildwithsygma.com/sdk/examples/substrate-evm-example"
                type="secondary"
              >
                Sending Substrate Transfers (CLI){" "}
              </GiantButton>
              <GiantButton
                type="secondary"
                href="https://docs.buildwithsygma.com/sdk/examples/node-js-example"
              >
                Sending EVM Transfers (CLI){" "}
              </GiantButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
