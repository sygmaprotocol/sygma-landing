import ExternalButton from '@/components/Button/ExternalButton';

export default function BuildersProgram() {
  return (
    <div className="bg-white py-24 sm:py-32" id="#program">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col">
            <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              The builder's program
            </p>
            <p className="my-3 leading-6 text-gray-600">
              Sygma will enable you to harness the power of multiple
              blockchains.
            </p>
            <p className="text-md my-2 leading-6 text-gray-600">
              By joining our builder program, you can enjoy access to:{" "}
            </p>
            <ul className="my-2 text-gray-600">
              <li className="text-md text-gray-600">✅ Funding </li>{" "}
              <li className="text-md text-gray-600">✅ Engineering support</li>{" "}
              <li className="text-md text-gray-600">✅ Marketing assistance</li>
            </ul>
            <p className="text-md my-2 leading-6 text-gray-600">
              ...to ensure cross-chain becomes a major enabler and driver for
              the success of your project. This will speed up your
              time-to-market as well as the impact of your project.
            </p>
            <p className="text-md my-2 leading-6 text-gray-600">
              We're offering this unique combination of monetary incentives and
              technical support because we believe in the future of cross-chain.
              Join us to get first access to Sygma releases and receive up to
              $40,000 CAD in funding!
            </p>

            <div className="my-6">
              <ExternalButton
                className="mt-w-auto"
                type="secondary"
                href="/builders"
              >
                Apply Now
              </ExternalButton>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1">
            <img className="object-cover" src="/builder.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
