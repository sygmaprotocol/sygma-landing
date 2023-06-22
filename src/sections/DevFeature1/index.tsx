import GiantButton from "@/components/GiantButton";

export default function DevFeature1() {
  return (
    <div className="bg-warm-white">
      <div className="relative isolate pt-8">
        <div className="py-8 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-black sm:text-5xl">
                Sending data cross-chain.
              </h1>
              <p className="my-6 text-lg leading-8 text-gray-700">
                description goes here
              </p>
            </div>
            <video autoPlay muted loop className="mx-auto max-w-4xl">
              <source src="highlight.mp4" type="video/mp4" />
            </video>
            <div className="mx-auto mt-10  flex max-w-4xl justify-between gap-2">
              <GiantButton type="primary">
                Message Passing Tutorial{" "}
              </GiantButton>
              <GiantButton type="primary">Demo at Polkadot Decoded</GiantButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
