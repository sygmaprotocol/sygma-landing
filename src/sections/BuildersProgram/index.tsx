import ExternalButton from '@/components/Button/ExternalButton';

export default function CommunityProgram() {
  return (
    <div className="bg-white py-24 sm:py-32" id="#program">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col">
            <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Catalyzing a cross-chain builder community
            </p>
            <p className="my-3 leading-6 text-gray-600">
              At Sygma, we aim to create a thriving community of open source
              contributors that helps cross-chain builders create and share
              modular components for effortless integration of cross-chain use
              cases in DeFi, gaming, and more.
            </p>

            <div className="my-6">
              <ExternalButton
                className="mt-w-auto"
                type="secondary"
                href="/contributors-program"
              >
                Learn more
              </ExternalButton>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1">
            <img className="object-cover" src="/contributor.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
