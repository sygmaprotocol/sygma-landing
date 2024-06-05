import GiantButton from "@/components/GiantButton";

export default function DevFeature1() {
  return (
    <div className="bg-gray-100">
      <div className="relative isolate pt-8">
        <div className="py-8 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-black sm:text-5xl">
                Say hello to native interoperability
              </h1>
              <p className="my-6 text-lg leading-8 text-gray-700">
                Easily integrate the Sygma SDK and send data cross-chain with a
                click of a button.
              </p>
            </div>
            <img
              className="mx-auto lg:max-w-4xl"
              src="/data.gif"
              alt="Sygma's code snippet video demonstrating the power of general message passing for cross-chain communication, enabling seamless transfer of arbitrary data between different blockchain networks"
            />
            <div className="mx-auto mt-10  flex max-w-4xl justify-between gap-2">
              <GiantButton
                href="https://docs.buildwithsygma.com/sdk/quickstart/install"
                type="primary"
              >
                Quickstart to the SDK
              </GiantButton>
              <GiantButton
                href="https://docs.buildwithsygma.com/protocol"
                type="primary"
              >
                About the protocol
              </GiantButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
